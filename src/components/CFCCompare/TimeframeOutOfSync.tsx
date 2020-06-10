import React, { ReactElement } from "react"
import Alert from "@material-ui/lab/Alert"

/**
 * Message to display when comparing canvases are in different time frames
 *
 * @export
 * @returns {ReactElement}
 */
export default function TimeframeOutOfSync(): ReactElement {
	return (
		<Alert severity="warning">
			The two selected canvases are in different time-frames. The calculations
			will not be accurate.
		</Alert>
	)
}
