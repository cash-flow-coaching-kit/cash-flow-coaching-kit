import React, { ReactElement } from "react"
import { TableCell, TableRow } from "@material-ui/core"

/**
 * Used to display the data related to a value for a field in the canvas
 *
 * @export
 * @returns {ReactElement}
 */
export default function CanvasItemRow(): ReactElement {
	return (
		<TableRow>
			<TableCell component="th" scope="row">
				Income/Company Tax
			</TableCell>
			<TableCell>0</TableCell>
			<TableCell>0</TableCell>
			<TableCell>0</TableCell>
			<TableCell>0</TableCell>
		</TableRow>
	)
}
