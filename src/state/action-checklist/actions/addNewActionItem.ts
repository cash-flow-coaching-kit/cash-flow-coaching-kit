import { uniq } from "lodash-es"
import { IActionChecklistState, IAddNewActionItemPayload } from "../shape"
import { ActionChecklistPriorityStruct } from "../../../data/_config/shape"
import filterById from "../../../util/filters/ById"
import { newPriorityItem } from "../../../data/ActionChecklist/_config/utilities"

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
		(collection: ActionChecklistPriorityStruct[], item) =>
			collection.concat(
				item.id === pID
					? { ...item, order: uniq([...item.order, checklist?.id || ""]) }
					: item
			),
		[]
	)

	const hasPriority = state.priority.filter(filterById(pID))
	if (hasPriority.length === 0) {
		// eslint-disable-next-line
		newPriority.push({
			...newPriorityItem(checklist.clientId, checklist.actionContainer),
			order: [checklist?.id || ""],
			id: pID,
		})
	}

	return {
		...state,
		checklistCollection: [...state.checklistCollection, checklist],
		priority: newPriority,
	}
}

export default addNewActionItem
