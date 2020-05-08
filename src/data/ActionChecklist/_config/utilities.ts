/* eslint-disable import/prefer-default-export */
import Dexie from "dexie"
import { PossibleActionItems } from "../../../state/action-checklist/shape"
import { DatabaseId } from "../../_config/shape"

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
