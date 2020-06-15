import Dexie from "dexie"
import { isEqual, set } from "lodash-es"
import { DexieExportJsonStructure } from "dexie-export-import/dist/json-structure"
import { importInto } from "dexie-export-import"
import {
	ExportClientResult,
	DatabaseNames,
	ImportResponse,
} from "../__config/shape"
import readFile from "../../util/readFile"
import ClientDB from "../../data/client/ClientDatabase"
import HealthCheckDB from "../../data/healthChecks/HealthCheckDatabase"
import ActionChecklistDB from "../../data/ActionChecklist/ActionChecklistDatabase"
import CFCDB from "../../data/CFC/CFCDatabase"
import ClientUseCase from "../../data/client/ClientLogic"

/**
 * Reads a blob into text
 *
 * @export
 * @param {Blob} blob
 * @returns {(Promise<ExportClientResult | Error>)}
 */
export async function loadBlobAsJSON(
	blob: Blob
): Promise<ExportClientResult | Error> {
	try {
		const file = await readFile(blob)
		if (typeof file !== "string") {
			// eslint-disable-next-line
			throw new Error(
				"Unable to process file, ensure you have uploaded the correct file."
			)
		}

		const json: ExportClientResult = JSON.parse(file)
		return json
	} catch (e) {
		// eslint-disable-next-line
		throw new Error(e.message)
	}
}

/**
 * Validates the blob JSON data. This does some minor validation to catch possible
 * issues. When importing the data, we'll let Dexie import handle the proper
 * error handling for the data structure.
 *
 * @export
 * @param {*} data
 * @returns {boolean}
 */
export function validateJSONData(data: any): boolean {
	const keys = Object.keys(data)
	const validKeys: DatabaseNames[] = [
		"ClientDatabase",
		"HealthCheckDatabase",
		"ActionChecklistDatabase",
		"CFCDatabase",
	]

	// ensures there are 4 keys
	if (keys.length !== 4) return false

	// checks that the keys matchs the valid keys
	if (!isEqual(keys, validKeys)) return false

	// Ensures each key data uses the dexie format
	// eslint-disable-next-line
	for (let i = 0; i < keys.length; i++) {
		if (data[keys[i]] !== null) {
			if (!data[keys[i]].formatName || data[keys[i]].formatName !== "dexie") {
				return false
			}
		}
	}

	return true
}

export async function importToDatabase(
	db: Dexie,
	data: DexieExportJsonStructure,
	overwrite: boolean
): Promise<Error | boolean> {
	const blob = new Blob([JSON.stringify(data)])
	try {
		await importInto(db, blob, {
			overwriteValues: overwrite,
		})
		return true
	} catch (e) {
		return e
	}
}

/**
 * Estimates a new client id and replaces the client ids in the imported json
 * data
 *
 * @export
 * @param {ExportClientResult} json
 * @returns {Promise<ExportClientResult>}
 */
export async function overwriteClientIds(
	json: ExportClientResult
): Promise<ExportClientResult> {
	// Estimates a new client id based on the last client record
	const lastClient = await ClientUseCase.last()
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const newId = lastClient!.id! + 10

	// Ser the client database client record
	set(json, "ClientDatabase.data.data[0].rows[0].id", newId)
	const objectPaths: DatabaseNames[] = [
		"HealthCheckDatabase",
		"ActionChecklistDatabase",
		"CFCDatabase",
	]

	// Goes through the other keys and replaces the key for each of the client
	// ids with the estimated id
	objectPaths.forEach((key) => {
		if (json[key] !== null) {
			const dataArr = json[key]?.data.data
			if (dataArr) {
				dataArr.forEach((data, dIdx) => {
					const { rows } = data
					if (rows) {
						rows.forEach((row, rIdx) => {
							set(
								json,
								`${key}.data.data[${dIdx}].rows[${rIdx}].clientId`,
								newId
							)
							// Remove the record id to avoid key duplications
							// eslint-disable-next-line
							delete row.id
						})
					}
				})
			}
		}
	})

	return json
}

export default async function ImportClient(
	blob: Blob,
	overwrite = true
): Promise<ImportResponse> {
	try {
		const json = await loadBlobAsJSON(blob)

		if (json instanceof Error) {
			// eslint-disable-next-line
			throw new Error(json.message)
		}

		if (!validateJSONData(json)) {
			// eslint-disable-next-line
			throw new Error(
				"Imported data doesn't follow the correct structure. Ensure you have selected the correct export file"
			)
		}

		const data = !overwrite ? await overwriteClientIds(json) : json

		const promises = [
			data.ClientDatabase
				? importToDatabase(ClientDB, data.ClientDatabase, overwrite)
				: Promise.resolve(false),
			data.HealthCheckDatabase
				? importToDatabase(HealthCheckDB, data.HealthCheckDatabase, overwrite)
				: Promise.resolve(false),
			data.ActionChecklistDatabase
				? importToDatabase(
						ActionChecklistDB,
						data.ActionChecklistDatabase,
						overwrite
				  )
				: Promise.resolve(false),
			data.CFCDatabase
				? importToDatabase(CFCDB, data.CFCDatabase, overwrite)
				: Promise.resolve(false),
		]

		return Promise.all(promises)
	} catch (e) {
		// eslint-disable-next-line
		throw new Error(e.message)
	}
}
