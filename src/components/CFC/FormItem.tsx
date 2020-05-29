import React, { ReactElement, MouseEvent } from "react"
import {
	Grid,
	TextField,
	Checkbox,
	Tooltip,
	IconButton,
} from "@material-ui/core"
import GroupWorkIcon from "@material-ui/icons/GroupWork"
import { RepeaterFormProps } from "./__config/shape"
import { CashFlow } from "../../data/_config/shape"
import {
	DescriptionSize,
	ActionsSize,
	AmountSize,
	ApplyGSTSize,
} from "./__config/utilities"
import MoneyInput from "../MoneyInput"
import IconDeleteButton from "../IconDeleteButton"

interface FormItemProps {
	name: RepeaterFormProps["name"]
	value: CashFlow
	onChange: InputChange
	removeItem: (e: MouseEvent<HTMLButtonElement>) => void
	index: number
}

export default React.memo(function FormItem({
	name,
	value,
	onChange,
	index,
	removeItem,
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
				<IconDeleteButton onClick={removeItem} />
				<Tooltip title="Group data">
					<IconButton>
						<GroupWorkIcon />
					</IconButton>
				</Tooltip>
			</Grid>
		</Grid>
	)
})
