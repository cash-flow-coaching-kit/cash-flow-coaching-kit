import { BaseDatabaseStruct, DatabaseId } from "../../data/_config/shape"

/**
 * Used with the array `filter` method, this allows you to
 * filter a object using the `id` property.
 * The objects interface must use `BaseDatabaseStruct`
 * to work
 *
 * [{id: 4}, ...].filter(filterById(4))
 *
 * @param {DatabaseId} id
 * @param {boolean} reject If reject is true, then it will return the opposite.
 * @returns BaseDatabaseStruct[]
 */
const filterById =
	(id: DatabaseId, reject = false) =>
	(item: BaseDatabaseStruct): boolean => {
		const res = item.id === id
		return reject ? !res : res
	}

export default filterById
