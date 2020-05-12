import { IActionChecklistState, IUpdateNotesPayload } from "../shape"
import { ActionChecklistNotesStruct } from "../../../data/_config/shape"

/**
 * Updates the data for a specific note
 *
 * @param {IActionChecklistState} state
 * @param {IUpdateNotesPayload} payload
 * @returns IActionChecklistState
 */
const updateNote = (
	state: IActionChecklistState,
	payload: IUpdateNotesPayload
): IActionChecklistState => {
	const { data, id } = payload
	const newNotes = state.notes.reduce(
		(collection: ActionChecklistNotesStruct[], current) => {
			return collection.concat(
				current.id === id ? { ...current, ...data, id: current.id } : current
			)
		},
		[]
	)

	return {
		...state,
		notes: newNotes,
	}
}

export default updateNote
