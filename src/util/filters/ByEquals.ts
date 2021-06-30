/**
 * Used with the array `filter` method, this allows you to
 * filter based on the item and value being the same
 *
 * [1, 2, 3, 4].filter(filterByEquals(4)) -> [4]
 * [1, 2, 3, 4].filter(filterByEquals(4, true)) -> [1, 2, 3]
 *
 * @param {T} val
 * @param {boolean} reject If reject is true, then it will return the opposite.
 * @returns T[]
 */
const filterByEquals =
	<T>(val: T, reject = false) =>
	(item: T): boolean => {
		const res = item === val
		return reject ? !res : res
	}

export default filterByEquals
