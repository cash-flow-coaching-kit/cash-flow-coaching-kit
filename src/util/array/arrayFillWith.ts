/**
 * Creates and fills an array with some data
 *
 * @export
 * @template T
 * @param {number} len
 * @param {T} fill
 * @returns {T[]}
 */
export default function arrayFillWith<T>(len: number, fill: T): T[] {
	return new Array(len).fill(fill)
}
