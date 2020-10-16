import { excelProcessFile } from "./ImportDataExcelLib"

export const NO_MERGE = "NO"

export type ProcessFileItem = {
	id: string // use UUID to for better match with CFC items
	// row: number
	description: string
	amount: number
	type: "in" | "out" | "debtors" | "creditors" | "assets" | "loans" | "stock"
	gst: "applygst" | "nogst"
	merge: string // if to merge into existing line or add new line
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
