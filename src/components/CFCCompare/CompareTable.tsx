import React, { ReactElement } from "react"
import { TableContainer, Table, TableBody } from "@material-ui/core"
import TableHeader from "./TableHeader"
import CanvasItemRow from "./CanvasItemRow"
import { CompareTableProps } from "./__config/shape"

/**
 * The component used to display the data in a table format
 *
 * @export
 * @param {CompareTableProps} {
 * 	selectedCanvases,
 * }
 * @returns {ReactElement}
 */
export default function CompareTable({
	selectedCanvases,
}: CompareTableProps): ReactElement {
	return (
		<TableContainer>
			<Table>
				<TableHeader selectedCanvases={selectedCanvases} />
				<TableBody>
					<CanvasItemRow />
				</TableBody>
			</Table>
		</TableContainer>
	)
}
