import { BaseCFCStruct, CashFlow } from "../../data/_config/shape"
import GSTApplicable from "../../util/filters/ByGSTApplicable"
import { sum, pipe, add, minusBy } from "../../util/reduce/math"
import { removeGST, calculateGST } from "../../util/money/gst"

/**
 * Extracts the values for a specific key
 *
 * @export
 * @template T
 * @template K
 * @param {K} k
 * @returns {ReducerHOF<T[K][], T>}
 */
export function getKeyValue<T, K extends keyof T>(k: K): ReducerHOF<T[K][], T> {
	return (acc, cur): T[K][] => acc.concat(cur[k])
}

/**
 * Calcultes the GST value for a cash flow group
 *
 * @export
 * @param {CashFlow[]} values
 * @returns {number}
 */
export function calcCashFlowGST(values: CashFlow[]): number {
	const total = values
		.filter(GSTApplicable())
		.reduce(getKeyValue("amount"), [])
		.reduce(sum(), 0)

	return Math.round(calculateGST(total))
}

/**
 * Calculates the sum for a cash flow group (exec GST) for the items that
 * GST is applied to
 *
 * @export
 * @param {CashFlow[]} values
 * @returns {number}
 */
export function calcCashFlowGSTTotal(values: CashFlow[]): number {
	const total = values
		.filter(GSTApplicable())
		.reduce(getKeyValue("amount"), [])
		.reduce(sum(), 0)

	return removeGST(total)
}

/**
 * Calculates the sum for a cash flow group for items that GST is not applied
 * to
 *
 * @export
 * @param {CashFlow[]} values
 * @returns {number}
 */
export function calcCashFlowNonGSTTotal(values: CashFlow[]): number {
	return values
		.filter(GSTApplicable(true)) // rejects gstApplicable: true
		.reduce(getKeyValue("amount"), [])
		.reduce(sum(), 0)
}

/**
 * Calculates the sum total for a cash flow group
 *
 * @export
 * @param {CashFlow[]} values
 * @returns {number}
 */
export function calcCashFlowTotal(values: CashFlow[]): number {
	return pipe(
		add(calcCashFlowGSTTotal(values)),
		add(calcCashFlowNonGSTTotal(values))
	)(0)
}

/**
 * Calculates the Cash Surplus value
 *
 * @export
 * @param {BaseCFCStruct} values
 * @returns {number}
 */
export function calcCashSurplus(values: BaseCFCStruct): number {
	return (
		calcCashFlowTotal(values.cashInItems) -
		pipe(
			add(values.paygWithholding),
			add(values.superAmount)
		)(calcCashFlowTotal(values.cashOutItems))
	)
}

/**
 * Calculates the amount available to spend
 *
 * @export
 * @param {BaseCFCStruct} values
 * @returns {number}
 */
export function calcAvailableToSpend(values: BaseCFCStruct): number {
	return pipe(
		add(values.openingBalance),
		minusBy(values.incomeTax)
	)(calcCashSurplus(values))
}

/**
 * Calculates the closing balance
 *
 * @export
 * @param {BaseCFCStruct} values
 * @returns {number}
 */
export function calcClosingBalance(values: BaseCFCStruct): number {
	return calcAvailableToSpend(values) - values.cashToOwner
}

/**
 * Calculates the Total net assets value
 *
 * @export
 * @param {BaseCFCStruct} values
 * @returns {number}
 */
export function calcTotalNetAssets(values: BaseCFCStruct): number {
	return pipe(
		add(values.stock),
		minusBy(values.creditors),
		add(values.assets),
		add(values.debtors),
		minusBy(values.loans)
	)(calcClosingBalance(values))
}
