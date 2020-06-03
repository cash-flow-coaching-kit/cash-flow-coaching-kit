import React, { ReactElement } from "react"
import { TableContainer, Table, TableBody } from "@material-ui/core"
import TableHeader from "./TableHeader"
import CanvasItemRow from "./CanvasItemRow"

/**
 * The component used to display the data in a table format
 *
 * @export
 * @returns {ReactElement}
 */
export default function CompareTable(): ReactElement {
	return (
		<TableContainer>
			<Table>
				<TableHeader />
				<TableBody>
					<CanvasItemRow />
				</TableBody>
			</Table>
		</TableContainer>
	)
}
