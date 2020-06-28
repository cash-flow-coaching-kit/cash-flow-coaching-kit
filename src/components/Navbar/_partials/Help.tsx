import React, { ReactElement, useState } from "react"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
} from "@material-ui/core"
import { useSharedNavStyles } from "../_config/style"

export default function Help(): ReactElement {
	const sharedStyle = useSharedNavStyles()
	const [open, setOpen] = useState(false)

	const handleClickOpen = (): void => setOpen(true)
	const handleClose = (): void => setOpen(false)

	return (
		<>
			<Button
				className={sharedStyle.button}
				color="inherit"
				startIcon={<HelpOutlineIcon />}
				onClick={handleClickOpen}
			>
				Help
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="help-dialog-title"
				aria-describedby="help-dialog-description"
			>
				<DialogTitle id="help-dialog-title">Help</DialogTitle>
				<DialogContent>
					<DialogContentText id="help-dialog-description">
						For help, feedback or questions, contact us.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" autoFocus>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}
