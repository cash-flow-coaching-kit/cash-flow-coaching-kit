import React, { ReactElement, useState } from "react"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Typography,
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
					<DialogContentText
						id="help-dialog-description"
						className="content-area"
					>
						<Typography>
							For help throughout Cash Flow Coaching Kit, see ‘Tips’ on each
							page.{" "}
						</Typography>
						<br />
						<Typography>
							If you have any feedback or questions,{" "}
							<a href={`mailto:${process.env.REACT_APP_SUPPORT_EMAIL || ""}`}>
								contact us
							</a>{" "}
							({process.env.REACT_APP_SUPPORT_EMAIL || ""})
						</Typography>
						<br />
						<Typography>
							We typically respond within a day, however more complex
							submissions may take up to a week.
						</Typography>
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
