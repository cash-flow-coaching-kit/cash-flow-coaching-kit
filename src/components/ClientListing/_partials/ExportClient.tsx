import React, { ReactElement, useCallback, useState } from "react"
import { Tooltip, IconButton, CircularProgress } from "@material-ui/core"
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

	const exportClient = useCallback(async () => {
		if (client !== -1) {
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
		<>
			<Tooltip title="Export data">
				<IconButton onClick={exportClient}>
					{processing ? <CircularProgress size={24} /> : <PublishIcon />}
				</IconButton>
			</Tooltip>
		</>
	)
}
