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
	return pipe<number, number, any[]>(minusBy(gst), Math.round)(x)
}

export { calculateGST, removeGST }
