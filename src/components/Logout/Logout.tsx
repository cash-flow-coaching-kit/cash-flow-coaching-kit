import React, { ReactElement, useState } from "react"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
} from "@material-ui/core"
import { useSharedNavStyles } from "../Navbar/_config/style"

export default function Logout(): ReactElement {
	const sharedStyle = useSharedNavStyles()
	const [open, setOpen] = useState(false)

	const handleOpen = (): void => setOpen(true)
	const handleClose = (): void => setOpen(false)

	return (
		<>
			<Button
				className={sharedStyle.button}
				color="inherit"
				startIcon={<PowerSettingsNewIcon />}
				onClick={handleOpen}
			>
				Logout
			</Button>
			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
				<DialogTitle>Are you sure you want to logout?</DialogTitle>
				<DialogContent>
					<DialogContentText>Hello</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						onClick={handleClose}
						color="primary"
						variant="contained"
						autoFocus
					>
						Logout
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}
