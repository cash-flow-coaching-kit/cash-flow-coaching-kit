import React, { ReactElement, MouseEvent, useState } from "react"
import {
	Grid,
	TextField,
	Checkbox,
	Tooltip,
	IconButton,
	makeStyles,
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

const useStyles = makeStyles((theme) => ({
	actionGridItem: {
		height: theme.typography.pxToRem(72),
		display: "flex",
	},
}))

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
	const cls = useStyles()
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
		<Grid container spacing={2} alignItems="stretch">
			<Grid item xs={DescriptionSize}>
				<TextField
					variant="outlined"
					name={`${name}[${index}].description`}
					id={`${name}[${index}].description`}
					value={value.description}
					onChange={onChange}
					label="Description"
					fullWidth
				/>
			</Grid>
			<Grid item xs={AmountSize}>
				<MoneyInput
					value={value.amount}
					onChange={onChange}
					name={`${name}[${index}].amount`}
					variant="outlined"
				/>
			</Grid>
			<Grid item xs={ApplyGSTSize} className={cls.actionGridItem}>
				<Checkbox
					checked={value.gstApplicable}
					onChange={onChange}
					name={`${name}[${index}].gstApplicable`}
					inputProps={{ "aria-label": "Apply GST" }}
				/>
			</Grid>
			<Grid item xs={ActionsSize} className={cls.actionGridItem}>
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
						<span className="MuiTypography-srOnly">Group imported data</span>
					</IconButton>
				</Tooltip>
			</Grid>
		</Grid>
	)
})
