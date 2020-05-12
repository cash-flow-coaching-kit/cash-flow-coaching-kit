import { IActionChecklistState, IRemoveActionItemPayload } from "../shape"
import filterById from "../../../util/filters/ById"
import { ActionChecklistPriorityStruct } from "../../../data/_config/shape"
import filterByEquals from "../../../util/filters/ByEquals"

/**
 * Removes an action item from state and removes
 * the items id from the priority array
 *
 * @param {IActionChecklistState} state
 * @param {IRemoveActionItemPayload} payload
 * @returns IActionChecklistState
 */
const removeActionItem = (
	state: IActionChecklistState,
	payload: IRemoveActionItemPayload
): IActionChecklistState => {
	const { targetId, priorityId } = payload

	const newChecklist = state.checklistCollection.filter(
		filterById(targetId, true)
	)

	const newPriority = state.priority.reduce(
		(collection: ActionChecklistPriorityStruct[], item) => {
			if (item.id === priorityId) {
				const newOrder = item.order.filter(filterByEquals(targetId, true))
				return collection.concat({
					...item,
					order: newOrder,
				})
			}

			return collection.concat(item)
		},
		[]
	)

	return {
		...state,
		checklistCollection: [...newChecklist],
		priority: newPriority,
	}
}

export default removeActionItem
