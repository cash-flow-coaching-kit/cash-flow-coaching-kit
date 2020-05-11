import { Reducer } from "react"
import {
	IActionChecklistState,
	ActionChecklistReducerActions,
	ActionChecklistActionTypes,
} from "./shape"
import findObjectIndexByValue from "../../util/array/findObjectIndexByValue"
import {
	ActionChecklistStruct,
	ActionChecklistPriorityStruct,
	ActionChecklistNotesStruct,
} from "../../data/_config/shape"

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
				notes: action.payload.notes,
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
				if (copyPriority[idx]) {
					copyPriority[idx].order.push(payload.id)
				}
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

			const newChecklist = state.checklistCollection.reduce(
				(checklists: ActionChecklistStruct[], current) => {
					return checklists.concat(
						current.id === id ? { ...current, ...data } : current
					)
				},
				[]
			)

			return {
				...state,
				checklistCollection: newChecklist,
			}
		}
		case ActionChecklistActionTypes.UpdatePriorityOrder: {
			const { payload } = action
			const newPriority = state.priority.reduce(
				(collection: ActionChecklistPriorityStruct[], item) => {
					return collection.concat(item.id === payload.id ? payload : item)
				},
				[]
			)

			return {
				...state,
				priority: newPriority,
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
		case ActionChecklistActionTypes.AddNotes: {
			const { payload } = action
			return {
				...state,
				notes: [...state.notes, payload],
			}
		}
		case ActionChecklistActionTypes.UpdateNotes: {
			const { data, id } = action.payload
			const newNotes = state.notes.reduce(
				(collection: ActionChecklistNotesStruct[], current) => {
					return collection.concat(
						current.id === id ? { ...current, ...data } : current
					)
				},
				[]
			)

			return {
				...state,
				notes: newNotes,
			}
		}
		case ActionChecklistActionTypes.RemoveNote: {
			const { payload: id } = action
			const filteredNotes = state.notes.filter((note) => note.id !== id)

			return {
				...state,
				notes: filteredNotes,
			}
		}
		default: {
			break
		}
	}

	return state
}

export default ActionChecklistReducer
