import React, { ReactElement } from "react"
import { TableCell, TableRow } from "@material-ui/core"
import { CanvasItemRowProps } from "./__config/shape"
import { calculateDifferencePer } from "./__config/utilities"
import { addDollarSign, formatNumber } from "../../util/money/formatting"
import useStyles from "./__config/styles"
import { numOrZero } from "../../util/reduce/math"

// export const flipValues = ["Debtors", "Stock", "Creditors"]

/**
 * Used to display the data related to a value for a field in the canvas
 *
 * @export
 * @param {CanvasItemRowProps} {
 * 	values: [val1, val2],
 * 	label,
 * 	bold
 * 	border
 * }
 * @returns {ReactElement}
 */
export default function CanvasItemRow({
	values: [val1, val2],
	label,
	bold = false,
	border = true,
	flip = false,
}: CanvasItemRowProps): ReactElement {
	const cls = useStyles()

	return (
		<TableRow className={cls.tableRow}>
			<TableCell
				className={border ? "" : cls.noBorderBottom}
				variant={bold ? "head" : "body"}
			>
				{label || ""}
			</TableCell>
			<TableCell
				className={border ? "" : cls.noBorderBottom}
				variant={bold ? "head" : "body"}
				align="right"
			>
				{addDollarSign(formatNumber(`${val1}`))}
			</TableCell>
			<TableCell
				className={border ? "" : cls.noBorderBottom}
				variant={bold ? "head" : "body"}
				align="right"
			>
				{addDollarSign(formatNumber(`${val2}`))}
			</TableCell>
			<TableCell
				className={border ? "" : cls.noBorderBottom}
				variant={bold ? "head" : "body"}
				align="right"
			>
				{addDollarSign(formatNumber(`${numOrZero(val1) - numOrZero(val2)}`))}
			</TableCell>
			<TableCell
				className={border ? "" : cls.noBorderBottom}
				variant={bold ? "head" : "body"}
				align="right"
			>
				{calculateDifferencePer(numOrZero(val1), numOrZero(val2), flip)}
			</TableCell>
		</TableRow>
	)
}
