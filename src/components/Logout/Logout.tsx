import React, { ReactElement, useState } from "react"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	makeStyles,
	Theme,
	createStyles,
	Backdrop,
	CircularProgress,
} from "@material-ui/core"
import { useSharedNavStyles } from "../Navbar/_config/style"
import ClientDB from "../../data/client/ClientDatabase"
import HealthCheckDB from "../../data/healthChecks/HealthCheckDatabase"
import ActionChecklistDB from "../../data/ActionChecklist/ActionChecklistDatabase"
import CFCDB from "../../data/CFC/CFCDatabase"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: "#fff",
		},
	})
)

export default function Logout(): ReactElement {
	const sharedStyle = useSharedNavStyles()
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const handleOpen = (): void => setOpen(true)
	const handleClose = (): void => setOpen(false)

	const exitApplication = async (): Promise<void> => {
		setLoading(true)
		ClientDB.close()
		HealthCheckDB.close()
		ActionChecklistDB.close()
		CFCDB.close()

		await ClientDB.delete()
		await HealthCheckDB.delete()
		await ActionChecklistDB.delete()
		await CFCDB.delete()

		window.location.replace("/")
	}

	return (
		<>
			<Button
				className={sharedStyle.button}
				color="inherit"
				startIcon={<PowerSettingsNewIcon />}
				onClick={handleOpen}
			>
				Exit
			</Button>
			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
				<DialogTitle>Are you sure you want to exit?</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Make sure you have saved all your data before you leave as all
						existing data will be deleted.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} disabled={loading}>
						Cancel
					</Button>
					<Button
						onClick={exitApplication}
						color="primary"
						variant="contained"
						autoFocus
						disabled={loading}
					>
						Exit
					</Button>
				</DialogActions>
				<Backdrop className={classes.backdrop} open={loading}>
					<CircularProgress color="inherit" />
				</Backdrop>
			</Dialog>
		</>
	)
}
