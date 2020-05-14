import { ReactNode } from "react"
import { AlertProps } from "@material-ui/lab/Alert"
import { PossibleActionItems } from "../../../state/action-checklist/shape"

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
}

// Type defition for a single Form item data
export type FormItem = {
	description: string
	reviewBy: Date
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
}

/**
 * Interface used for the form snackbar component
 *
 * @export
 * @interface FormSnackbar
 */
export interface FormSnackbar {
	open: boolean
	msg: string
	severity?: AlertProps["severity"]
}
