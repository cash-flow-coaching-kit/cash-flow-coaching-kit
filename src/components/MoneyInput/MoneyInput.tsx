import React, { ReactElement, memo } from "react"
import {
	TextField,
	InputAdornment,
	OutlinedTextFieldProps,
} from "@material-ui/core"

/**
 * Abstraction for a textfield used to input money
 *
 * @export
 * @param {TextFieldProps} props
 * @returns {ReactElement}
 */
export default memo(function MoneyInput(
	props: OutlinedTextFieldProps
): ReactElement {
	return (
		<TextField
			type="number"
			fullWidth
			InputProps={{
				startAdornment: <InputAdornment position="start">$</InputAdornment>,
				endAdornment: <InputAdornment position="end">.00</InputAdornment>,
				inputProps: {
					min: 0,
					max: 999999999,
					step: 1,
				},
			}}
			label="Amount"
			InputLabelProps={{
				htmlFor: props.name,
			}}
			id={props.name}
			placeholder="0"
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		/>
	)
})
