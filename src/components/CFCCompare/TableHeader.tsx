import React, { ReactElement } from "react"
import { TableHead, TableRow, TableCell } from "@material-ui/core"
import { TableHeaderProps } from "./__config/shape"
import { canvasDisplayTitle } from "../CFC/__config/utilities"
import useStyles from "./__config/styles"

/**
 * Component used as the table header
 *
 * @export
 * @param {TableHeaderProps} {
 * 	selectedCanvases: [left, right],
 * }
 * @returns {ReactElement}
 */
export default React.memo(function TableHeader({
	selectedCanvases: [left, right],
}: TableHeaderProps): ReactElement {
	const cls = useStyles()

	return (
		<TableHead>
			<TableRow>
				<TableCell className={cls.cell1}>
					<span className="MuiTypography-srOnly">Cash category</span>
				</TableCell>
				<TableCell className={cls.cellCanvas} align="right">
					{canvasDisplayTitle(left)}
				</TableCell>
				<TableCell className={cls.cellCanvas} align="right">
					{canvasDisplayTitle(right)}
				</TableCell>
				<TableCell className={cls.cellDifference} align="right">
					$ Difference
				</TableCell>
				<TableCell className={cls.cellDifference} align="right">
					% Difference
				</TableCell>
			</TableRow>
		</TableHead>
	)
})
