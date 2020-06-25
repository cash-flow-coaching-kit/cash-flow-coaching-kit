import { BaseCFCStruct } from "../../../data/_config/shape"
import { CalculatedValues } from "../../../state/CFC/useCalculated"
import {
	calcTotalNetAssets,
	calcAvailableToSpend,
	calcCashSurplus,
	calcCashFlowGST,
	calcClosingBalance,
	calcIncomeTaxPer,
} from "../../../state/CFC/accumulators"

/**
 * Calculates the values for the dynamic values
 *
 * @param {BaseCFCStruct} values
 * @returns {CalculatedValues}
 */
function calculateInitial(values: BaseCFCStruct): CalculatedValues {
	return {
		gstOnSales: calcCashFlowGST(values.cashInItems),
		closingBalance: calcClosingBalance(values),
		gstOnPurchases: calcCashFlowGST(values.cashOutItems),
		totalNetAssets: calcTotalNetAssets(values),
		cashSurplus: calcCashSurplus(values),
		availableToSpend: calcAvailableToSpend(values),
		incomeTaxPercentage: calcIncomeTaxPer(values),
	}
}

export default calculateInitial
