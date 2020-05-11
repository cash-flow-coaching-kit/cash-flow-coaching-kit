import {
	ActionChecklistPriorityStruct,
	BaseActionChecklistPriorityStruct,
	ClientId,
} from "../_config/shape"
import ActionChecklistDB from "./ActionChecklistDatabase"
import ILogicLayer from "../_config/logicLayer"
import { PossibleActionItems } from "../../state/action-checklist/shape"
import { findByContainer, findByClientAndContainer } from "./_config/utilities"

/**
 * Logic implementation for priority items for the
 * Action Checklist databasea
 *
 * @class ActionChecklistPriorityLogic
 * @extends {ILogicLayer<ActionChecklistPriorityStruct, BaseActionChecklistPriorityStruct>}
 */
class ActionChecklistPriorityLogic extends ILogicLayer<
	ActionChecklistPriorityStruct,
	BaseActionChecklistPriorityStruct
> {
	/**
	 * Creates an instance of ActionChecklistPriorityLogic.
	 *
	 * @memberof ActionChecklistPriorityLogic
	 */
	constructor() {
		super(ActionChecklistDB, ActionChecklistDB.priority)
	}

	/**
	 * Finds all action priority by a container
	 *
	 * @param {PossibleActionItems} container
	 * @returns {Promise<ActionChecklistPriorityStruct[]>}
	 * @memberof ActionChecklistPriorityLogic
	 */
	findByContainer(
		container: PossibleActionItems
	): Promise<ActionChecklistPriorityStruct[]> {
		return findByContainer(container, this.database, this.table)
	}

	/**
	 * Finds all action priority by container and client
	 *
	 * @param {PossibleActionItems} container
	 * @param {ClientId} clientId
	 * @returns {Promise<ActionChecklistStruct[]>}
	 * @memberof ActionChecklistLogic
	 */
	findByClientAndContainer(
		container: PossibleActionItems,
		clientId: ClientId
	): Promise<ActionChecklistPriorityStruct[]> {
		return findByClientAndContainer<ActionChecklistPriorityStruct>(
			container,
			clientId,
			this.database,
			this.table
		)
	}
}

// Creates a instance of the logic class and exports the instance
const ActionPriorityUseCase = new ActionChecklistPriorityLogic()

export default ActionPriorityUseCase
