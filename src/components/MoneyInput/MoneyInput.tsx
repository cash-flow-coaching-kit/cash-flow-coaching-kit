import React, { ReactElement, memo, ChangeEvent } from "react"
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
export default memo(function MoneyInput({
	onChange,
	// eslint-disable-next-line
	...props
}: OutlinedTextFieldProps): ReactElement {
	/**
	 * Does some input value checks before firing the onChange method
	 *
	 * @param {ChangeEvent<HTMLInputElement>} e
	 */
	function onChangePreCheck(e: ChangeEvent<HTMLInputElement>): void {
		const inputVal: string = e.target.value === "" ? "0" : e.target.value
		const val = parseInt(inputVal, 10)
		// eslint-disable-next-line no-restricted-globals
		if (isNaN(val) || val > 999999999) return

		if (typeof onChange !== "undefined") {
			onChange(e)
		}
	}

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
			placeholder="0"
			onChange={onChangePreCheck}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		/>
	)
})
