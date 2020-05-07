import { Dispatch } from "react"
import {
	ActionChecklistPriorityStruct,
	ActionChecklistStruct,
	BaseActionChecklistStruct,
	ActionChecklistId,
} from "../../data/_config/shape"

/**
 * Possible action item groups
 *
 * @export
 * @type
 */
export type PossibleActionItems =
	| "cashInActions"
	| "cashOutActions"
	| "planningBusiness"
	| "recordKeeping"
	| "funding"
	| "managing"
	| "planningCommitments"
	| "tracking"
	| "transition"

/**
 * Actions that can be performed for state changes
 *
 * @export
 * @enum {number}
 */
export enum ActionChecklistActionTypes {
	ChangeHideCompleted = "change_hide_completed",
	UpdateDatabaseSync = "change_database_sync",
	AddNewActionItem = "add_new_action_item",
	UpdateActionItem = "update_action_item",
	UpdatePriorityOrder = "update_priority_order",
	RemoveActionItem = "remove_action_item",
}

/**
 * Defines the type:payload type pairing
 * aka; what the structure of the payload should be
 * given a certain type
 *
 * @export
 * @type ActionChecklistReducerActions
 */
export type ActionChecklistReducerActions =
	| { type: ActionChecklistActionTypes.ChangeHideCompleted; payload: boolean }
	| {
			type: ActionChecklistActionTypes.UpdateDatabaseSync
			payload: {
				data: ActionChecklistStruct[]
				priority: ActionChecklistPriorityStruct[]
			}
	  }
	| {
			type: ActionChecklistActionTypes.AddNewActionItem
			payload: ActionChecklistStruct
	  }
	| {
			type: ActionChecklistActionTypes.UpdateActionItem
			payload: {
				data: BaseActionChecklistStruct
				id: ActionChecklistId
			}
	  }
	| {
			type: ActionChecklistActionTypes.UpdatePriorityOrder
			payload: ActionChecklistPriorityStruct
	  }
	| {
			type: ActionChecklistActionTypes.RemoveActionItem
			payload: {
				targetId: ActionChecklistId
				container: PossibleActionItems
			}
	  }

/**
 * Structure for the action checklist context
 *
 * @export
 * @interface IActionChecklistState
 */
export interface IActionChecklistState {
	hideCompleted: boolean
	databaseSyced: boolean
	priority: ActionChecklistPriorityStruct[]
	checklistCollection: ActionChecklistStruct[]
	dispatch: Dispatch<ActionChecklistReducerActions>
}
