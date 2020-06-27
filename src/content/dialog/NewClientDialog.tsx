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
	Typography,
} from "@material-ui/core"
import NewClientForm from "../../components/Forms/NewClient"
import Spacer from "../../components/Spacer"

// New client styling
const useNCDStyles = makeStyles((theme) => ({
	content: {
		borderStyle: "solid",
		borderColor: theme.palette.divider,
		borderWidth: "1px 0 1px 0",
		marginTop: theme.spacing(2),
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
		"& p": {
			margin: 0,
		},
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
				<DialogTitle id="new-client-dialog-title">
					First, add a business name.
				</DialogTitle>
				<DialogContent>
					<Typography>
						It can be your business name or something memorable. If you have
						multiple businesses, add them later.{" "}
					</Typography>
					<Spacer />
					<NewClientForm closeDialog={onFormCloseTrigger} />
				</DialogContent>
				<DialogContent className={styles.content}>
					<DialogContentText>
						Remember: The kit does not save information between sessions. Use
						the export function regularly to save your progress.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						form="add-new-business-form"
					>
						Add business
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default NewClientDialog
