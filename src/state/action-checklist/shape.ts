import { Dispatch } from "react"
import {
	ActionChecklistPriorityStruct,
	ActionChecklistStruct,
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
	ChangeReviewBy = "change_review_by",
	UpdateDatabaseSync = "change_database_sync",
	AddNewActionItem = "add_new_action_item",
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
	| { type: ActionChecklistActionTypes.ChangeReviewBy; payload: Date }
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

/**
 * Structure for the action checklist context
 *
 * @export
 * @interface IActionChecklistState
 */
export interface IActionChecklistState {
	hideCompleted: boolean
	reviewBy: Date
	databaseSyced: boolean
	priority: ActionChecklistPriorityStruct[]
	checklistCollection: ActionChecklistStruct[]
	dispatch: Dispatch<ActionChecklistReducerActions>
}
