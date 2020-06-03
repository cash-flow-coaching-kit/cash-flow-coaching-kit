import React, { ReactElement } from "react"
import { ControlProps } from "./__config/shape"
import SelectField from "../SelectField"
import { CanvasType } from "../../data/_config/shape"
import { canvasTypeOptions } from "./__config/utilities"

/**
 * Select field for the Canvas Type value
 *
 * @export
 * @param {ControlProps<CanvasType>} {
 * 	onChange,
 * 	value,
 * }
 * @returns {ReactElement}
 */
export default React.memo(function CanvasTypeSelect({
	onChange,
	value,
}: ControlProps<CanvasType>): ReactElement {
	return (
		<SelectField
			name="canvasType"
			value={value}
			label="Canvas type"
			onChange={onChange}
			options={canvasTypeOptions()}
		/>
	)
})
