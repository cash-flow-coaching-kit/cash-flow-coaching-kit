import { IActionChecklistState, IUpdateDatabaseSyncPayload } from "../shape"

/**
 * Updates the state when data is synced from the database
 *
 * @param {IActionChecklistState} state
 * @param {IUpdateDatabaseSyncPayload} payload
 * @returns IActionChecklistState
 */
const updateDatabaseSync = (
	state: IActionChecklistState,
	payload: IUpdateDatabaseSyncPayload
): IActionChecklistState => {
	const { notes, priority, data: checklistCollection } = payload

	return {
		...state,
		databaseSyced: true,
		notes,
		priority,
		checklistCollection,
	}
}

export default updateDatabaseSync
