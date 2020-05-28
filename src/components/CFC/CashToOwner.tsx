import React, { ReactElement } from "react"
import { ControlProps } from "./__config/shape"
import DescriptiveMoneyInput from "../DescriptiveMoneyInput"

/**
 * Input field for the Cash To Owner value
 *
 * @export
 * @param {ControlProps<number>} {
 * 	value,
 * 	onChange,
 * }
 * @returns {ReactElement}
 */
export default function CashToOwner({
	value,
	onChange,
}: ControlProps<number>): ReactElement {
	return (
		<DescriptiveMoneyInput
			variant="outlined"
			title="Cash to Owner"
			description="The amounts you withdraw from the business."
			value={value}
			onChange={onChange}
			name="cashToOwner"
			mini
		/>
	)
}
