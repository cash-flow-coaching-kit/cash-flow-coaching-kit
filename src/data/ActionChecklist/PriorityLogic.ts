import { ActionChecklistPriorityStruct } from "../_config/shape"
import ActionChecklistDB from "./ActionChecklistDatabase"
import ILogicLayer from "../_config/logicLayer"

class ActionChecklistPriorityLogic extends ILogicLayer<
	ActionChecklistPriorityStruct
> {
	constructor() {
		super(ActionChecklistDB, ActionChecklistDB.priority)
	}
}

const ActionPriorityUseCase = new ActionChecklistPriorityLogic()

export default ActionPriorityUseCase
