import { Reducer } from "react"
import {
	IActionChecklistState,
	ActionChecklistReducerActions,
	ActionChecklistActionTypes,
} from "./shape"

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
		default: {
			return state
		}
	}
}

export default ActionChecklistReducer
