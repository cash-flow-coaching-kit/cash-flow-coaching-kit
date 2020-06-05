import { uniq } from "lodash-es"
import { IActionChecklistState, IAddNewActionItemPayload } from "../shape"
import { ActionChecklistPriorityStruct } from "../../../data/_config/shape"

/**
 * Adds a new action item and appends the id to the
 * related priority item
 *
 * @param {IActionChecklistState} state
 * @param {IAddNewActionItemPayload} payload
 * @returns IActionChecklistState
 */
const addNewActionItem = (
	state: IActionChecklistState,
	payload: IAddNewActionItemPayload
): IActionChecklistState => {
	const { checklist, priority: pID } = payload

	const newPriority = state.priority.reduce(
		(collection: ActionChecklistPriorityStruct[], item) => {
			return collection.concat(
				item.id === pID
					? { ...item, order: uniq([...item.order, checklist?.id || -1]) }
					: item
			)
		},
		[]
	)

	return {
		...state,
		checklistCollection: [...state.checklistCollection, checklist],
		priority: newPriority,
	}
}

export default addNewActionItem
