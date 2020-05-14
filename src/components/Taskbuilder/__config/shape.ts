import { ClientId } from "../../../data/_config/shape"
import { PossibleActionItems } from "../../../state/action-checklist/shape"

/**
 * Props for the `Taskbuilder` component
 *
 * @export
 * @interface TaskbuilderProps
 */
export interface TaskbuilderProps {
	container: PossibleActionItems
}

/**
 * Props for the `Form` sub component
 *
 * @export
 * @interface FormProps
 */
export interface FormProps {
	container: PossibleActionItems
	client: ClientId
}

/**
 * Object definition for the checklist options
 *
 * @export
 * @type ChecklistOptions
 */
export type ChecklistOptions = Record<PossibleActionItems, string[]>
