import React, { ReactElement } from "react"
import { Grid, TextField, Checkbox } from "@material-ui/core"
import { RepeaterFormProps } from "./__config/shape"
import { CashFlow } from "../../data/_config/shape"
import {
	DescriptionSize,
	ActionsSize,
	AmountSize,
	ApplyGSTSize,
} from "./__config/utilities"
import MoneyInput from "../MoneyInput"

interface FormItemProps {
	name: RepeaterFormProps["name"]
	value: CashFlow
	onChange: InputChange
	index: number
}

export default function FormItem({
	name,
	value,
	onChange,
	index,
}: FormItemProps): ReactElement {
	return (
		<Grid container spacing={2} alignItems="center">
			<Grid item sm={DescriptionSize}>
				<TextField
					variant="outlined"
					name={`${name}[${index}].description`}
					value={value.description}
					onChange={onChange}
					label="Description"
					fullWidth
				/>
			</Grid>
			<Grid item sm={AmountSize}>
				<MoneyInput
					value={value.amount}
					onChange={onChange}
					name={`${name}[${index}].amount`}
					variant="outlined"
				/>
			</Grid>
			<Grid item sm={ApplyGSTSize}>
				<Checkbox
					checked={value.gstApplicable}
					onChange={onChange}
					name={`${name}[${index}].gstApplicable`}
					inputProps={{ "aria-label": "Apply GST" }}
				/>
			</Grid>
			<Grid item sm={ActionsSize}>
				Actions
			</Grid>
		</Grid>
	)
}
