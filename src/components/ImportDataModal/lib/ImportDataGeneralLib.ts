import { excelProcessFile } from "./ImportDataExcelLib"

export type ProcessFileItem = {
	row: number
	description: string
	amount: number
	type: "in" | "out"
}

export const generalProcessFile = async (
	fileType: string,
	fileBuffer: any
): Promise<ProcessFileItem[]> => {
	// console.log("fileType", fileType)

	if (fileType.toLowerCase().indexOf("excel") >= 0) {
		return excelProcessFile(fileBuffer)
	}
	if (fileType.toLowerCase().indexOf("sheet") >= 0) {
		return excelProcessFile(fileBuffer)
	}

	alert("Invalid MIME type")
	return []
}
