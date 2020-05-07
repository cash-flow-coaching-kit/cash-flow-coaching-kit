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
			return {
				...state,
				hideCompleted: action.payload,
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

			if (payload?.id) {
				copyPriority[idx].order.push(payload.id)
			}

			return {
				...state,
				checklistCollection: [...state.checklistCollection, payload],
				priority: [...copyPriority],
			}
		}
		case ActionChecklistActionTypes.UpdateActionItem: {
			const {
				payload: { data, id },
			} = action
			const index = findObjectIndexByValue(state.checklistCollection, "id", id)
			const stateCopy = [...state.checklistCollection]
			stateCopy[index] = {
				...stateCopy[index],
				...data,
			}

			return {
				...state,
				checklistCollection: [...stateCopy],
			}
		}
		case ActionChecklistActionTypes.UpdatePriorityOrder: {
			const { payload } = action
			const stateCopy = [...state.priority]
			const index = findObjectIndexByValue(stateCopy, "id", payload.id)
			stateCopy[index] = {
				...stateCopy[index],
				...payload,
			}

			return {
				...state,
				priority: [...stateCopy],
			}
		}
		case ActionChecklistActionTypes.RemoveActionItem: {
			const { targetId, container } = action.payload
			const stateCopy = { ...state }
			stateCopy.checklistCollection = stateCopy.checklistCollection.filter(
				(item) => item.id !== targetId
			)
			const priorityIndex = findObjectIndexByValue(
				stateCopy.priority,
				"actionContainer",
				container
			)
			stateCopy.priority[priorityIndex].order = stateCopy.priority[
				priorityIndex
			].order.filter((item) => item !== targetId)

			return {
				...stateCopy,
			}
		}
		default: {
			return state
		}
	}
}

export default ActionChecklistReducer
