import React, { ReactElement } from "react"
import { ControlProps } from "./__config/shape"
import DescriptiveMoneyInput from "../DescriptiveMoneyInput"

/**
 * Input field for the Assets value
 *
 * @export
 * @param {ControlProps<number>} {
 * 	value,
 * 	onChange,
 * }
 * @returns {ReactElement}
 */
export default React.memo(
	({ value, onChange }: ControlProps<number>): ReactElement => (
		<DescriptiveMoneyInput
			mini
			stacked
			fullHeight
			variant="outlined"
			onChange={onChange}
			value={value}
			name="assets"
			title="Assets"
			description="The value of your business assets at the close of the period."
		/>
	)
)
