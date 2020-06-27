import React, { ReactElement, ChangeEvent, useState } from "react"
import {
	Box,
	Typography,
	TextField,
	InputAdornment,
	makeStyles,
} from "@material-ui/core"
import { ControlProps } from "./__config/shape"
import { useInputWrapper } from "./__config/styles"
import useStyles from "../DescriptiveMoneyInput/__config/styles"
import { addDollarSign, formatNumber } from "../../util/money/formatting"

type IncomeTaxProps = {
	calculated: number
} & ControlProps<number>

const useCustomStyles = makeStyles((theme) => ({
	box: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		"& > div": {
			margin: 0,
			marginRight: theme.spacing(1),
		},
	},
	textfield: {
		marginTop: theme.spacing(2),
	},
}))

/**
 * Input field for the Income tax value
 *
 * @export
 * @param {ControlProps<number>} {
 * 	value,
 * 	onChange,
 * }
 * @returns {ReactElement}
 */
export default React.memo(function IncomeTax({
	value,
	onChange,
	calculated,
}: IncomeTaxProps): ReactElement {
	const cls = useInputWrapper()
	const [error, setError] = useState("")
	const styles = useStyles({ stacked: true, mini: true, fullHeight: false })
	const cusCls = useCustomStyles()

	function onPercentageChange(e: ChangeEvent<HTMLInputElement>): void {
		const inputVal = e.target.value.trim() === "" ? "0" : e.target.value.trim()
		if (
			`${inputVal}`.startsWith("00") ||
			(`${value}`.startsWith("0") && `${inputVal}`.length > 1)
		) {
			setError("Amount can't start with a zero")
			return
		}

		if (inputVal.match(/\D/g)) {
			setError("Amount can only include digits")
			return
		}

		const val = parseInt(inputVal, 10)
		// eslint-disable-next-line no-restricted-globals
		if (isNaN(val) || val > 100 || val < 0) {
			setError("Please enter a valid number between 0 and 100")
			return
		}
		setError("")

		if (typeof onChange !== "undefined") {
			onChange(e)
		}
	}

	return (
		<Box
			className={`${cls.wrapper} ${cls.highlight} ${styles.root} ${cusCls.box}`}
		>
			<Box className={styles.type}>
				<Typography variant="h6" component="p">
					Income Tax or Company Tax
				</Typography>
				<Typography component="span">
					Estimated amount to pay your tax; approximately {value}% of your Cash
					Surplus.
				</Typography>
				<TextField
					value={value}
					onChange={onPercentageChange}
					name="incomeTax"
					variant="outlined"
					label="Income tax percent"
					InputProps={{
						endAdornment: <InputAdornment position="end">%</InputAdornment>,
					}}
					className={cusCls.textfield}
					error={error !== ""}
					helperText={error}
				/>
			</Box>
			<Typography variant="h6">
				{/* eslint-disable-next-line no-restricted-globals */}
				{addDollarSign(formatNumber(`${isNaN(calculated) ? 0 : calculated}`))}
			</Typography>
		</Box>
	)
})
