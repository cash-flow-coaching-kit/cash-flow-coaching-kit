import {
	ActionChecklistStruct,
	BaseActionChecklistStruct,
} from "../_config/shape"
import ActionChecklistDB from "./ActionChecklistDatabase"
import ILogicLayer from "../_config/logicLayer"
import { PossibleActionItems } from "../../state/action-checklist/shape"
import { findByContainer } from "./_config/utilities"

class ActionChecklistLogic extends ILogicLayer<
	ActionChecklistStruct,
	BaseActionChecklistStruct
> {
	constructor() {
		super(ActionChecklistDB, ActionChecklistDB.actionItems)
	}

	findByContainer(
		container: PossibleActionItems
	): Promise<ActionChecklistStruct[]> {
		return findByContainer<ActionChecklistStruct>(
			container,
			this.database,
			this.table
		)
	}

	bulkUpdate(items: ActionChecklistStruct[]): Promise<number> {
		return this.database.transaction("rw", this.table, () => {
			return this.table.bulkPut(items)
		})
	}
}

const ActionChecklistUseCase = new ActionChecklistLogic()

export default ActionChecklistUseCase
