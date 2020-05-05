import React, { ReactElement, useContext } from "react"
import {
	AppBar,
	Toolbar,
	FormControlLabel,
	Checkbox,
	Box,
} from "@material-ui/core"
import DateFnsUtils from "@date-io/date-fns"
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers"
import useActionHeaderStyles from "./_config/style"
import { ActionChecklistContext } from "../../../state/action-checklist"
import { ActionChecklistActionTypes } from "../../../state/action-checklist/shape"

/**
 * Header component for the Action Checklist page
 *
 * @returns ReactElement
 */
const ActionHeader = (): ReactElement => {
	const styles = useActionHeaderStyles()
	const { hideCompleted, reviewBy, dispatch } = useContext(
		ActionChecklistContext
	)

	/**
	 * Change the state of the "hide all completed"
	 * checkbox
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} event
	 * @returns void
	 */
	const handleHideChange = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		dispatch({
			type: ActionChecklistActionTypes.ChangeHideCompleted,
			payload: event.target.checked,
		})
	}

	/**
	 * Change the state of the "Review by" date
	 *
	 * @param {Date|null} date
	 * @returns void
	 */
	const handleDateChange = (date: Date | null): void => {
		if (date !== null) {
			dispatch({
				type: ActionChecklistActionTypes.ChangeReviewBy,
				payload: date,
			})
		}
	}

	return (
		<AppBar position="static" color="default" className={styles.appbar}>
			<Toolbar>
				<FormControlLabel
					control={
						<Checkbox
							checked={hideCompleted}
							onChange={handleHideChange}
							name="hide-items"
						/>
					}
					label="Hide completed item"
				/>
				<Box className={styles.box}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							inputVariant="outlined"
							format="dd/MM/yyyy"
							margin="normal"
							id="review-by-date"
							label="Review by"
							value={reviewBy}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</MuiPickersUtilsProvider>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default ActionHeader
