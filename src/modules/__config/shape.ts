import { DexieExportJsonStructure } from "dexie-export-import/dist/json-structure"

export type JSONDataResult = DexieExportJsonStructure | null

export type DatabaseNames =
	| "ClientDatabase"
	| "HealthCheckDatabase"
	| "ActionChecklistDatabase"
	| "CFCDatabase"

export type ExportClientResult = Record<DatabaseNames, JSONDataResult>
