import React, { ReactElement, useState } from "react"
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	DialogContentText,
	makeStyles,
	ButtonProps,
	ButtonClassKey,
	StandardProps,
} from "@material-ui/core"
import NewClientForm from "../../components/Forms/NewClient"

// New client styling
const useNCDStyles = makeStyles((theme) => ({
	content: {
		borderStyle: "solid",
		borderColor: theme.palette.divider,
		borderWidth: "1px 0 1px 0",
		marginTop: theme.spacing(2),
	},
}))

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
	const styles = useNCDStyles()

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
				<DialogTitle id="new-client-dialog-title">Add a client</DialogTitle>
				<DialogContent>
					<NewClientForm closeDialog={onFormCloseTrigger} />
				</DialogContent>
				<DialogContent className={styles.content}>
					<DialogContentText>
						Disclaimer: This website does not collect or store any personal
						information, including the business name.
					</DialogContentText>
					<DialogContentText>
						Please refer to the Terms & Conditions of use and our Data usage and
						privacy statement.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default NewClientDialog
