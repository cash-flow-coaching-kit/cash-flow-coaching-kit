import React, { ReactElement } from "react"
import { ControlProps } from "./__config/shape"
import { CFCTimeFrame } from "../../data/_config/shape"
import SelectField from "../SelectField"
import { canvasTimeFrameOptions } from "./__config/utilities"

/**
 * Select field for the Canvas time-frame value
 *
 * @export
 * @param {ControlProps<CFCTimeFrame>} {
 * 	onChange,
 * 	value,
 * }
 * @returns {ReactElement}
 */
export default React.memo(function CanvasTimeFrameSelect({
	onChange,
	value,
}: ControlProps<CFCTimeFrame>): ReactElement {
	return (
		<SelectField
			name="canvasTimeFrame"
			value={value}
			label="Canvas time-frame"
			onChange={onChange}
			options={canvasTimeFrameOptions()}
		/>
	)
})
