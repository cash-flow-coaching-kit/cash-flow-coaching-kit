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
						<Typography style={{ fontWeight: "bold" }}>
							Report a problem
						</Typography>
						<Typography>
							Please report technical problems at{" "}
							<a href={`mailto:${process.env.REACT_APP_SUPPORT_EMAIL || ""}`}>
								{process.env.REACT_APP_SUPPORT_EMAIL || ""}
							</a>
							.
						</Typography>
						<Typography style={{ marginTop: 6 }}>
							Our service standard for resolution is generally one business day.
						</Typography>
						<Typography style={{ fontWeight: "bold", marginTop: 12 }}>
							Help and tips
						</Typography>
						<Typography>
							Remember there are tips on each page to help tax professionals and
							business advisors use the Cash Flow Coaching Kit.
						</Typography>
						<Typography style={{ marginTop: 6 }}>
							If you are a small business please contact your tax professional
							or business advisor for support.
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
