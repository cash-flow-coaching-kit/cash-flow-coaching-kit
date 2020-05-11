import { MouseEvent, Dispatch } from "react"
import {
	PossibleActionItems,
	ActionChecklistReducerActions,
} from "../../../../state/action-checklist/shape"
import {
	ActionChecklistStruct,
	ActionChecklistPriorityStruct,
	ActionChecklistId,
	ClientId,
	ActionChecklistNotesStruct,
} from "../../../../data/_config/shape"

/**
 * Prop definition for the ActionContainer component
 *
 * @export
 * @interface IActionContainerProps
 */
export interface IActionContainerProps {
	identfier: PossibleActionItems
	data: ActionChecklistStruct[]
	priority: ActionChecklistPriorityStruct
	notes: ActionChecklistNotesStruct
	currentClient: ClientId
}

/**
 * Prop definition for the ActionItem component
 *
 * @export
 * @interface IActionItemProps
 */
export interface IActionItemProps {
	index: number
	draggableId: number
	data: ActionChecklistStruct
	dispatch: Dispatch<ActionChecklistReducerActions>
	deleteAction(id: ActionChecklistId): void
	lastItemInList: boolean
	globalHide: boolean
}

/**
 * Prop definition for the Actions component
 *
 * @export
 * @interface IActionsProps
 */
export interface IActionsProps {
	addNewAction(e: MouseEvent<HTMLButtonElement>): void
	disabled: boolean
	saving: boolean
	lastSaved: Date
}

/**
 * Prop definition for the ActionNotes component
 *
 * @export
 * @interface IActionNotes
 */
export interface IActionNotesProps {
	currentClient: ClientId
	container: PossibleActionItems
	note: ActionChecklistNotesStruct
	dispatch: Dispatch<ActionChecklistReducerActions>
}
