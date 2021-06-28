import { IActionChecklistState } from "../shape"
import { ActionChecklistNotesStruct } from "../../../data/_config/shape"

/**
 * Adds a note to state
 *
 * @param {IActionChecklistState} state
 * @param {ActionChecklistNotesStruct} payload
 * @returns IActionChecklistState
 */
const addNote = (
	state: IActionChecklistState,
	payload: ActionChecklistNotesStruct
): IActionChecklistState => ({
	...state,
	notes: [...state.notes, payload],
})

export default addNote
