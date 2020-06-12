import Dexie from "dexie"
import { exportDB, ExportOptions } from "dexie-export-import"
import { DexieExportJsonStructure } from "dexie-export-import/dist/json-structure"
import { ClientId } from "../../data/_config/shape"
import hasProperty from "../../util/object/hasProperty"
import readFile from "../../util/readFile"
import ClientDB from "../../data/client/ClientDatabase"
import HealthCheckDB from "../../data/healthChecks/HealthCheckDatabase"
import ActionChecklistDB from "../../data/ActionChecklist/ActionChecklistDatabase"
import CFCDB from "../../data/CFC/CFCDatabase"
import saveBlob from "../save-blob"
import ClientUseCase from "../../data/client/ClientLogic"
import { JSONDataResult, ExportClientResult } from "../__config/shape"

/**
 * Filters out records based on the client and returns a method that is used
 * within the export options
 *
 * @param {ClientId} client
 * @returns {ExportOptions["filter"]}
 */
export function exportFilter(client: ClientId): ExportOptions["filter"] {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (table: string, value: any): boolean => {
		if (!value) return false
		// if we're looking at the clients table, filter by the record id
		if (table === "clients") return value.id === client
		// Otherwise look at the clientId key
		return hasProperty(value, "clientId") ? value.clientId === client : false
	}
}

/**
 * Exports the database data into a blob
 *
 * @export
 * @param {Dexie} db
 * @returns {Promise<Blob>}
 */
export async function exportData(db: Dexie, client: ClientId): Promise<Blob> {
	const blob: Blob = await exportDB(db, {
		filter: exportFilter(client),
	})
	return blob
}

/**
 * Exports the data for a client and returns the results as json
 *
 * @export
 * @param {Dexie} db
 * @param {ClientId} client
 * @returns {(Promise<JSONDataResult>)}
 */
export async function getDataAsJSON(
	db: Dexie,
	client: ClientId
): Promise<JSONDataResult> {
	// Get the exported data from the database
	const blob = await exportData(db, client)
	// Convert the blob to raw text
	const text = await readFile(blob)
	// return an empty array if the text is invalid
	if (!text || typeof text !== "string") return null

	// Parse and return the data
	const json: DexieExportJsonStructure = JSON.parse(text)
	return json
}

/**
 * Extracts all the data from the different databases and constructs the payload
 * used in the json file
 *
 * @export
 * @param {ClientId} client
 * @returns {Promise<ExportClientResult>}
 */
export async function constructExportPayload(
	client: ClientId
): Promise<ExportClientResult> {
	const clientData = await getDataAsJSON(ClientDB, client)
	const healthData = await getDataAsJSON(HealthCheckDB, client)
	const checklistData = await getDataAsJSON(ActionChecklistDB, client)
	const cfcData = await getDataAsJSON(CFCDB, client)

	const res: ExportClientResult = {
		ClientDatabase: clientData,
		HealthCheckDatabase: healthData,
		ActionChecklistDatabase: checklistData,
		CFCDatabase: cfcData,
	}

	return res
}

/**
 * Constructs and downloads the export json file
 *
 * @export
 * @param {ClientId} client
 * @returns {(Promise<true | Error>)}
 */
export default async function ExportClient(
	client: ClientId
): Promise<true | Error> {
	// Ensures that the requested client does exist in the database
	const dbClient = await ClientUseCase.findById(client)
	if (!dbClient) {
		// eslint-disable-next-line
		throw new Error("Requested client could not be found")
	}

	// Get the payload and create the file blob
	const payload = await constructExportPayload(client)
	const blob = new Blob([JSON.stringify(payload)], {
		type: "application/json",
	})

	// Downloads the file
	saveBlob(blob, `${dbClient.name}--exported-data.json`)
	return true
}
