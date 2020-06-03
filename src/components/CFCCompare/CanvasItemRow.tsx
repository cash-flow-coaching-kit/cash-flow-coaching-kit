import React, { ReactElement } from "react"
import { TableCell, TableRow } from "@material-ui/core"
import { CanvasItemRowProps } from "./__config/shape"
import { calculateDifferencePer } from "./__config/utilities"
import { addDollarSign } from "../../util/money/formatting"

/**
 * Used to display the data related to a value for a field in the canvas
 *
 * @export
 * @param {CanvasItemRowProps} {
 * 	values: [val1, val2],
 * 	label,
 * }
 * @returns {ReactElement}
 */
export default function CanvasItemRow({
	values: [val1, val2],
	label,
}: CanvasItemRowProps): ReactElement {
	return (
		<TableRow>
			<TableCell component="th" scope="row">
				{label || ""}
			</TableCell>
			<TableCell>{val1}</TableCell>
			<TableCell>{val2}</TableCell>
			<TableCell>{addDollarSign(`${val1 - val2}`)}</TableCell>
			<TableCell>{calculateDifferencePer(val1, val2)}</TableCell>
		</TableRow>
	)
}
