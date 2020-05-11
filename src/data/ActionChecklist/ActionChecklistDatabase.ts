import Dexie from "dexie"
import {
	ActionChecklistStruct,
	ActionChecklistId,
	ActionChecklistPriorityStruct,
	ActionChecklistPriorityId,
	ActionChecklistNotesStruct,
	ActionChecklistNotesId,
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
	 * Table used to store action item notes
	 *
	 * @type {Dexie.Table<ActionChecklistNotesStruct, ActionChecklistNotesId>}
	 * @memberof ActionChecklistDatabase
	 */
	notes!: Dexie.Table<ActionChecklistNotesStruct, ActionChecklistNotesId>

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
		this.notes = this.table("notes")
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
		// Initial migration
		this.version(1).stores({
			actionItems: "++id, clientId, actionContainer, completed, description",
			priority: "++id, actionContainer, *order",
		})

		// Version 1.1
		// Add reviewBy to actionItems
		this.version(1.1).stores({
			actionItems:
				"++id, clientId, actionContainer, completed, description, reviewBy",
			priority: "++id, actionContainer, *order",
		})

		// Version 1.2
		// Add notes
		this.version(1.2).stores({
			actionItems:
				"++id, clientId, actionContainer, completed, description, reviewBy",
			priority: "++id, actionContainer, *order, clientId",
			notes: "++id, actionContainer, notes, clientId",
		})

		// Version 1.3
		// Add compound index for [actionContainer+clientId]
		this.version(1.3).stores({
			actionItems:
				"++id, [actionContainer+clientId], completed, description, reviewBy",
			priority: "++id, [actionContainer+clientId], *order",
			notes: "++id, actionContainer, notes, clientId",
		})
	}
}

const ActionChecklistDB = new ActionChecklistDatabase()

export default ActionChecklistDB
