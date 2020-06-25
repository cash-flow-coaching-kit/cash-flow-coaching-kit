import React, { ReactElement } from "react"
import { ComputedProps } from "./__config/shape"
import ComputedPanels from "../ComputedPanels"
import { addDollarSign, formatNumber } from "../../util/money/formatting"

/**
 * Component used to display the Cash Surplus value
 *
 * @export
 * @param {ComputedProps} { value }
 * @returns {ReactElement}
 */
export default function CashSurplus({ value }: ComputedProps): ReactElement {
	return (
		<ComputedPanels
			title="Cash Surplus"
			description="The difference between Cash IN and Cash OUT (excluding GST amounts)."
			value={addDollarSign(formatNumber(value))}
		/>
	)
}
