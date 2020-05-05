import { Reducer } from "react"
import {
	IActionChecklistState,
	ActionChecklistReducerActions,
	ActionChecklistActionTypes,
} from "./shape"
import { generateKey } from "../../util/lists/key"

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
		case ActionChecklistActionTypes.AddNewActionItem: {
			const {
				payload: { key },
			} = action
			let copyActionItem = { ...state.actionItems }[key]
			const copyItems = copyActionItem?.items || {}
			const copyOrder = copyActionItem?.order || []

			// TODO: Use the id that comes from the DB
			const id = generateKey()

			copyActionItem = {
				items: {
					...copyItems,
					[id]: {
						id,
						completed: false,
						description: "",
					},
				},
				order: copyOrder.concat(id),
			}

			return {
				...state,
				actionItems: {
					...state.actionItems,
					[key]: {
						...copyActionItem,
					},
				},
			}
		}
		default: {
			return state
		}
	}
}

export default ActionChecklistReducer
