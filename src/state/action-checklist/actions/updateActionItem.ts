import { IActionChecklistState, IUpdateActionItemPayload } from "../shape"
import { ActionChecklistStruct } from "../../../data/_config/shape"

/**
 * Updates the data for a specific action item
 *
 * @param {IActionChecklistState} state
 * @param {IUpdateActionItemPayload} payload
 * @returns IActionChecklistState
 */
const updateActionItem = (
	state: IActionChecklistState,
	payload: IUpdateActionItemPayload
): IActionChecklistState => {
	const { data, id } = payload

	const newChecklist = state.checklistCollection.reduce(
		(checklists: ActionChecklistStruct[], current) =>
			checklists.concat(
				current.id === id ? { ...current, ...data, id: current.id } : current
			),
		[]
	)

	return {
		...state,
		checklistCollection: newChecklist,
	}
}

export default updateActionItem
