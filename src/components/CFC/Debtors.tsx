import React, { ReactElement } from "react"
import { ControlProps } from "./__config/shape"
import DescriptiveMoneyInput from "../DescriptiveMoneyInput"

/**
 * Input field for the Debtors value
 *
 * @export
 * @param {ControlProps<number>} {
 * 	value,
 * 	onChange,
 * }
 * @returns {ReactElement}
 */
export default function Debtors({
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
			name="debtors"
			title="Debtors"
			description="The amount others owe to your business at the close of the period."
		/>
	)
}
