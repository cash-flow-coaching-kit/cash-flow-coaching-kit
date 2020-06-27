import { excelProcessFile } from "./ImportDataExcelLib"

export type ProcessFileItem = {
	row: number
	description: string
	amount: number
	type: "in" | "out"
}

// nb. Cant use MIME type to determine which process to use as requires Excel to be installed

export const generalProcessFile = async (
	fileBuffer: any
): Promise<ProcessFileItem[]> => {
	const res = await excelProcessFile(fileBuffer)
	if (!res) {
		alert(`Invalid file. Only Excel files are allowed.`)
		return []
	}
	return res
}
