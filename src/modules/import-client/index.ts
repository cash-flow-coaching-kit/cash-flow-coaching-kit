import Dexie from "dexie"
import { isEqual } from "lodash-es"
import { DexieExportJsonStructure } from "dexie-export-import/dist/json-structure"
import { importInto } from "dexie-export-import"
import { ExportClientResult, DatabaseNames } from "../__config/shape"
import readFile from "../../util/readFile"
import ClientDB from "../../data/client/ClientDatabase"
import HealthCheckDB from "../../data/healthChecks/HealthCheckDatabase"
import ActionChecklistDB from "../../data/ActionChecklist/ActionChecklistDatabase"
import CFCDB from "../../data/CFC/CFCDatabase"

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
	data: DexieExportJsonStructure
): Promise<Error | boolean> {
	const blob = new Blob([JSON.stringify(data)])
	try {
		await importInto(db, blob)
		return true
	} catch (e) {
		return e
	}
}

export default async function ImportClient(
	blob: Blob
): Promise<(boolean | Error)[]> {
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

		const promises = [
			json.ClientDatabase
				? importToDatabase(ClientDB, json.ClientDatabase)
				: Promise.resolve(false),
			json.HealthCheckDatabase
				? importToDatabase(HealthCheckDB, json.HealthCheckDatabase)
				: Promise.resolve(false),
			json.ActionChecklistDatabase
				? importToDatabase(ActionChecklistDB, json.ActionChecklistDatabase)
				: Promise.resolve(false),
			json.CFCDatabase
				? importToDatabase(CFCDB, json.CFCDatabase)
				: Promise.resolve(false),
		]

		return Promise.all(promises)
	} catch (e) {
		// eslint-disable-next-line
		throw new Error(e.message)
	}
}
