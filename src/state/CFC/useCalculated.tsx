import { useState, useCallback } from "react"
import { BaseCFCStruct } from "../../data/_config/shape"
import { calculateInitial } from "../../components/Forms/CFC"

type HookReturn = [CalculatedValues, DispatchFn]
type DispatchFn = (values: BaseCFCStruct) => void

/**
 * Data definition for the calculated values
 *
 * @export
 * @interface CalculatedValues
 */
export interface CalculatedValues {
	gstOnSales: number
	gstOnPurchases: number
	closingBalance: number
	totalNetAssets: number
	cashSurplus: number
	availableToSpend: number
	incomeTaxPercentage: number
}

/**
 * A custom hook to calculate the automated values
 * when the form changes state
 *
 * @export
 * @param {CalculatedValues} initial
 * @returns {HookReturn}
 */
export default function useCalculated(initial: CalculatedValues): HookReturn {
	const [state, setState] = useState<CalculatedValues>(initial)
	const dispatch = useCallback((values: BaseCFCStruct): void => {
		setState(calculateInitial(values))
	}, [])

	return [state, dispatch]
}
