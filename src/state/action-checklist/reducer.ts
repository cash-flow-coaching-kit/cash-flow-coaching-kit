import { Reducer } from "react"
import {
	IActionChecklistState,
	ActionChecklistReducerActions,
	ActionChecklistActionTypes,
} from "./shape"
import {
	changeHideCompleted,
	updateDatabaseSync,
	addNewActionItem,
	updateActionItem,
	updatePriorityOrder,
	removeActionItem,
	addNote,
	updateNote,
	removeNote,
} from "./actions"

/**
 * Reducer method for the Action Checklist context
 *
 * @param {IActionChecklistState} state
 * @param {ActionChecklistReducerActions} action
 * @returns {IActionChecklistState}
 */
const ActionChecklistReducer: Reducer<
	IActionChecklistState,
	ActionChecklistReducerActions
> = (
	state: IActionChecklistState,
	action: ActionChecklistReducerActions
): IActionChecklistState => {
	switch (action.type) {
		case ActionChecklistActionTypes.ChangeHideCompleted: {
			return changeHideCompleted(state, action.payload)
		}
		case ActionChecklistActionTypes.UpdateDatabaseSync: {
			return updateDatabaseSync(state, action.payload)
		}
		case ActionChecklistActionTypes.AddNewActionItem: {
			return addNewActionItem(state, action.payload)
		}
		case ActionChecklistActionTypes.UpdateActionItem: {
			return updateActionItem(state, action.payload)
		}
		case ActionChecklistActionTypes.UpdatePriorityOrder: {
			return updatePriorityOrder(state, action.payload)
		}
		case ActionChecklistActionTypes.RemoveActionItem: {
			return removeActionItem(state, action.payload)
		}
		case ActionChecklistActionTypes.AddNotes: {
			return addNote(state, action.payload)
		}
		case ActionChecklistActionTypes.UpdateNotes: {
			return updateNote(state, action.payload)
		}
		case ActionChecklistActionTypes.RemoveNote: {
			return removeNote(state, action.payload)
		}
		default: {
			return state
		}
	}
}

export default ActionChecklistReducer
