import { MouseEvent } from "react"
import {
	PossibleActionItems,
	ISingleActionItem,
	IActionItemDataStructure,
} from "../../../../state/action-checklist/shape"

/**
 * Prop definition for the ActionContainer component
 *
 * @export
 * @interface IActionContainerProps
 */
export interface IActionContainerProps {
	identfier: PossibleActionItems
	data: ISingleActionItem
}

/**
 * Prop definition for the ActionItem component
 *
 * @export
 * @interface IActionItemProps
 */
export interface IActionItemProps {
	index: number
	draggableId: string
	data: IActionItemDataStructure
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
}
