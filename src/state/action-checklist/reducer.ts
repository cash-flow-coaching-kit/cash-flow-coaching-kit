import { Reducer } from "react"
import {
	IActionChecklistState,
	ActionChecklistReducerActions,
	ActionChecklistActionTypes,
} from "./shape"
import findObjectIndexByValue from "../../util/array/findObjectIndexByValue"

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
			const { payload } = action

			return {
				...state,
				hideCompleted: payload,
			}
		}
		case ActionChecklistActionTypes.ChangeReviewBy: {
			const { payload } = action

			return {
				...state,
				reviewBy: payload,
			}
		}
		case ActionChecklistActionTypes.UpdateDatabaseSync: {
			return {
				...state,
				databaseSyced: true,
				checklistCollection: action.payload.data,
				priority: action.payload.priority,
			}
		}
		case ActionChecklistActionTypes.AddNewActionItem: {
			const { payload } = action

			const copyPriority = [...state.priority]
			const idx = findObjectIndexByValue(
				copyPriority,
				"actionContainer",
				payload.actionContainer
			)
			copyPriority[idx].order.push(payload.id || -1)

			return {
				...state,
				checklistCollection: [...state.checklistCollection, payload],
				priority: [...copyPriority],
			}
		}
		default: {
			return state
		}
	}
}

export default ActionChecklistReducer
