/**
 * Swaps a items in an array
 *
 * @param {T[]} arr
 * @param {number} source
 * @param {number} destination
 * @param {T} replace
 * @returns {T[]}
 */
const arraySwap = <T>(
	arr: T[],
	source: number,
	destination: number,
	replace: T
): T[] => {
	const copy = Array.from(arr)
	copy.splice(source, 1)
	copy.splice(destination, 0, replace)

	return copy
}

export default arraySwap
