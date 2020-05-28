import React, { ReactElement } from "react"
import { ControlProps } from "./__config/shape"
import DescriptiveMoneyInput from "../DescriptiveMoneyInput"

/**
 * Input field for the Loans value
 *
 * @export
 * @param {ControlProps<number>} {
 * 	value,
 * 	onChange,
 * }
 * @returns {ReactElement}
 */
export default function Loans({
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
			name="loans"
			title="Loans"
			description="The amount outstanding on your loans at the close of the period."
		/>
	)
}
