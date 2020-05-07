import {
	ActionChecklistPriorityStruct,
	BaseActionChecklistPriorityStruct,
} from "../_config/shape"
import ActionChecklistDB from "./ActionChecklistDatabase"
import ILogicLayer from "../_config/logicLayer"
import { PossibleActionItems } from "../../state/action-checklist/shape"
import { findByContainer } from "./_config/utilities"

class ActionChecklistPriorityLogic extends ILogicLayer<
	ActionChecklistPriorityStruct,
	BaseActionChecklistPriorityStruct
> {
	constructor() {
		super(ActionChecklistDB, ActionChecklistDB.priority)
	}

	findByContainer(
		container: PossibleActionItems
	): Promise<ActionChecklistPriorityStruct[]> {
		return findByContainer(container, this.database, this.table)
	}
}

const ActionPriorityUseCase = new ActionChecklistPriorityLogic()

export default ActionPriorityUseCase
