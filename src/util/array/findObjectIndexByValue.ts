/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Finds the index of any object in an array by a value
 *
 * @param {any[]} arr
 * @param {string} key
 * @param {any} value
 */
const findObjectIndexByValue = (arr: any[], key: string, value: any): number =>
	arr.findIndex((item) => item[key] === value)

export default findObjectIndexByValue
