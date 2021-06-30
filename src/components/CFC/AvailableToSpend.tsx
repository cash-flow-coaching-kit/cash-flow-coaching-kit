import React, { ReactElement } from "react"
import { ComputedProps } from "./__config/shape"
import ComputedPanels from "../ComputedPanels"
import { addDollarSign, formatNumber } from "../../util/money/formatting"

/**
 * Component used to display the Available to Spend value
 *
 * @export
 * @param {ComputedProps} {
 * 	value,
 * }
 * @returns {ReactElement}
 */
export default React.memo(
	({ value }: ComputedProps): ReactElement => (
		<ComputedPanels
			title="Available to Spend (exc GST and Tax)"
			description="The Opening Balance plus any Cash Surplus minus Income Tax or Company Tax"
			value={addDollarSign(formatNumber(value))}
		/>
	)
)
