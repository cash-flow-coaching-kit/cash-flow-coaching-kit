import { IActionChecklistState } from "../shape"
import { ActionChecklistNotesId } from "../../../data/_config/shape"
import filterById from "../../../util/filters/ById"

/**
 * Removes a note from state
 *
 * @param {IActionChecklistState} state
 * @param {ActionChecklistNotesId} payload
 * @returns IActionChecklistState
 */
const removeNote = (
	state: IActionChecklistState,
	payload: ActionChecklistNotesId
): IActionChecklistState => {
	const filteredNotes = state.notes.filter(filterById(payload, true))

	return {
		...state,
		notes: filteredNotes,
	}
}

export default removeNote
