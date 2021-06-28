import { isEmpty } from "lodash-es"
import { divideBy, minusBy, pipe } from "../reduce/math"

/**
 * Calculates a GST value
 *
 * @param {number} x
 * @returns {number}
 */
function calculateGST(x: number): number {
	return divideBy(11)(x)
}

/**
 * Removes the GST value from a given value
 *
 * @param {number} x
 * @returns {number}
 */
function removeGST(x: number): number {
	const gst = calculateGST(x)
	return pipe<number, number, [MathHOF, MathHOF]>(minusBy(gst), Math.round)(x)
}

// eslint-disable-next-line
const isGSTValid = (value: any): boolean =>
	typeof value !== "undefined" && value !== null && !isEmpty(value)

export { calculateGST, removeGST, isGSTValid }
