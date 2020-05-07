import { ReactNode } from "react"

export interface ConfirmDialogueProps {
	open: boolean
	onClose(): void
	onConfirm(): void
	onCancel(): void
	title?: string
	confirmText?: string
	cancelText?: string
	children?: ReactNode
}
