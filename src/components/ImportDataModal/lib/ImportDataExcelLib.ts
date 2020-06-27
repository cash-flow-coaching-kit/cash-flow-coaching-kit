import Excel, { Worksheet, Workbook } from "exceljs"
import { ProcessFileItem } from "./ImportDataGeneralLib"

const excelCreateFromData = async (data: Uint8Array) => {
	try {
		const workbook = new Excel.Workbook()
		await workbook.xlsx.load(data)
		return workbook
	} catch (err) {
		console.log("err", err)
	}
}

const excelProcessSheet = (worksheet: Worksheet): ProcessFileItem[] => {
	const result: ProcessFileItem[] = []
	worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
		let values =
			typeof row.values === "object" ? Object.values(row.values) : row.values
		values = values
			.filter((a: any) => a)
			.map((a: any) => {
				// check for and extract computed values
				return typeof a === "object" ? a?.result : a
			})
		const last: any = values.pop()
		if (typeof last === "number") {
			const description = values.join(" ").trim()
			result.push({
				row: rowNumber,
				description,
				amount: Math.abs(last),
				type: last > 0 ? "in" : "out",
			})
		}
	})
	return result
}

const excelProcessWorkbook = async (
	workbook: Workbook
): Promise<ProcessFileItem[] | false> => {
	const worksheet = workbook.worksheets[0]
	// console.log("worksheet", worksheet)
	if (!worksheet) return false
	return excelProcessSheet(worksheet!)
}

export const excelProcessFile = async (
	data: Uint8Array
): Promise<ProcessFileItem[] | false> => {
	const workbook = await excelCreateFromData(data)
	// console.log("workbook", workbook)
	if (!workbook) return false
	return excelProcessWorkbook(workbook!)
}
