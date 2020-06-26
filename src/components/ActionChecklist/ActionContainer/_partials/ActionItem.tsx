import React, {
	ReactElement,
	ChangeEvent,
	FocusEvent,
	useState,
	MouseEvent,
} from "react"
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
import ConfirmDialogue from "../../../ConfirmDialogue"

/**
 * Component used to render a single action item
 *
 * @param {IActionItemProps} props
 * @returns ReactElement
 */
const ActionItem = ({
	index,
	draggableId,
	data,
	dispatch,
	deleteAction,
	lastItemInList,
	globalHide,
}: IActionItemProps): ReactElement => {
	const styles = useActionItemStyles()
	const [cacheDescription, setCacheDescription] = useState<string>(
		data.description
	)
	const [dialogueOpen, setDialogueOpen] = useState<boolean>(false)
	const [datepickerOpen, setDatepickerOpen] = useState(false)

	/**
	 * Triggers a update action to change the state
	 *
	 * @param {BaseActionChecklistStruct} newData Updated data
	 * @returns void
	 */
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

	/**
	 * Closes the confirmation dialogue
	 *
	 * @returns void
	 */
	const onDialogueClose = (): void => {
		setDialogueOpen(false)
	}

	/**
	 * Triggers the delete method if the dialogue is confirmed
	 *
	 * @returns void
	 */
	const onDialogueConfirm = (): void => {
		if (!lastItemInList) {
			// Deletes the item from the db & state
			deleteAction(data.id || "")
		} else {
			// Reset the last item
			setCacheDescription("")
			triggerDispatch({
				...data,
				description: "",
				completed: false,
				reviewBy: new Date(),
			})
		}
		setDialogueOpen(false)
	}

	/**
	 * Changes the state for the description value
	 *
	 * @param {ChangeEvent<HTMLInputElement>} e
	 */
	const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setCacheDescription(e.target.value)
	}

	/**
	 * When focusing OFF the description field,
	 * update the state. This prevents a delay in input
	 *
	 * @async
	 * @param {FocusEvent<HTMLInputElement>} e
	 * @returns Promise<void>
	 */
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
			setDatepickerOpen(false)
		}
	}

	/**
	 * Check to see if item can be completed
	 *
	 * @returns boolean
	 */
	const canComplete = (): boolean => cacheDescription !== ""

	/**
	 * Handles the change event when completing a action
	 *
	 * @param {ChangeEvent<HTMLInputElement>} e
	 * @returns void
	 */
	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
		triggerDispatch({
			...data,
			completed: e.target.checked,
		})
	}

	/**
	 * Method to handle the action triggered when clicking
	 * on the delete icon
	 *
	 * @param {MouseEvent<HTMLButtonElement>} e
	 * @returns void
	 */
	const handleDelete = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault()
		setDialogueOpen(true)
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
					<Grid
						container
						spacing={2}
						className={`${styles.gridRoot} ${
							globalHide && data.completed ? styles.hide : ""
						}`}
					>
						{/* TODO: Split some of these into other partials */}
						<Grid item xs={2} sm={1} md={1}>
							<Tooltip title="Mark as done">
								<Checkbox
									checked={data.completed}
									inputProps={{ "aria-label": "completed checkbox" }}
									id={`action-complete--${data?.id}`}
									onChange={handleCheckboxChange}
									disabled={!canComplete()}
									indeterminate={!canComplete()}
								/>
							</Tooltip>
						</Grid>
						<Grid item xs={10} sm={5} md={6}>
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
						<Grid item xs={12} sm={4} md={3}>
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
										id={`action-reviewby--${data?.id}`}
										label="Review by"
										value={data.reviewBy}
										onChange={handleDateChange}
										KeyboardButtonProps={{
											"aria-label": "change date",
										}}
										className={styles.datepicker}
										open={datepickerOpen}
										onOpen={(): void => setDatepickerOpen(true)}
										onClose={(): void => setDatepickerOpen(false)}
										fullWidth
									/>
								</MuiPickersUtilsProvider>
							)}
						</Grid>
						<Grid item xs={12} sm={2} md={2} className={styles.actions}>
							<Tooltip title="Delete">
								<IconButton onClick={handleDelete}>
									<DeleteIcon />
								</IconButton>
							</Tooltip>
							<ConfirmDialogue
								open={dialogueOpen}
								onClose={onDialogueClose}
								onCancel={onDialogueClose}
								onConfirm={onDialogueConfirm}
							>
								Are you sure you want to remove this item?
							</ConfirmDialogue>
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
