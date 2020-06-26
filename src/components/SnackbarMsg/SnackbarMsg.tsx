import React, { ReactElement } from "react"
import Alert, { AlertProps } from "@material-ui/lab/Alert"
import { Snackbar, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

// #region Interface Definitions
/**
 * Data required for the snackbar
 * use this interface when defining the state
 *
 * @export
 * @interface SnackbarMsgData
 */
export interface SnackbarMsgData {
	open: boolean
	msg: string
	severity?: AlertProps["severity"]
}

/**
 * Props required to be passed to the component
 *
 * @export
 * @interface SnackbarMsgProps
 * @extends {SnackbarMsgData}
 */
export interface SnackbarMsgProps extends SnackbarMsgData {
	onClose: (
		event: React.SyntheticEvent | React.MouseEvent,
		reason?: string
	) => void
}
// #endregion

/**
 * Snackbar abstraction component, use this for a consistent
 * way to show messages to the user
 *
 * The component who uses this component will need to handle the
 * state of this component and pass down the props.
 *
 * See the README
 *
 * @export
 * @param {SnackbarMsgProps} {
 * 	open,
 * 	msg,
 * 	onClose,
 * 	severity = "info",
 * }
 * @returns {ReactElement}
 */
export default function SnackbarMsg({
	open,
	msg,
	onClose,
	severity = "info",
}: SnackbarMsgProps): ReactElement {
	return (
		<Snackbar
			open={open}
			autoHideDuration={2000}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
			onClose={onClose}
		>
			<Alert
				severity={severity}
				variant="filled"
				action={
					<IconButton size="small" aria-label="close" color="inherit">
						<CloseIcon fontSize="small" />
					</IconButton>
				}
			>
				{msg}
			</Alert>
		</Snackbar>
	)
}
