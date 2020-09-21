/* eslint-disable no-restricted-globals */
import { BaseCFCStruct, CashFlow } from "../../data/_config/shape"
import GSTApplicable from "../../util/filters/ByGSTApplicable"
import { sum, pipe, add, minusBy, numOrZero } from "../../util/reduce/math"
import { removeGST, calculateGST, isGSTValid } from "../../util/money/gst"

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
export function calcCashFlowTotal(
	values: CashFlow[],
	customGST?: number
): number {
	if (isGSTValid(customGST)) {
		const total = values.reduce(getKeyValue("amount"), []).reduce(sum(), 0)
		return numOrZero(Math.floor(total - customGST!))
	}

	return numOrZero(
		pipe(
			add(calcCashFlowGSTTotal(values)),
			add(calcCashFlowNonGSTTotal(values))
		)(0)
	)
}

export function calcTotalCashOut(
	values: BaseCFCStruct,
	customGST?: number
): number {
	return numOrZero(
		pipe(
			add(values.paygWithholding),
			add(values.superAmount)
		)(calcCashFlowTotal(values.cashOutItems, customGST))
	)
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
		calcCashFlowTotal(values.cashInItems, values.gstOnSales) -
		calcTotalCashOut(values, values.gstOnPurchases)
	)
}

/**
 * Calculates the income/company tax based on the form incomeTax percentage
 *
 * @export
 * @param {BaseCFCStruct} values
 * @returns {number}
 */
export function calcIncomeTaxPer(values: BaseCFCStruct): number {
	const num = parseInt(`${values.incomeTax}`, 10)
	if (isNaN(num) || num === 0) {
		return 0
	}

	const surplus = calcCashSurplus(values)
	if (surplus <= 0) return 0

	return Math.round(surplus * (num / 100))
}

/**
 * Calculates the amount available to spend
 *
 * @export
 * @param {BaseCFCStruct} values
 * @returns {number}
 */
export function calcAvailableToSpend(values: BaseCFCStruct): number {
	return numOrZero(
		pipe(
			add(values.openingBalance),
			minusBy(calcIncomeTaxPer(values))
		)(calcCashSurplus(values))
	)
}

/**
 * Calculates the closing balance
 *
 * @export
 * @param {BaseCFCStruct} values
 * @returns {number}
 */
export function calcClosingBalance(values: BaseCFCStruct): number {
	return calcAvailableToSpend(values) - numOrZero(values.cashToOwner)
}

/**
 * Calculates the Total net assets value
 *
 * @export
 * @param {BaseCFCStruct} values
 * @returns {number}
 */
export function calcTotalNetAssets(values: BaseCFCStruct): number {
	return numOrZero(
		pipe(
			add(values.stock),
			minusBy(values.creditors),
			add(values.assets),
			add(values.debtors),
			minusBy(values.loans)
		)(calcClosingBalance(values))
	)
}
