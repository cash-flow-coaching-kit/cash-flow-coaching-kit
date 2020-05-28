import React, { ReactElement } from "react"
import { ControlProps } from "./__config/shape"
import DescriptiveMoneyInput from "../DescriptiveMoneyInput"

export default function Stock({
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
			name="stock"
			title="Stock"
			description="The value of your stock on hand at the close of the period."
		/>
	)
}
