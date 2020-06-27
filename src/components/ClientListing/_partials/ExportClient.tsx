import React, { ReactElement, useCallback, useState } from "react"
import { Tooltip, Button, Box, makeStyles } from "@material-ui/core"
import PublishIcon from "@material-ui/icons/Publish"
import InfoIcon from "@material-ui/icons/Info"
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
			}
		}
	}, [client, setProcessing, showSnackbar])

	return (
		<Box className={cls.box}>
			<Button
				startIcon={<PublishIcon />}
				onClick={exportClient}
				variant="outlined"
				disabled={processing}
				className={cls.btn}
			>
				Export data
			</Button>
			<Tooltip title="Your file will save to your browser's automatic download location.">
				<InfoIcon color="primary" />
			</Tooltip>
		</Box>
	)
}
