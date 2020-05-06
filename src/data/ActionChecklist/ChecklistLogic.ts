import { ActionChecklistStruct } from "../_config/shape"
import ActionChecklistDB from "./ActionChecklistDatabase"
import ILogicLayer from "../_config/logicLayer"

class ActionChecklistLogic extends ILogicLayer<ActionChecklistStruct> {
	constructor() {
		super(ActionChecklistDB, ActionChecklistDB.actionItems)
	}
}

const ActionChecklistUseCase = new ActionChecklistLogic()

export default ActionChecklistUseCase
