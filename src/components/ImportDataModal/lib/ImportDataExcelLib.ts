import Excel, { Worksheet, Workbook } from "exceljs"
import { ProcessFileItem } from "./ImportDataGeneralLib"

const excelCreateFromData = async (data: Uint8Array) => {
	const workbook = new Excel.Workbook()
	await workbook.xlsx.load(data)
	return workbook
}

const excelProcessSheet = (worksheet: Worksheet): ProcessFileItem[] => {
	const result: ProcessFileItem[] = []
	worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
		let values =
			typeof row.values === "object" ? Object.values(row.values) : row.values
		values = values.filter((a) => a)
		const last = values.pop()
		if (typeof last === "number") {
			const description = values.join(" ").trim()
			result.push({ row: rowNumber, description, amount: last })
		}
	})
	return result
}

const excelProcessWorkbook = async (
	workbook: Workbook
): Promise<ProcessFileItem[]> => {
	const worksheet = workbook.worksheets[0]
	return excelProcessSheet(worksheet)
}

export const excelProcessFile = async (
	data: Uint8Array
): Promise<ProcessFileItem[]> => {
	const workbook = await excelCreateFromData(data)
	return excelProcessWorkbook(workbook)
}
