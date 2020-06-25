import { ReactNode } from "react"
import { PossibleActionItems } from "../../../state/action-checklist/shape"
import { BaseActionChecklistStruct } from "../../../data/_config/shape"
import { SnackbarMsgData } from "../../SnackbarMsg/SnackbarMsg"

// Alias for the title type
// - used to allow easy override if this needs to change
type titleType = string

// Alias for the subtitle type
// - used to allow easy override if this needs to change
type subtitleType = string

/**
 * Prop definition for the `ChecklistModal` component
 *
 * @interface ChecklistModalProps
 */
export interface ChecklistModalProps {
	container: PossibleActionItems
	title: titleType
	subtitle: subtitleType
	children?: ReactNode
}

type showSnackbarFn = (
	msg: SnackbarMsgData["msg"],
	severity: SnackbarMsgData["severity"]
) => void

/**
 * Prop defition for the `Modal` sub component
 *
 * @export
 * @interface ModalProps
 * @extends {ChecklistModalProps}
 */
export interface ModalProps extends ChecklistModalProps {
	open: boolean
	onClose(): void
	showSnackbar: showSnackbarFn
}

// Type defition for a single Form item data
export type FormItem = {
	description: BaseActionChecklistStruct["description"]
	reviewBy: BaseActionChecklistStruct["reviewBy"]
}

/**
 * Form data structure for formik
 *
 * @export
 * @interface FormValues
 */
export interface FormValues {
	items: FormItem[]
}

/**
 * Prop defition for the `Form` sub component
 *
 * @export
 * @interface FormProps
 */
export interface FormProps {
	onFormSubmission(values: FormValues): Promise<boolean>
	closeModal: ModalProps["onClose"]
	showSnackbar: showSnackbarFn
}
