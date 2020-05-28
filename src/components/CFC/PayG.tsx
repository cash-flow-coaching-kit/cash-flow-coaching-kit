import React, { ReactElement } from "react"
import { ControlProps } from "./__config/shape"
import DescriptiveMoneyInput from "../DescriptiveMoneyInput"

export default function PayG({
	value,
	onChange,
}: ControlProps<number>): ReactElement {
	return (
		<DescriptiveMoneyInput
			mini
			variant="outlined"
			onChange={onChange}
			value={value}
			name="paygWithholding"
			title="PAYG Withholding"
			description="PAYG you withhold for your staff."
		/>
	)
}
