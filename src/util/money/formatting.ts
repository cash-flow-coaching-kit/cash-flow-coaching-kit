import { pipe } from "../reduce/math"

/**
 * Removes unused decimal points to a certain value
 * Value must be between 0 - 20
 *
 * @param {number} val
 * @returns {NumToStrHOF}
 */
export function toFixed(val: number): NumToStrHOF {
	return (x: number): string => {
		return x.toFixed(val)
	}
}

/**
 * Converts a number to a string
 *
 * @param {number} val
 * @returns {string}
 */
export function toString(val: number): string {
	return `${val}`
}

/**
 * Takes a string value and returns a number with 2 decimal points
 *
 * @param {string} num
 * @returns {string}
 */
export function toTwoDecimal(num: string): string {
	return pipe<string, string, [StrToNumHOF, NumToStrHOF]>(
		Number.parseFloat,
		toFixed(2)
	)(num)
}

/**
 * Appends a value to a another value
 *
 * @param {string} c
 * @returns {StrToStrHOF}
 */
export function appendWith(c: string): StrToStrHOF {
	return (s: string): string => {
		if (!s.startsWith(c)) {
			return `${c}${s}`
		}
		return s
	}
}

/**
 * Adds a dollar sign ($) to the front of a string
 *
 * @param {string} val
 * @returns {string}
 */
export function addDollarSign(val: string): string {
	return appendWith("$")(val)
}

/**
 * Takes a number value and formats it to be a dollar value
 *
 * @param {number} num
 * @returns {string}
 */
export function formatMoney(num: number): string {
	return pipe<number, string, [NumToStrHOF, StrToStrHOF, StrToStrHOF]>(
		toString,
		toTwoDecimal,
		addDollarSign
	)(num)
}