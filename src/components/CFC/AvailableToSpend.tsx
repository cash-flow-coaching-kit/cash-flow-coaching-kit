import React, { ReactElement } from "react"
import { ComputedProps } from "./__config/shape"
import ComputedPanels from "../ComputedPanels"
import { addDollarSign } from "../../util/money/formatting"

export default function AvailableToSpend({
	value,
}: ComputedProps): ReactElement {
	return (
		<ComputedPanels
			title="Available to Spend (exc GST and Tax)"
			description="The Opening Balance plus any Cash Surplus."
			value={addDollarSign(value)}
		/>
	)
}
