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

const useNCDStyles = makeStyles((theme) => ({
	content: {
		borderStyle: "solid",
		borderColor: theme.palette.divider,
		borderWidth: "1px 0 1px 0",
		marginTop: theme.spacing(2),
	},
}))

interface INewClientDialogProps
	extends StandardProps<ButtonProps, ButtonClassKey> {
	triggerText: string
}

const NewClientDialog = ({
	triggerText,
	...props
}: INewClientDialogProps): ReactElement => {
	const [open, setOpen] = useState<boolean>(false)
	const styles = useNCDStyles()

	const handleOpen = (): void => {
		setOpen(true)
	}

	const handleClose = (): void => {
		setOpen(false)
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
					<NewClientForm />
				</DialogContent>
				<DialogContent className={styles.content}>
					<DialogContentText>
						Disclaimer: This website does not collect or store any personal
						information, including the business name.
					</DialogContentText>
					<DialogContentText>
						Please refer to the Terms & Conditions of use and our Data usage and
						privacy statement.
						<br />
						If you have any questions about the kit, please contact
						cashflowcoachingkit@ato.gov.au
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
