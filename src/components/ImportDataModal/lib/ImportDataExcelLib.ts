/* eslint-disable */
import { Worksheet, Workbook } from "exceljs"
import { NO_MERGE, ProcessFileItem } from "./ImportDataGeneralLib"
import { v4 as uuidv4 } from "uuid"

const rewritePattern = require("regexpu-core")
const {
	generateRegexpuOptions,
} = require("@babel/helper-create-regexp-features-plugin/lib/util")

const { RegExp } = global
try {
	new RegExp("a", "u")
} catch (err) {
	// @ts-ignore
	global.RegExp = function (pattern, flags) {
		if (flags && flags.includes("u")) {
			return new RegExp(
				rewritePattern(
					pattern,
					flags,
					generateRegexpuOptions({ flags, pattern })
				)
			)
		}
		return new RegExp(pattern, flags)
	}
	// @ts-ignore
	global.RegExp.prototype = RegExp
}

const ExcelJS = require("exceljs/dist/es5/exceljs.browser")

const excelCreateFromData = async (data: Uint8Array) => {
	try {
		const workbook = new ExcelJS.Workbook()
		await workbook.xlsx.load(data)
		return workbook
	} catch (err) {
		// console.log("err", err)
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
				id: uuidv4(),
				description,
				amount: last,
				type: null,
				gst: "applygst",
				merge: null,
			})
		}
	})
	return result
}

const excelProcessWorkbook = async (
	workbook: Workbook
): Promise<ProcessFileItem[] | false> => {
	const worksheet = workbook.worksheets[0]
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
