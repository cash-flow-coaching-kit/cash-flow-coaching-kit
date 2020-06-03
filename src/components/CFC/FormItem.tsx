import React, { ReactElement, MouseEvent, useState } from "react"
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
import ConfirmDialogue from "../ConfirmDialogue"

/**
 * Prop definition for the form item component
 *
 * @interface FormItemProps
 */
interface FormItemProps {
	name: RepeaterFormProps["name"]
	value: CashFlow
	onChange: InputChange
	removeItem: (e: MouseEvent<HTMLButtonElement>) => void
	index: number
}

/**
 * A single form item in the repeater form
 *
 * @export
 * @param {FormItemProps} {
 * 	name,
 * 	value,
 * 	onChange,
 * 	index,
 * 	removeItem,
 * }
 * @returns {ReactElement}
 */
export default React.memo(function FormItem({
	name,
	value,
	onChange,
	index,
	removeItem,
}: FormItemProps): ReactElement {
	const [dialogOpen, setDialogOpen] = useState<boolean>(false)
	const onDialogClose = (): void => {
		setDialogOpen(false)
	}
	const onDialogConfirm = (e: MouseEvent<HTMLButtonElement>): void => {
		removeItem(e)
		setDialogOpen(false)
	}
	const triggerDialog = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault()
		setDialogOpen(true)
	}

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
				<IconDeleteButton onClick={triggerDialog} />
				<ConfirmDialogue
					open={dialogOpen}
					onClose={onDialogClose}
					onCancel={onDialogClose}
					onConfirm={onDialogConfirm}
				>
					Are you sure you want to remove this item?
				</ConfirmDialogue>
				<Tooltip title="Group data">
					<IconButton>
						<GroupWorkIcon />
					</IconButton>
				</Tooltip>
			</Grid>
		</Grid>
	)
})
