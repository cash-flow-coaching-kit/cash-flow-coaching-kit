import React, { ReactElement } from "react"
import { ControlProps } from "./__config/shape"
import DescriptiveMoneyInput from "../DescriptiveMoneyInput"

/**
 * Input field for the Creditors value
 *
 * @export
 * @param {ControlProps<number>} {
 * 	value,
 * 	onChange,
 * }
 * @returns {ReactElement}
 */
export default function Creditors({
	value,
	onChange,
}: ControlProps<number>): ReactElement {
	return (
		<DescriptiveMoneyInput
			mini
			stacked
			fullHeight
			variant="outlined"
			onChange={onChange}
			value={value}
			name="creditors"
			title="Creditors"
			description="The amount your business owes to others at the close of the period."
		/>
	)
}
