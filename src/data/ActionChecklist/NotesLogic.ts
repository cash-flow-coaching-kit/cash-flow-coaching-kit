import ILogicLayer from "../_config/logicLayer"
import ActionChecklistDB from "./ActionChecklistDatabase"
import {
	ActionChecklistNotesStruct,
	BaseActionChecklistNotesStruct,
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
}

// Creates a instance of the logic class and exports the instance
const ActionNotesUseCase = new ActionChecklistNotesLogic()

export default ActionNotesUseCase
