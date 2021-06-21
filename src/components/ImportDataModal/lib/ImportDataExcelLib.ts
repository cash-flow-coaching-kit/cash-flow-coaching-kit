/* eslint-disable */
import { ProcessFileItem } from "./ImportDataGeneralLib"
import { v4 as uuidv4 } from "uuid"
import XLSX from "xlsx"

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

const excelCreateFromData = async (data: Uint8Array) => {
	try {
		const workbook = XLSX.read(data, { type: "array" })
		return workbook
	} catch (err) {
		// console.log("err", err)
	}
}

const excelProcessSheet = (data: any[]): ProcessFileItem[] => {
	const result: ProcessFileItem[] = []
	data.filter(Boolean).forEach((values: any[]) => {
		const last: any = values.pop()
		if (typeof last === "number") {
			const description = values.filter(Boolean).join(" ").trim()
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
	workbook: XLSX.WorkBook
): Promise<ProcessFileItem[] | false> => {
	const worksheet = workbook.Sheets[workbook.SheetNames[0]]
	const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
	if (!data) return false
	return excelProcessSheet(data)
}

export const excelProcessFile = async (
	data: Uint8Array
): Promise<ProcessFileItem[] | false> => {
	const workbook = await excelCreateFromData(data)
	if (!workbook) return false
	return excelProcessWorkbook(workbook!)
}
