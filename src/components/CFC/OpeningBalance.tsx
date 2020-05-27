import React, { ReactElement } from "react"
import { Box } from "@material-ui/core"
import DescriptiveMoneyInput from "../DescriptiveMoneyInput"
import { useInputWrapper } from "./__config/styles"
import { ControlProps } from "./__config/shape"

/**
 * Component for the opening balance field used in the CFC form
 *
 * @export
 * @param {OBProps} { onChange }
 * @returns {ReactElement}
 */
export default function OpeningBalance({
	onChange,
	value,
}: ControlProps<number>): ReactElement {
	const wrapperCls = useInputWrapper()

	return (
		<Box className={`${wrapperCls.wrapper}`}>
			<DescriptiveMoneyInput
				title="Opening Balance"
				description="Your cash at bank at the start of the period"
				variant="outlined"
				name="openingBalance"
				onChange={onChange}
				value={value}
			/>
		</Box>
	)
}
