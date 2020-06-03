import React, { ReactElement } from "react"
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core"

type SelectValue = string | number

export type SelectFieldOptions = { value: SelectValue; label: string }[]

/**
 * Prop definition for the SelectField component
 *
 * @interface SelectFieldProps
 */
interface SelectFieldProps {
	name: string
	label: string
	value: SelectValue
	onChange: InputChange
	options: SelectFieldOptions
}

/**
 * Abstraction used for a select field
 *
 * @export
 * @param {SelectFieldProps} {
 * 	name,
 * 	label,
 * 	value,
 * 	onChange,
 * 	options,
 * }
 * @returns {ReactElement}
 */
export default React.memo(function SelectField({
	name,
	label,
	value,
	onChange,
	options,
}: SelectFieldProps): ReactElement {
	return (
		<FormControl variant="outlined" fullWidth>
			<InputLabel id={`${name}--label`}>{label}</InputLabel>
			<Select
				labelId={`${name}--label`}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				label={label}
			>
				{options.map((opt) => (
					<MenuItem value={opt.value} key={`${name}--${opt.label}`}>
						{opt.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
})
