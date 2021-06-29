import React, { ReactElement, useState } from "react"
import { useHistory } from "react-router-dom"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
import HomeIcon from "@material-ui/icons/Home"
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
import { removeStorageClient } from "../../util/localStorage/client"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: "#fff",
		},
	})
)

interface LogoutProps {
	color?: "inherit" | "primary" | "secondary" | "default"
	variant?: "text" | "outlined" | "contained"
}

// Set flag for web or desktop mode
const userAgent = navigator.userAgent.toLowerCase()
const isDesktop = userAgent.indexOf(" electron/") > -1
export default function Logout({
	color = "inherit",
	variant = "text",
}: LogoutProps): ReactElement {
	const sharedStyle = useSharedNavStyles()
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	const handleOpen = (): void => setOpen(true)
	const handleClose = (): void => setOpen(false)

	const exitApplication = async (): Promise<void> => {
		window.localStorage.removeItem("blockReload")
		setLoading(true)
		ClientDB.close()
		HealthCheckDB.close()
		ActionChecklistDB.close()
		CFCDB.close()

		await ClientDB.delete()
		await HealthCheckDB.delete()
		await ActionChecklistDB.delete()
		await CFCDB.delete()

		removeStorageClient()

		returnToHome()
	}

	const returnToHome = () => {
		history.push("/")
	}

	return (
		<>
			<Button
				className={sharedStyle.button}
				color={color}
				startIcon={isDesktop ? <HomeIcon /> : <PowerSettingsNewIcon />}
				onClick={handleOpen}
				variant={variant}
			>
				{isDesktop ? "Return To Home" : "Exit"}
			</Button>
			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
				<DialogTitle>
					Are you sure you want to {isDesktop ? " return to home" : " exit"}?
				</DialogTitle>
				<DialogContent>
					{isDesktop ? (
						<DialogContentText>
							Your data has been saved. We recommend you export your data to a
							safe location.
						</DialogContentText>
					) : (
						<DialogContentText>
							Make sure you have exported all your data before you leave as all
							existing data will be deleted.
						</DialogContentText>
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} disabled={loading}>
						Cancel
					</Button>
					<Button
						onClick={isDesktop ? returnToHome : exitApplication}
						color="primary"
						variant="contained"
						autoFocus
						disabled={loading}
					>
						{isDesktop ? "Return To Home" : "Exit"}
					</Button>
				</DialogActions>
				<Backdrop className={classes.backdrop} open={loading}>
					<CircularProgress color="inherit" />
				</Backdrop>
			</Dialog>
		</>
	)
}