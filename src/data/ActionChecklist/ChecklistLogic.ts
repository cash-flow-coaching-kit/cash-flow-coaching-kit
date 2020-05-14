import {
	ActionChecklistStruct,
	BaseActionChecklistStruct,
	ClientId,
	ActionChecklistId,
} from "../_config/shape"
import ActionChecklistDB from "./ActionChecklistDatabase"
import ILogicLayer from "../_config/logicLayer"
import { PossibleActionItems } from "../../state/action-checklist/shape"
import { findByClientAndContainer } from "./_config/utilities"

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
	 * Adds functionality for processing bulk updates
	 *
	 * @param {ActionChecklistStruct[]} items
	 * @returns {Promise<ActionChecklistId>} Last updated item id
	 * @memberof ActionChecklistLogic
	 */
	bulkUpdate(items: ActionChecklistStruct[]): Promise<ActionChecklistId> {
		return this.database.transaction("rw", this.table, () => {
			return this.table.bulkPut(items)
		})
	}

	/**
	 * Finds all action items by container and client
	 *
	 * @param {PossibleActionItems} container
	 * @param {ClientId} clientId
	 * @returns {Promise<ActionChecklistStruct[]>}
	 * @memberof ActionChecklistLogic
	 */
	findByClientAndContainer(
		container: PossibleActionItems,
		clientId: ClientId
	): Promise<ActionChecklistStruct[]> {
		return findByClientAndContainer<ActionChecklistStruct>(
			container,
			clientId,
			this.database,
			this.table
		)
	}
}

// Creates a instance of the logic class and exports the instance
const ActionChecklistUseCase = new ActionChecklistLogic()

export default ActionChecklistUseCase
