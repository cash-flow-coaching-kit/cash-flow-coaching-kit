import React, { ReactElement, useContext } from "react"
import { AppBar, Toolbar, FormControlLabel, Checkbox } from "@material-ui/core"
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
	const { hideCompleted, dispatch } = useContext(ActionChecklistContext)

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
			</Toolbar>
		</AppBar>
	)
}

export default ActionHeader
