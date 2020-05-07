import Dexie from "dexie"
import {
	ActionChecklistStruct,
	ActionChecklistId,
	ActionChecklistPriorityStruct,
	ActionChecklistPriorityId,
} from "../_config/shape"

/**
 * Database definition for the Action checklist data
 *
 * @class ActionChecklistDatabase
 * @extends {Dexie}
 */
class ActionChecklistDatabase extends Dexie {
	/**
	 * Table used to store action item data
	 *
	 * @type {Dexie.Table<ActionChecklistStruct, ActionChecklistId>}
	 * @memberof ActionChecklistDatabase
	 */
	actionItems!: Dexie.Table<ActionChecklistStruct, ActionChecklistId>

	/**
	 * Table used to store action item priority
	 *
	 * @type {Dexie.Table<
	 * 		ActionChecklistPriorityStruct,
	 * 		ActionChecklistPriorityId
	 * 	>}
	 * @memberof ActionChecklistDatabase
	 */
	priority!: Dexie.Table<
		ActionChecklistPriorityStruct,
		ActionChecklistPriorityId
	>

	/**
	 * Creates an instance of ActionChecklistDatabase.
	 *
	 * @memberof ActionChecklistDatabase
	 */
	constructor() {
		super("ActionChecklistDatabase")
		this.applyMigrations()

		this.actionItems = this.table("actionItems")
		this.priority = this.table("priority")
	}

	/**
	 * Applys the migration for the database.
	 * Add new migrations when the database needs to update
	 *
	 * @private
	 * @memberof ActionChecklistDatabase
	 */
	private applyMigrations(): void {
		// Version 1
		this.version(1).stores({
			actionItems: "++id, clientId, actionContainer, completed, description",
			priority: "++id, actionContainer, *order",
		})

		// Version 1.1
		this.version(1.1).stores({
			actionItems:
				"++id, clientId, actionContainer, completed, description, reviewBy",
			priority: "++id, actionContainer, *order",
		})
	}
}

const ActionChecklistDB = new ActionChecklistDatabase()

export default ActionChecklistDB
