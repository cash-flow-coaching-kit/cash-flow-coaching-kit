import { ReactNode, MouseEvent } from "react"

export interface ConfirmDialogueProps {
	open: boolean
	onClose(): void
	onConfirm(e: MouseEvent<HTMLButtonElement>): void
	onCancel(): void
	title?: string
	confirmText?: string
	cancelText?: string
	children?: ReactNode
}
