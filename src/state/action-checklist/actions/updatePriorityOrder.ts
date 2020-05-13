import { IActionChecklistState } from "../shape"
import { ActionChecklistPriorityStruct } from "../../../data/_config/shape"

/**
 * Updates the priority order
 *
 * @param {IActionChecklistState} state
 * @param {ActionChecklistPriorityStruct} payload
 * @returns IActionChecklistState
 */
const updatePriorityOrder = (
	state: IActionChecklistState,
	payload: ActionChecklistPriorityStruct
): IActionChecklistState => {
	const newPriority = state.priority.reduce(
		(collection: ActionChecklistPriorityStruct[], item) => {
			return collection.concat(item.id === payload.id ? payload : item)
		},
		[]
	)

	return {
		...state,
		priority: newPriority,
	}
}

export default updatePriorityOrder
