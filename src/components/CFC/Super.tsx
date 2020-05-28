import React, { ReactElement } from "react"
import { ControlProps } from "./__config/shape"
import DescriptiveMoneyInput from "../DescriptiveMoneyInput"

/**
 * Input field for the Super value
 *
 * @export
 * @param {ControlProps<number>} {
 * 	value,
 * 	onChange,
 * }
 * @returns {ReactElement}
 */
export default function Super({
	value,
	onChange,
}: ControlProps<number>): ReactElement {
	return (
		<DescriptiveMoneyInput
			mini
			variant="outlined"
			onChange={onChange}
			value={value}
			name="superAmount"
			title="Super"
			description="Super amounts held for you and your employees for the future."
		/>
	)
}
