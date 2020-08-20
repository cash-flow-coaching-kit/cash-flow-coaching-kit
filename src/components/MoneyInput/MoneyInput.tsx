import React, {
	ReactElement,
	memo,
	ChangeEvent,
	useState,
	useRef,
	MouseEvent,
} from "react"
import {
	TextField,
	InputAdornment,
	OutlinedTextFieldProps,
} from "@material-ui/core"
import { formatNumber } from "../../util/money/formatting"

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
	const [error, setError] = useState("")
	const input = useRef<HTMLInputElement>()

	/**
	 * Does some input value checks before firing the onChange method
	 *
	 * @param {ChangeEvent<HTMLInputElement>} e
	 */
	function onChangePreCheck(e: ChangeEvent<HTMLInputElement>): void {
		const inputVal: string = e.target.value === "" ? "0" : e.target.value
		if (
			`${inputVal}`.startsWith("00") ||
			(`${value}`.startsWith("0") && `${inputVal}`.length > 1)
		) {
			setError("Amount can't start with a zero")
			return
		}

		// if (!inputVal.match(/^(^-?[0-9]*)$/g)) {
		if (inputVal.match(/\D/g)) {
			setError("Amount can only include digits")
			return
		}

		// if (inputVal !== "-") {
		const val = parseInt(inputVal, 10)
		// eslint-disable-next-line no-restricted-globals
		if (isNaN(val) || val > 999999999) {
			setError("Please enter a valid number between 0 and 999,999,999")
			return
		}
		// }

		setError("")

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
			// input.current.select()
			input.current.setSelectionRange(0, 9999)
		}
	}

	function onMouseUp(e: MouseEvent): void {
		e.preventDefault()
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
			InputLabelProps={{
				htmlFor: props.name,
			}}
			id={props.name}
			placeholder="0"
			onChange={onChangePreCheck}
			onBlur={onBlur}
			onFocus={onFocus}
			onMouseUp={onMouseUp}
			value={useMimic ? formatNumber(`${value}`) : value}
			error={error !== ""}
			helperText={error}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		/>
	)
})
