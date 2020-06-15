import Dexie from "dexie"
import { uniq } from "lodash-es"
import { PossibleActionItems } from "../../../state/action-checklist/shape"
import {
	DatabaseId,
	ClientId,
	ActionChecklistStruct,
	ActionChecklistPriorityStruct,
	ActionChecklistNotesStruct,
	ActionChecklistPriorityId,
} from "../../_config/shape"
import ActionChecklistUseCase from "../ChecklistLogic"
import ActionPriorityUseCase from "../PriorityLogic"

/**
 * Finds a item by the `actionContainer` and `clientId` key
 *
 * @param {PossibleActionItems} actionContainer Container to query for
 * @param {ClientId} clientId Client to query for
 * @param {Dexie} db Database instance that extends Dexie
 * @param {Dexie.Table<T, DatabaseId>} table Table within the provided database
 * @returns Promise<T[]>
 */
export const findByClientAndContainer = <T>(
	actionContainer: PossibleActionItems,
	clientId: ClientId,
	db: Dexie,
	table: Dexie.Table<T, DatabaseId>
): Promise<T[]> => {
	return db.transaction("r", table, () => {
		return table.where({ actionContainer, clientId }).toArray()
	})
}

/**
 * Creates the structure for a new checklist item
 *
 * @param {ClientId} clientId
 * @param {PossibleActionItems} container
 * @returns ActionChecklistStruct
 */
export const newChecklistItem = (
	clientId: ClientId,
	container: PossibleActionItems
): ActionChecklistStruct => ({
	clientId,
	actionContainer: container,
	description: "",
	completed: false,
	reviewBy: new Date(),
})

/**
 * Creates the structure for a new priority item
 *
 * @param {ClientId} clientId
 * @param {PossibleActionItems} container
 * @returns ActionChecklistPriorityStruct
 */
export const newPriorityItem = (
	clientId: ClientId,
	container: PossibleActionItems
): ActionChecklistPriorityStruct => ({
	clientId,
	actionContainer: container,
	order: [],
})

/**
 * Creates the structure for a new notes item
 *
 * @param {ClientId} clientId
 * @param {PossibleActionItems} container
 * @returns ActionChecklistNotesStruct
 */
export const newNotesItem = (
	clientId: ClientId,
	container: PossibleActionItems
): ActionChecklistNotesStruct => ({
	clientId,
	actionContainer: container,
	notes: "",
})

/**
 * Bulk adds items to the database and updates the related priority order
 *
 * returns the items with their db ids & a success boolean
 *
 * @export
 * @param {ActionChecklistStruct[]} items
 * @param {ActionChecklistPriorityId} priorityId
 * @returns {Promise<[ActionChecklistStruct[], boolean]>}
 */
export async function bulkAddChecklists(
	items: ActionChecklistStruct[],
	priorityId: ActionChecklistPriorityId
): Promise<[ActionChecklistStruct[], boolean]> {
	const priority = await ActionPriorityUseCase.findById(priorityId)
	if (!priority) return [items, false]

	const ids = await ActionChecklistUseCase.bulkPut(items)

	const newOrder = priority?.order.concat(ids)
	console.log(uniq(newOrder))
	await ActionPriorityUseCase.update(priorityId, {
		...priority,
		order: uniq(newOrder),
	})

	const completedItems = items.map((item, idx) => ({
		...item,
		id: ids[idx],
	}))

	return [completedItems, true]
}
