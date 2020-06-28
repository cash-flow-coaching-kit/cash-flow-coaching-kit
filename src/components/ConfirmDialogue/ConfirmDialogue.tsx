import React, { ReactElement } from "react"
import {
	Dialog,
	DialogTitle,
	DialogActions,
	Button,
	DialogContent,
	DialogContentText,
} from "@material-ui/core"
import { ConfirmDialogueProps } from "./_config/shape"

const ConfirmDialogue = ({
	open,
	onClose,
	onCancel,
	onConfirm,
	children,
	confirmText = "Confirm",
	cancelText = "Cancel",
	title = "Proceed?",
}: ConfirmDialogueProps): ReactElement => {
	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
			<DialogTitle>{title}</DialogTitle>
			{React.Children.count(children) > 0 ? (
				<DialogContent>
					<DialogContentText>{children}</DialogContentText>
				</DialogContent>
			) : (
				<></>
			)}
			<DialogActions>
				<Button onClick={onCancel}>{cancelText}</Button>
				<Button
					onClick={onConfirm}
					color="primary"
					variant="contained"
					autoFocus
				>
					{confirmText}
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default ConfirmDialogue
