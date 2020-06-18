import React, {
	ReactElement,
	useState,
	useEffect,
	ChangeEvent,
	useCallback,
	FormEvent,
	useContext,
} from "react"
import {
	Button,
	Box,
	Divider,
	FormControlLabel,
	Checkbox,
	TextField,
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

import { FormProps } from "../__config/shape"
import {
	checklistOptions,
	createNameField,
	determineChecked,
	inChecklists,
	constructSelectedItems,
} from "../__config/utilities"
import { generateKey, constructKey } from "../../../util/lists/key"
import { useFormStyles } from "../__config/styles"
import IfElseLoading from "../../IfElseLoading"
import {
	ActionChecklistStruct,
	ActionChecklistNotesStruct,
	ActionChecklistPriorityId,
	ActionChecklistNotesId,
} from "../../../data/_config/shape"
import arrayFillWith from "../../../util/array/arrayFillWith"
import ActionNotesUseCase from "../../../data/ActionChecklist/NotesLogic"
import {
	newNotesItem,
	newPriorityItem,
	bulkAddChecklists,
} from "../../../data/ActionChecklist/_config/utilities"
import ActionPriorityUseCase from "../../../data/ActionChecklist/PriorityLogic"
import { ActionChecklistContext } from "../../../state/action-checklist"
import { ActionChecklistActionTypes } from "../../../state/action-checklist/shape"
import filterByActionContainer from "../../../util/filters/ByActionContainer"
import { SnackbarMsgData } from "../../SnackbarMsg/SnackbarMsg"
import SnackbarMsg from "../../SnackbarMsg"
import { actionItemKeyTitleMapping } from "../../ActionChecklist/ActionContainer/_config/utilities"

/**
 * Form used to add predefined checklist items
 *
 * @export
 * @param {FormProps} { container, client }
 * @returns {ReactElement}
 */
export default function Form({ container, client }: FormProps): ReactElement {
	const styles = useFormStyles()

	// #region State management
	const [fetched, setFetched] = useState(false)
	const [key] = useState(generateKey())
	const { dispatch, notes, databaseSyced, checklistCollection } = useContext(
		ActionChecklistContext
	)
	const [snackbar, setSnackbar] = useState<SnackbarMsgData>({
		open: false,
		msg: "",
	})

	// -- Database Data
	const [checklists, setChecklists] = useState<ActionChecklistStruct[]>()
	const [priorityId, setPriorityId] = useState<ActionChecklistPriorityId>()
	const [noteId, setNoteId] = useState<ActionChecklistNotesId>()

	// -- Form Data
	const [options] = useState(checklistOptions(container))
	const [formChecklists, setFormChecklists] = useState(
		arrayFillWith<boolean>(options.length, false)
	)
	const [noteText, setNoteText] = useState<string>("")
	// #endregion

	// #region Data fetching
	/**
	 * Pulls in the correct note data or adds an item to the database
	 * for this client/container
	 *
	 * @useCallback
	 * @async
	 * @dependencies [notes, container, client]
	 */
	const syncNoteData = useCallback(async () => {
		const addToState = (data: ActionChecklistNotesStruct): void => {
			dispatch({
				type: ActionChecklistActionTypes.AddNotes,
				payload: data,
			})
		}

		// Fetch the data from the db
		const noteData = notes.filter(filterByActionContainer(container))[0]

		if (noteData?.id) {
			setNoteText(noteData.notes)
			setNoteId(noteData.id)
		} else {
			const newNote = newNotesItem(client, container)
			const nId = await ActionNotesUseCase.create(newNote)
			addToState({ ...newNote, id: nId })
			setNoteId(nId)
		}
	}, [notes, container, client, dispatch])

	/**
	 * Method to fetch the data used to pre-populate the form
	 *
	 * @useCallback
	 * @async
	 * @dependencies [container, client, options]
	 */
	const fetchExistingData = useCallback(async () => {
		// -- Note Data
		if (typeof noteId === "undefined") {
			await syncNoteData()
		}

		// -- Checklist Data
		const data = checklistCollection.filter(filterByActionContainer(container))
		setChecklists(data)
		setFormChecklists(determineChecked(options, data))

		setFetched(true)
	}, [container, options, syncNoteData, noteId, checklistCollection])

	/**
	 * Call the fetch function when component loads
	 *
	 * @useEffect
	 * @dependencies [fetchExistingData]
	 */
	useEffect(() => {
		if (databaseSyced) {
			fetchExistingData()
		}
	}, [fetchExistingData, databaseSyced])
	// #endregion

	// #region Checklist functionality
	/**
	 * Handles the event when using the checkboxes
	 *
	 * @param {boolean} checked
	 * @param {number} idx
	 */
	function handleCheckbox(checked: boolean, idx: number): void {
		const newState = formChecklists.reduce((acc: boolean[], cur, i) => {
			return acc.concat(i === idx ? checked : cur)
		}, [])
		setFormChecklists(newState)
	}

	/**
	 * Used with a `.map` method, this renders all the checklist
	 * items for the current container group
	 *
	 * @param {string} option
	 * @param {number} idx
	 * @returns {ReactElement}
	 */
	function mapChecklistItems(option: string, idx: number): ReactElement {
		return (
			<FormControlLabel
				label={option}
				key={constructKey(key, idx)}
				control={
					<Checkbox
						name={option}
						onChange={(e: ChangeEvent<HTMLInputElement>): void => {
							handleCheckbox(e.target.checked, idx)
						}}
					/>
				}
				name={createNameField(option)}
				checked={formChecklists[idx]}
				disabled={inChecklists(option, checklists || [])}
			/>
		)
	}
	// #endregion

	// #region Note functionality
	/**
	 * Handles the state change for the notes textfield
	 *
	 * @param {ChangeEvent<HTMLInputElement>} e
	 */
	function handleNoteChange(e: ChangeEvent<HTMLInputElement>): void {
		setNoteText(e.target.value)
	}
	// #endregion

	// #region Snackbar functionality
	function showSnackbar(
		msg: SnackbarMsgData["msg"],
		severity: SnackbarMsgData["severity"]
	): void {
		setSnackbar({ ...snackbar, msg, severity, open: true })
	}

	function closeSnackbar(event?: React.SyntheticEvent, reason?: string): void {
		if (reason === "clickaway") {
			return
		}

		setSnackbar({ ...snackbar, open: false })
	}
	// #endregion

	// #region Form submission functionality
	/**
	 * Creates a priority item if required and returns the id
	 * or returns the saved id
	 *
	 * @returns {Promise<ActionChecklistPriorityId>}
	 */
	async function preSubmitCheck(): Promise<ActionChecklistPriorityId> {
		if (typeof priorityId === "undefined") {
			const d = await ActionPriorityUseCase.findByClientAndContainer(
				container,
				client
			)
			if (d.length === 0) {
				const id = await ActionPriorityUseCase.create(
					newPriorityItem(client, container)
				)
				setPriorityId(id)
				return id
			}
			setPriorityId(d[0].id || -1)
			return d[0].id || -1
		}

		return priorityId
	}

	/**
	 * Functionality that runs on the form submission
	 *
	 * @param {FormEvent<HTMLFormElement>} e
	 * @returns {Promise<void>}
	 */
	async function onSubmission(e: FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault()
		const pID = await preSubmitCheck()
		const items = options.reduce(
			constructSelectedItems(formChecklists, client, container),
			[]
		)
		const nItems = items.map((i) => {
			const hasExistsing = checklists?.filter(
				(c) => c.description === i.description
			)
			if (hasExistsing && hasExistsing.length > 0) {
				return {
					...i,
					id: hasExistsing[0].id || -1,
				}
			}
			return i
		})

		const [newItems, success] = await bulkAddChecklists(nItems, pID)

		if (!success || typeof noteId === "undefined") {
			showSnackbar(
				"Something went wrong. Check the data and try again",
				"error"
			)
			return
		}

		const note = notes.filter(filterByActionContainer(container))
		const updatedNote = { ...note[0], notes: noteText }
		await ActionNotesUseCase.put(updatedNote)

		dispatch({
			type: ActionChecklistActionTypes.BulkAddActionItems,
			payload: {
				items: newItems,
				priorityId: pID,
			},
		})

		dispatch({
			type: ActionChecklistActionTypes.UpdateNotes,
			payload: {
				data: updatedNote,
				id: noteId,
			},
		})

		showSnackbar(
			`Items we addded to the ${actionItemKeyTitleMapping(
				container
			)} checklist`,
			"success"
		)
	}
	// #endregion

	return (
		<form autoComplete="off" noValidate onSubmit={onSubmission}>
			<SnackbarMsg
				open={snackbar.open}
				msg={snackbar.msg}
				severity={snackbar.severity}
				onClose={closeSnackbar}
			/>
			<IfElseLoading if={fetched}>
				{options.map(mapChecklistItems)}
				<Divider className={styles.divider} />
				<TextField
					multiline
					rows={3}
					variant="outlined"
					className={styles.fill}
					label="Notes"
					value={noteText}
					onChange={handleNoteChange}
				/>
			</IfElseLoading>

			{/* ACTIONS */}
			<Box className={styles.actions}>
				<Button
					color="primary"
					variant="contained"
					startIcon={<AddIcon />}
					className={styles.fill}
					type="submit"
				>
					Add to action checklist
				</Button>
			</Box>
		</form>
	)
}
