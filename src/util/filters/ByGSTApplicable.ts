import { CashFlow } from "../../data/_config/shape"

/**
 * Used with the array `filter` method, this allows you to
 * filter a object using the `gstApplicable` property.
 * The objects interface must use `CashFlow`
 * to work
 *
 * @param {boolean} reject
 * @returns CashFlow[]
 */
const GSTApplicable = (reject = false) => (item: CashFlow): boolean => {
	const res = item.gstApplicable
	return reject ? !res : res
}

export default GSTApplicable
