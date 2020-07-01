import React, { ReactElement, useCallback, useState } from "react"
import {
	Button,
	Box,
	makeStyles,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Typography,
} from "@material-ui/core"
import PublishIcon from "@material-ui/icons/Publish"
import { ClientId } from "../../../data/_config/shape"
import { SnackbarMsgData } from "../../SnackbarMsg/SnackbarMsg"
import ExportClient from "../../../modules/export-client"

type ExportClientProps = {
	client: ClientId
	showSnackbar: (
		msg: SnackbarMsgData["msg"],
		severity: SnackbarMsgData["severity"]
	) => void
}

const useStyles = makeStyles((theme) => ({
	box: {
		display: "flex",
		alignItems: "center",
	},
	btn: {
		marginRight: theme.spacing(1),
		width: "100%",
	},
}))

/**
 * Component used to handle exporting a clients data
 *
 * @export
 * @param {ExportClientProps} {
 * 	client,
 * }
 * @returns {ReactElement}
 */
export default function ExportClientButton({
	client,
	showSnackbar,
}: ExportClientProps): ReactElement {
	const [processing, setProcessing] = useState(false)
	const [open, setOpen] = useState(false)
	const cls = useStyles()

	const exportClient = useCallback(async () => {
		if (client !== "") {
			try {
				setProcessing(true)
				await ExportClient(client)
				showSnackbar("Client data has been exported", "success")
			} catch (e) {
				showSnackbar(e.message, "error")
			} finally {
				setProcessing(false)
				setOpen(false)
			}
		}
	}, [client, setProcessing, showSnackbar, setOpen])

	const handleOpen = (): void => setOpen(true)
	const handleClose = (): void => setOpen(false)

	return (
		<Box className={cls.box}>
			<Button
				startIcon={<PublishIcon />}
				onClick={handleOpen}
				variant="outlined"
				disabled={processing}
				className={cls.btn}
			>
				Export data
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="export-client-data-dialog-title"
				aria-describedby="export-client-data-dialog-description"
			>
				<DialogTitle id="export-client-data-dialog-title">
					Export client data
				</DialogTitle>
				<DialogContent>
					<Typography id="export-client-data-dialog-description">
						Your file will save to your browsers automatic download location. It
						is saved as a .json file. Once downloaded you can move the file to
						any location on your computer.
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
					<Button
						onClick={exportClient}
						color="primary"
						autoFocus
						variant="contained"
					>
						Export data
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	)
}
