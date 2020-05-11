import Dexie from "dexie"
import { PossibleActionItems } from "../../../state/action-checklist/shape"
import {
	DatabaseId,
	ClientId,
	ActionChecklistStruct,
	ActionChecklistPriorityStruct,
	ActionChecklistNotesStruct,
} from "../../_config/shape"

/**
 * Finds a item by the `actionContainer` key
 *
 * @param {PossibleActionItems} container Container to query for
 * @param {Dexie} db Database instance that extends Dexie
 * @param {Dexie.Table<T, DatabaseId>} table Table within the provided database
 * @returns Promise<T[]>
 */
export const findByContainer = <T>(
	container: PossibleActionItems,
	db: Dexie,
	table: Dexie.Table<T, DatabaseId>
): Promise<T[]> => {
	return db.transaction("r", table, () => {
		return table.where("actionContainer").equals(container).toArray()
	})
}

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
