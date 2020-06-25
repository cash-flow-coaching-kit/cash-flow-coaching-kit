import React, { ReactElement } from "react"
import { Box, Typography, Grid, Divider } from "@material-ui/core"
import { useInputWrapper } from "./__config/styles"
import { ClosingBalance, CashToOwner } from "."
import { addDollarSign, formatNumber } from "../../util/money/formatting"
import Spacer from "../Spacer/Spacer"

/**
 * Prop definition for the CashBalance component
 *
 * @interface CashBalanceProps
 */
interface CashBalanceProps {
	cashToOwner: number
	closingBalance: number
	onChange: InputChange
}

/**
 * Component for the "Your Cash Balance" panel
 *
 * @export
 * @param {CashBalanceProps} {
 * 	cashToOwner,
 * 	closingBalance,
 * 	onChange,
 * }
 * @returns {ReactElement}
 */
export default function CashBalance({
	cashToOwner,
	closingBalance,
	onChange,
}: CashBalanceProps): ReactElement {
	const cls = useInputWrapper()

	return (
		<Box className={cls.wrapper}>
			<Typography variant="h6">Your Cash Balance</Typography>
			<Spacer />
			<Grid container spacing={2}>
				<Grid item sm={12}>
					<CashToOwner value={cashToOwner} onChange={onChange} />
				</Grid>
				<Grid item sm={12}>
					<Divider />
				</Grid>
				<Grid item sm={12}>
					<ClosingBalance
						value={addDollarSign(formatNumber(`${closingBalance}`))}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}
