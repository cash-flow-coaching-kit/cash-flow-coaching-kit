import React, { ReactElement, ChangeEvent, FocusEvent, useState } from "react"
import {
	Grid,
	Checkbox,
	TextField,
	IconButton,
	Tooltip,
	Typography,
} from "@material-ui/core"
import DragIndicatorIcon from "@material-ui/icons/DragIndicator"
import DeleteIcon from "@material-ui/icons/Delete"
import { Draggable } from "react-beautiful-dnd"
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { format } from "date-fns"
import { useActionItemStyles } from "../_config/styles"
import { IActionItemProps } from "../_config/shape"
import { ActionChecklistActionTypes } from "../../../../state/action-checklist/shape"
import { BaseActionChecklistStruct } from "../../../../data/_config/shape"

const ActionItem = ({
	index,
	draggableId,
	data,
	dispatch,
}: IActionItemProps): ReactElement => {
	const styles = useActionItemStyles()
	const [cacheDescription, setCacheDescription] = useState<string>(
		data.description
	)

	const triggerDispatch = (newData: BaseActionChecklistStruct): void => {
		if (data?.id) {
			dispatch({
				type: ActionChecklistActionTypes.UpdateActionItem,
				payload: {
					id: data.id,
					data: newData,
				},
			})
		}
	}

	const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setCacheDescription(e.target.value)
	}

	const onDescriptionBlur = async (
		e: FocusEvent<HTMLInputElement>
	): Promise<void> => {
		if (data.description !== cacheDescription) {
			triggerDispatch({
				...data,
				description: cacheDescription,
			})
		}
	}

	/**
	 * Change the state of the "Review by" date
	 *
	 * @param {Date|null} date
	 * @returns void
	 */
	const handleDateChange = (date: Date | null): void => {
		if (date) {
			triggerDispatch({
				...data,
				reviewBy: date,
			})
		}
	}

	const canComplete = (): boolean => cacheDescription !== ""

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
		triggerDispatch({
			...data,
			completed: e.target.checked,
		})
	}

	return (
		<Draggable draggableId={`${draggableId}`} index={index}>
			{(provided): ReactElement => (
				<div
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...provided.draggableProps}
					ref={provided.innerRef}
					className="action-item"
				>
					<Grid container spacing={3} className={styles.gridRoot}>
						<Grid item xs={1}>
							<Tooltip title="Mark as done">
								<Checkbox
									// TODO: Update state and db on change
									checked={data.completed}
									inputProps={{ "aria-label": "completed checkbox" }}
									id={`action-complete--${data?.id}`}
									onChange={handleCheckboxChange}
									disabled={!canComplete()}
									indeterminate={!canComplete()}
								/>
							</Tooltip>
						</Grid>
						<Grid item xs={6}>
							{data.completed ? (
								<Typography className={styles.completedText}>
									{data.description}
								</Typography>
							) : (
								<TextField
									className={styles.textfield}
									id={`action-description--${data?.id}`}
									label="Action item"
									variant="outlined"
									value={cacheDescription}
									onChange={onDescriptionChange}
									onBlur={onDescriptionBlur}
								/>
							)}
						</Grid>
						<Grid item xs={3}>
							{data.completed ? (
								<Typography className={styles.completedText}>
									{format(data.reviewBy, "dd/MM/yyyy")}
								</Typography>
							) : (
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<KeyboardDatePicker
										disableToolbar
										variant="inline"
										inputVariant="outlined"
										format="dd/MM/yyyy"
										margin="normal"
										id={`action-reviewby--${data?.id}`}
										label="Review by"
										value={data.reviewBy}
										onChange={handleDateChange}
										KeyboardButtonProps={{
											"aria-label": "change date",
										}}
										className={styles.datepicker}
										disablePast
									/>
								</MuiPickersUtilsProvider>
							)}
						</Grid>
						<Grid item xs={2} className={styles.actions}>
							<Tooltip title="Delete">
								<IconButton>
									<DeleteIcon />
								</IconButton>
							</Tooltip>
							<Tooltip title="Reposition">
								<IconButton
									className={styles.dragIcon}
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...provided.dragHandleProps}
								>
									<DragIndicatorIcon />
								</IconButton>
							</Tooltip>
						</Grid>
					</Grid>
				</div>
			)}
		</Draggable>
	)
}

export default ActionItem
