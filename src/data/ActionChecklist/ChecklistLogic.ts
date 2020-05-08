import {
	ActionChecklistStruct,
	BaseActionChecklistStruct,
} from "../_config/shape"
import ActionChecklistDB from "./ActionChecklistDatabase"
import ILogicLayer from "../_config/logicLayer"
import { PossibleActionItems } from "../../state/action-checklist/shape"
import { findByContainer } from "./_config/utilities"

/**
 * Logic implementation for Action Items for the
 * Action Checklist database
 *
 * @class ActionChecklistLogic
 * @extends {ILogicLayer<ActionChecklistStruct, BaseActionChecklistStruct>}
 */
class ActionChecklistLogic extends ILogicLayer<
	ActionChecklistStruct,
	BaseActionChecklistStruct
> {
	/**
	 * Creates an instance of ActionChecklistLogic.
	 *
	 * @memberof ActionChecklistLogic
	 */
	constructor() {
		super(ActionChecklistDB, ActionChecklistDB.actionItems)
	}

	/**
	 * Finds all action items by a container
	 *
	 * @param {PossibleActionItems} container
	 * @returns {Promise<ActionChecklistStruct[]>}
	 * @memberof ActionChecklistLogic
	 */
	findByContainer(
		container: PossibleActionItems
	): Promise<ActionChecklistStruct[]> {
		return findByContainer<ActionChecklistStruct>(
			container,
			this.database,
			this.table
		)
	}

	/**
	 * Adds functionality for processing bulk updates
	 *
	 * @param {ActionChecklistStruct[]} items
	 * @returns {Promise<number>}
	 * @memberof ActionChecklistLogic
	 */
	bulkUpdate(items: ActionChecklistStruct[]): Promise<number> {
		return this.database.transaction("rw", this.table, () => {
			return this.table.bulkPut(items)
		})
	}
}

// Creates a instance of the logic class and exports the instance
const ActionChecklistUseCase = new ActionChecklistLogic()

export default ActionChecklistUseCase
