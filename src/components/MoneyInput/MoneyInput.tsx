import React, { ReactElement, memo, ChangeEvent, useState, useRef } from "react"
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
	value,
	// eslint-disable-next-line
	...props
}: OutlinedTextFieldProps): ReactElement {
	const [useMimic, setUseMimic] = useState(true)
	const input = useRef<HTMLInputElement>()

	/**
	 * Does some input value checks before firing the onChange method
	 *
	 * @param {ChangeEvent<HTMLInputElement>} e
	 */
	function onChangePreCheck(e: ChangeEvent<HTMLInputElement>): void {
		const inputVal: string = e.target.value === "" ? "0" : e.target.value
		if (inputVal.match(/\D/g)) return

		const val = parseInt(inputVal, 10)
		// eslint-disable-next-line no-restricted-globals
		if (isNaN(val) || val > 999999999) return

		if (typeof onChange !== "undefined") {
			onChange(e)
		}
	}

	function onBlur(): void {
		setUseMimic(true)
	}

	function onFocus(): void {
		setUseMimic(false)
		if (value === 0 && input.current) {
			input.current.select()
		}
	}

	function formatNumber(n: string): string {
		// format number 1000000 to 1,234,567
		return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}

	return (
		<TextField
			fullWidth
			InputProps={{
				startAdornment: <InputAdornment position="start">$</InputAdornment>,
				endAdornment: <InputAdornment position="end">.00</InputAdornment>,
				inputProps: {
					min: 0,
					max: 999999999,
					step: 1,
					ref: input,
				},
			}}
			label="Amount"
			placeholder="0"
			onChange={onChangePreCheck}
			onBlur={onBlur}
			onFocus={onFocus}
			value={useMimic ? formatNumber(`${value}`) : value}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		/>
	)
})
