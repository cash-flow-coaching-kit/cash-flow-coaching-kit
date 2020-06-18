import { uniq } from "lodash-es"
import {
	IActionChecklistState,
	IBulkAddActionItemsPayload,
	PossibleActionItems,
} from "../shape"
import {
	ActionChecklistPriorityStruct,
	ClientId,
	ActionChecklistPriorityId,
	ActionChecklistId,
} from "../../../data/_config/shape"
import filterById from "../../../util/filters/ById"
import { newPriorityItem } from "../../../data/ActionChecklist/_config/utilities"

/**
 * Append a new priority item to state if it can't be found
 * OR
 * Append the additional order items to the priority it can find
 *
 * @param {ActionChecklistPriorityStruct[]} priorities
 * @param {ClientId} client
 * @param {PossibleActionItems} container
 * @param {ActionChecklistId[]} order
 * @param {ActionChecklistPriorityId} priorityId
 * @returns ActionChecklistPriorityStruct[]
 */
const appendOrCreatePriority = (
	priorities: ActionChecklistPriorityStruct[],
	client: ClientId,
	container: PossibleActionItems,
	order: ActionChecklistId[],
	priorityId: ActionChecklistPriorityId
): ActionChecklistPriorityStruct[] => {
	const canFind = priorities.find(filterById(priorityId))
	if (typeof canFind !== "undefined") {
		return priorities.reduce(
			(collection: ActionChecklistPriorityStruct[], current) => {
				return collection.concat(
					current.id === priorityId
						? {
								...current,
								order: uniq([...current.order, ...order]),
						  }
						: current
				)
			},
			[]
		)
	}
	return priorities.concat({
		...newPriorityItem(client, container),
		id: priorityId,
		order: uniq(order),
	})
}

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

	const newPriority = appendOrCreatePriority(
		state.priority,
		items[0].clientId,
		items[0].actionContainer,
		additionalOrders,
		priorityId
	)

	return {
		...state,
		checklistCollection: newChecklist,
		priority: newPriority,
	}
}

export default bulkAddActionItem
