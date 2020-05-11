import React, { ReactElement, useState, ChangeEvent, MouseEvent } from "react"
import {
	TextField,
	Box,
	Button,
	IconButton,
	Grid,
	Tooltip,
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import DeleteIcon from "@material-ui/icons/Delete"
import { useActionNotesStyles } from "../_config/styles"
import { IActionNotesProps } from "../_config/shape"
import ActionNotesUseCase from "../../../../data/ActionChecklist/NotesLogic"
import { newNotesItem } from "../../../../data/ActionChecklist/_config/utilities"
import { ActionChecklistActionTypes } from "../../../../state/action-checklist/shape"

const ActionNotes = ({
	currentClient,
	container,
	note,
	dispatch,
}: IActionNotesProps): ReactElement => {
	const styles = useActionNotesStyles()
	const [content, setContent] = useState<string>(note?.notes || "")

	const handleContentChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setContent(e.target.value)
	}

	const handleContentBlur = async (): Promise<void> => {
		if (note?.id && note.notes !== content) {
			const newData = {
				...note,
				notes: content,
			}
			dispatch({
				type: ActionChecklistActionTypes.UpdateNotes,
				payload: {
					id: note.id,
					data: newData,
				},
			})
			await ActionNotesUseCase.update(note.id, newData)
		}
	}

	const addNotesToContainer = async (
		e: MouseEvent<HTMLButtonElement>
	): Promise<void> => {
		e.preventDefault()
		const item = newNotesItem(currentClient, container)
		const id = await ActionNotesUseCase.create(item)
		dispatch({
			type: ActionChecklistActionTypes.AddNotes,
			payload: {
				id,
				...item,
			},
		})
	}

	const removeNote = async (
		e: MouseEvent<HTMLButtonElement>
	): Promise<void> => {
		e.preventDefault()
		if (note?.id) {
			dispatch({
				type: ActionChecklistActionTypes.RemoveNote,
				payload: note.id,
			})
			await ActionNotesUseCase.delete(note.id)
		}
	}

	return (
		<Box className={styles.box}>
			{note ? (
				<Grid container className={styles.gridRoot}>
					<Grid item xs={10}>
						<TextField
							className={styles.textfield}
							label="Notes"
							multiline
							rows={3}
							variant="outlined"
							value={content}
							onChange={handleContentChange}
							onBlur={handleContentBlur}
						/>
					</Grid>
					<Grid item xs={2} className={styles.gridActions}>
						<Tooltip title="Delete note">
							<IconButton onClick={removeNote}>
								<DeleteIcon />
							</IconButton>
						</Tooltip>
					</Grid>
				</Grid>
			) : (
				<Button startIcon={<AddIcon />} onClick={addNotesToContainer}>
					Add notes
				</Button>
			)}
		</Box>
	)
}

export default ActionNotes
