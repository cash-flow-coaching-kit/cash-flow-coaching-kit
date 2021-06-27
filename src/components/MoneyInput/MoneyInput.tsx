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
export default memo(
	({
		onChange,
		value,
		// eslint-disable-next-line
		...props
	}: OutlinedTextFieldProps): ReactElement => {
		const [useMimic, setUseMimic] = useState(true)
		const [error, setError] = useState("")
		const input = useRef<HTMLInputElement>()

		/**
		 * Does some input value checks before firing the onChange method
		 *
		 * @param {ChangeEvent<HTMLInputElement>} e
		 */
		function onChangePreCheck(e: ChangeEvent<HTMLInputElement>): void {
			// attempt to sanitise the input instead of an error

			const inputValue = `${e.target.value}`
			const cleanedValue = inputValue
				.replace(/([^\d-]+)/gi, "") // leave numbers and -
				.replace(/(?!^)-/g, "") // remove minus other than start of string

			if (inputValue === "-0" || inputValue === "0-") {
				// spacial case - keep minus for UX
				e.target.value = "-" // eslint-disable-line
				setError("Not a valid whole number")
			} else if (cleanedValue === "") {
				e.target.value = "0" // eslint-disable-line
				setError("")
			} else {
				const asNumber = parseFloat(cleanedValue)
				if (inputValue && !asNumber && asNumber !== 0) {
					setError("Not a valid whole number")
				} else {
					e.target.value = asNumber.toFixed(0) // eslint-disable-line
					setError("")
				}
			}

			// console.log("e", e)

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
	}
)
