import ILogicLayer from "../_config/logicLayer"
import ActionChecklistDB from "./ActionChecklistDatabase"
import {
	ActionChecklistNotesStruct,
	BaseActionChecklistNotesStruct,
	ActionChecklistNotesId,
} from "../_config/shape"

/**
 * Logic implementation for note items for the
 * Action Checklist databasea
 *
 * @class ActionChecklistNotesLogic
 * @extends {ILogicLayer<ActionChecklistNotesStruct, BaseActionChecklistNotesStruct>}
 */
class ActionChecklistNotesLogic extends ILogicLayer<
	ActionChecklistNotesStruct,
	BaseActionChecklistNotesStruct
> {
	/**
	 * Creates an instance of ActionChecklistNotesLogic.
	 *
	 * @memberof ActionChecklistNotesLogic
	 */
	constructor() {
		super(ActionChecklistDB, ActionChecklistDB.notes)
	}

	/**
	 * Default put functionality for the notes table
	 *
	 * @param {ActionChecklistNotesStruct} data
	 * @returns {Promise<ActionChecklistNotesId>}
	 * @memberof ActionChecklistNotesLogic
	 */
	put(data: ActionChecklistNotesStruct): Promise<ActionChecklistNotesId> {
		return this.database.transaction("rw", this.table.name, () => {
			return this.table.put(data)
		})
	}
}

// Creates a instance of the logic class and exports the instance
const ActionNotesUseCase = new ActionChecklistNotesLogic()

export default ActionNotesUseCase
