import { Dispatch } from "react"

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
 * Data structure for a single item in the action items structure
 *
 * @export
 * @interface IActionItemDataStructure
 */
export interface IActionItemDataStructure {
	id: string
	completed: boolean
	description: string
}

/**
 * Data structure per action item
 *
 * @export
 * @interface ISingleActionItem
 */
export interface ISingleActionItem {
	items: {
		[key: string]: IActionItemDataStructure
	}
	order: string[]
}

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
			payload: boolean
	  }
	| {
			type: ActionChecklistActionTypes.AddNewActionItem
			payload: {
				key: PossibleActionItems
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
	reviewBy: Date
	databaseSyced: boolean
	actionItems: Record<PossibleActionItems, ISingleActionItem | null>
	dispatch: Dispatch<ActionChecklistReducerActions>
}
