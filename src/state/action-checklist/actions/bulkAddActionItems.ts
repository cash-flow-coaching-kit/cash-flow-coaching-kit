import { IActionChecklistState, IBulkAddActionItemsPayload } from "../shape"
import { ActionChecklistPriorityStruct } from "../../../data/_config/shape"

/**
 * Action to add actions in bulk to the current state
 *
 * @param {IActionChecklistState} state
 * @param {IBulkAddActionItemsPayload} payload
 * @returns IActionChecklistState
 */
const bulkAddActionItem = (
	state: IActionChecklistState,
	payload: IBulkAddActionItemsPayload
): IActionChecklistState => {
	const { items, priorityId } = payload

	const newChecklist = [...state.checklistCollection, ...items]
	const additionalOrders = items.reduce((arr: number[], item) => {
		return typeof item.id === "number" ? [...arr, item.id] : arr
	}, [])

	const newPriority = state.priority.reduce(
		(collection: ActionChecklistPriorityStruct[], current) => {
			return collection.concat(
				current.id === priorityId
					? {
							...current,
							order: [...current.order, ...additionalOrders],
					  }
					: current
			)
		},
		[]
	)

	return {
		...state,
		checklistCollection: newChecklist,
		priority: newPriority,
	}
}

export default bulkAddActionItem
