import React, { ReactElement } from "react"
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
import { addDollarSign } from "../../util/money/formatting"

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
	const styles = useStyles({ stacked: true, mini: true, fullHeight: false })
	const cusCls = useCustomStyles()

	return (
		<Box
			className={`${cls.wrapper} ${cls.highlight} ${styles.root} ${cusCls.box}`}
		>
			<Box className={styles.type}>
				<Typography variant="h6">Income Tax or Company Tax</Typography>
				<Typography>
					Estimated amount to pay your tax; approximately {value}% of your Cash
					Surplus.
				</Typography>
				<TextField
					value={value}
					onChange={onChange}
					name="incomeTax"
					variant="outlined"
					label="Income tax percent"
					InputProps={{
						endAdornment: <InputAdornment position="end">%</InputAdornment>,
					}}
					className={cusCls.textfield}
				/>
			</Box>
			<Typography variant="h6">
				{/* eslint-disable-next-line no-restricted-globals */}
				{addDollarSign(`${isNaN(calculated) ? 0 : calculated}`)}
			</Typography>
		</Box>
	)
})
