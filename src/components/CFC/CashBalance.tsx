import React, { ReactElement } from "react"
import { Box, Typography, Grid, Divider } from "@material-ui/core"
import { useInputWrapper } from "./__config/styles"
import { ClosingBalance, CashToOwner } from "."
import { addDollarSign } from "../../util/money/formatting"
import Spacer from "../Spacer/Spacer"

interface CashBalanceProps {
	cashToOwner: number
	closingBalance: number
	onChange: InputChange
}

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
					<ClosingBalance value={addDollarSign(`${closingBalance}`)} />
				</Grid>
			</Grid>
		</Box>
	)
}
