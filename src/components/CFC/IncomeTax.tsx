import React, { ReactElement } from "react"
import { Box } from "@material-ui/core"
import DescriptiveMoneyInput from "../DescriptiveMoneyInput"
import { ControlProps } from "./__config/shape"
import { useInputWrapper } from "./__config/styles"

/**
 * Input field for the Income tax value
 *
 * @export
 * @param {ControlProps<number>} {
 * 	value,
 * 	onChange,
 * }
 * @returns {ReactElement}
 */
export default function IncomeTax({
	value,
	onChange,
}: ControlProps<number>): ReactElement {
	const cls = useInputWrapper()

	return (
		<Box className={`${cls.wrapper} ${cls.highlight}`}>
			<DescriptiveMoneyInput
				variant="outlined"
				title="Income Tax or Company Tax"
				description="Estimated amount to pay your tax; approximately 25% of your Cash Surplus."
				value={value}
				onChange={onChange}
				name="incomeTax"
				mini
			/>
		</Box>
	)
}
