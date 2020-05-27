import React, { ReactElement } from "react"
import { ComputedProps } from "./__config/shape"
import ComputedPanels from "../ComputedPanels"
import { addDollarSign } from "../../util/money/formatting"

export default function CashSurplus({ value }: ComputedProps): ReactElement {
	return (
		<ComputedPanels
			title="Cash Surplus"
			description="The difference between Cash IN and Cash OUT (excluding GST amounts)."
			value={addDollarSign(value)}
		/>
	)
}
