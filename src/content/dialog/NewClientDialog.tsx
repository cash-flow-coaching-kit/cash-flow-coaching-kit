import React, { ReactElement, useState } from "react"
import {
	Button,
	Dialog,
	DialogTitle,
	ButtonProps,
	ButtonClassKey,
	StandardProps,
} from "@material-ui/core"
import NewClientForm from "../../components/Forms/NewClient"

/**
 * Prop definition for the `<NewClientDialog>` component
 *
 * @interface INewClientDialogProps
 * @extends {StandardProps<ButtonProps, ButtonClassKey>}
 */
interface INewClientDialogProps
	extends StandardProps<ButtonProps, ButtonClassKey> {
	triggerText: string
}

/**
 * Modal used when creating a new client. Props extends the default
 * Button props and are applied to the trigger
 *
 * @param {INewClientDialogProps} {props}
 * @returns ReactElement
 */
const NewClientDialog = ({
	triggerText,
	// eslint-disable-next-line
	...props
}: INewClientDialogProps): ReactElement => {
	const [open, setOpen] = useState<boolean>(false)

	/**
	 * Handles the opening of the modal
	 *
	 * @returns void
	 */
	const handleOpen = (): void => {
		setOpen(true)
	}

	/**
	 * Handles the closing of the modal
	 *
	 * @returns void
	 */
	const handleClose = (): void => {
		setOpen(false)
	}

	const onFormCloseTrigger = (cb: () => void): void => {
		handleClose()
		cb()
	}

	return (
		<>
			<Button
				color="primary"
				variant="contained"
				size="large"
				onClick={handleOpen}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}
			>
				{triggerText}
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="new-client-dialog-title"
				fullWidth
				maxWidth="sm"
			>
				<DialogTitle id="new-client-dialog-title">Start a session </DialogTitle>
				{/* Moved the DialogContent into the form for the submit to work in IE11 */}
				<NewClientForm
					closeDialog={onFormCloseTrigger}
					handleClose={handleClose}
				/>
			</Dialog>
		</>
	)
}

export default NewClientDialog
