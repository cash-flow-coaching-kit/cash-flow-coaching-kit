import React, { ReactElement } from "react"
import { ComputedProps } from "./__config/shape"
import ComputedPanels from "../ComputedPanels"

/**
 * Computed panel for the Closing Balance value
 *
 * @export
 * @param {ComputedProps} { value }
 * @returns {ReactElement}
 */
export default function ClosingBalance({ value }: ComputedProps): ReactElement {
	return (
		<ComputedPanels
			value={value}
			title="Your Closing Cash Balance"
			description="The amount of cash you have left at the bank"
			mini
			wrapped={false}
		/>
	)
}
