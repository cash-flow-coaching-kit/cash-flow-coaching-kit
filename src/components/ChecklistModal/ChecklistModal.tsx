import React, { ReactElement, useState } from "react"
import { Box, Button } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

import { ChecklistModalProps } from "./__config/shape"
import { Modal } from "./__partials"
import { SnackbarMsgData } from "../SnackbarMsg/SnackbarMsg"
import SnackbarMsg from "../SnackbarMsg"

/**
 * Modal used to add additional items to a checklist group
 *
 * @export
 * @param {ChecklistModalProps} {
 * 	container,
 * 	title,
 * 	subtitle,
 * }
 * @returns {ReactElement}
 */
export default function ChecklistModal({
	container,
	title,
	subtitle,
	children,
}: ChecklistModalProps): ReactElement {
	const [modalState, setModalState] = useState<boolean>(false)
	const [snackbar, setSnackbar] = useState<SnackbarMsgData>({
		open: false,
		msg: "",
	})

	// #region Snackbar methods
	function handleClose(event?: React.SyntheticEvent, reason?: string): void {
		if (reason === "clickaway") {
			return
		}

		setSnackbar({ ...snackbar, open: false })
	}

	function showSnackbar(
		msg: SnackbarMsgData["msg"],
		severity: SnackbarMsgData["severity"]
	): void {
		setSnackbar({
			open: true,
			msg,
			severity,
		})
	}
	// #endregion

	return (
		<>
			<Box>
				<Button
					variant="outlined"
					size="large"
					color="primary"
					startIcon={<AddIcon />}
					onClick={(): void => setModalState(true)}
				>
					Add to action checklist
				</Button>
				<Modal
					open={modalState}
					onClose={(): void => setModalState(false)}
					title={title}
					subtitle={subtitle}
					container={container}
					showSnackbar={showSnackbar}
				>
					{children}
				</Modal>
			</Box>

			{/* Message snackbar */}
			<SnackbarMsg
				open={snackbar.open}
				severity={snackbar.severity}
				onClose={handleClose}
				msg={snackbar.msg}
			/>
		</>
	)
}
