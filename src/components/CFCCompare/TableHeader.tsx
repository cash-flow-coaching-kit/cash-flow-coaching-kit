import React, { ReactElement } from "react"
import { TableHead, TableRow, TableCell } from "@material-ui/core"

/**
 * Component used as the table header
 *
 * @export
 * @returns {ReactElement}
 */
export default function TableHeader(): ReactElement {
	return (
		<TableHead>
			<TableRow>
				<TableCell />
				<TableCell>Canvas 1</TableCell>
				<TableCell>Canvas 2</TableCell>
				<TableCell>$ Difference</TableCell>
				<TableCell>% Difference</TableCell>
			</TableRow>
		</TableHead>
	)
}
