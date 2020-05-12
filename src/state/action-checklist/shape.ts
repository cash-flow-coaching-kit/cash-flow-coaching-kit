import { Dispatch } from "react"
import {
	ActionChecklistPriorityStruct,
	ActionChecklistStruct,
	BaseActionChecklistStruct,
	ActionChecklistId,
	ActionChecklistNotesStruct,
	BaseActionChecklistNotesStruct,
	ActionChecklistNotesId,
	ActionChecklistPriorityId,
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
	AddNotes = "add_notes",
	UpdateNotes = "update_notes",
	RemoveNote = "remove_note",
}

/**
 * Data structure used when running the `UpdateDatabaseSync` action
 *
 * @export
 * @interface IUpdateDatabaseSyncPayload
 */
export interface IUpdateDatabaseSyncPayload {
	data: ActionChecklistStruct[]
	priority: ActionChecklistPriorityStruct[]
	notes: ActionChecklistNotesStruct[]
}

/**
 * Data structure used when running the `AddNewActionItem` action
 *
 * @export
 * @interface IAddNewActionItemPayload
 */
export interface IAddNewActionItemPayload {
	checklist: ActionChecklistStruct
	priority: ActionChecklistPriorityId
}

/**
 * Data structure used when running the `UpdateActionItem` action
 *
 * @export
 * @interface IUpdateActionItemPayload
 */
export interface IUpdateActionItemPayload {
	data: BaseActionChecklistStruct
	id: ActionChecklistId
}

/**
 * Data structure used when running the `RemoveActionItem` action
 *
 * @export
 * @interface IRemoveActionItemPayload
 */
export interface IRemoveActionItemPayload {
	targetId: ActionChecklistId
	priorityId: ActionChecklistPriorityId
}

/**
 * Data structure used when running the `UpdateNotes` action
 *
 * @export
 * @interface IUpdateNotesPayload
 */
export interface IUpdateNotesPayload {
	data: BaseActionChecklistNotesStruct
	id: ActionChecklistNotesId
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
			payload: IUpdateDatabaseSyncPayload
	  }
	| {
			type: ActionChecklistActionTypes.AddNewActionItem
			payload: IAddNewActionItemPayload
	  }
	| {
			type: ActionChecklistActionTypes.UpdateActionItem
			payload: IUpdateActionItemPayload
	  }
	| {
			type: ActionChecklistActionTypes.UpdatePriorityOrder
			payload: ActionChecklistPriorityStruct
	  }
	| {
			type: ActionChecklistActionTypes.RemoveActionItem
			payload: IRemoveActionItemPayload
	  }
	| {
			type: ActionChecklistActionTypes.AddNotes
			payload: ActionChecklistNotesStruct
	  }
	| {
			type: ActionChecklistActionTypes.UpdateNotes
			payload: IUpdateNotesPayload
	  }
	| {
			type: ActionChecklistActionTypes.RemoveNote
			payload: ActionChecklistNotesId
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
	notes: ActionChecklistNotesStruct[]
	dispatch: Dispatch<ActionChecklistReducerActions>
}
