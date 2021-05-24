import React, { ReactElement, useMemo } from "react"
import {
	TableContainer,
	Table,
	TableBody,
	TableCell,
	TableRow,
} from "@material-ui/core"
import { toNumber } from "lodash"
import TableHeader from "./TableHeader"
import CanvasItemRow from "./CanvasItemRow"
import { CompareTableProps } from "./__config/shape"
import { calculateInitial } from "../Forms/CFC"
import { calcCashFlowTotal } from "../../state/CFC/accumulators"
import useStyles from "./__config/styles"

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
	const cls = useStyles()

	const leftCalculated = useMemo(() => {
		return calculateInitial(selectedCanvases[0])
	}, [selectedCanvases])

	const rightCalculated = useMemo(() => {
		return calculateInitial(selectedCanvases[1])
	}, [selectedCanvases])

	/**
	 * Renders the repeater form values
	 *
	 * @param {CashFlow[]} val1
	 * @param {CashFlow[]} val2
	 * @returns {ReactElement[]}
	 */
	// function renderRepeaterFields(
	// 	val1: CashFlow[],
	// 	val2: CashFlow[]
	// ): ReactElement[] {
	// 	const len = val1.length > val2.length ? val1.length : val2.length
	// 	const arr = arrayFillWith(len, 0)
	// 	return arr.map((item, idx) => (
	// 		<CanvasItemRow
	// 			key={val1[idx]?.id || val2[idx]?.id || newTimestamp()}
	// 			values={[val1[idx]?.amount || 0, val2[idx]?.amount || 0]}
	// 			border={idx >= len - 1}
	// 		/>
	// 	))
	// }

	return (
		<TableContainer>
			<Table className={cls.table}>
				<TableHeader selectedCanvases={selectedCanvases} />
				<TableBody>
					<CanvasItemRow
						bold
						label="Opening Balance"
						values={[
							selectedCanvases[0].openingBalance,
							selectedCanvases[1].openingBalance,
						]}
					/>
					<TableRow>
						<TableCell
							colSpan={5}
							variant="head"
							className={cls.noBorderBottom}
						>
							Cash IN
						</TableCell>
					</TableRow>
					{/* {renderRepeaterFields(
						selectedCanvases[0].cashInItems,
						selectedCanvases[1].cashInItems
					)} */}
					<CanvasItemRow
						label="GST on sales"
						values={[leftCalculated.gstOnSales, rightCalculated.gstOnSales]}
					/>
					<CanvasItemRow
						bold
						label="Total Cash In"
						values={[
							calcCashFlowTotal(selectedCanvases[0].cashInItems, 0),
							calcCashFlowTotal(selectedCanvases[1].cashInItems, 0),
						]}
					/>
					<CanvasItemRow
						bold
						label="(exc GST)"
						values={[
							calcCashFlowTotal(
								selectedCanvases[0].cashInItems,
								leftCalculated.gstOnSales
							),
							calcCashFlowTotal(
								selectedCanvases[1].cashInItems,
								rightCalculated.gstOnSales
							),
						]}
					/>
					<TableRow>
						<TableCell
							colSpan={5}
							variant="head"
							className={cls.noBorderBottom}
						>
							Cash OUT
						</TableCell>
					</TableRow>
					{/* {renderRepeaterFields(
						selectedCanvases[0].cashOutItems,
						selectedCanvases[1].cashOutItems
					)} */}
					<CanvasItemRow
						label="PAYG Withholding"
						values={[
							selectedCanvases[0].paygWithholding,
							selectedCanvases[1].paygWithholding,
						]}
					/>
					<CanvasItemRow
						label="Super"
						values={[
							selectedCanvases[0].superAmount,
							selectedCanvases[1].superAmount,
						]}
					/>
					<CanvasItemRow
						label="GST on Purchases"
						values={[
							leftCalculated.gstOnPurchases,
							rightCalculated.gstOnPurchases,
						]}
					/>
					<CanvasItemRow
						bold
						label="Total Cash Out"
						values={[
							calcCashFlowTotal(selectedCanvases[0].cashOutItems, 0),
							calcCashFlowTotal(selectedCanvases[1].cashOutItems, 0),
						]}
					/>
					<CanvasItemRow
						bold
						label="(exc GST, PAYG W & Super)"
						values={[
							calcCashFlowTotal(
								selectedCanvases[0].cashOutItems,
								leftCalculated.gstOnPurchases
							) +
								toNumber(selectedCanvases[0].superAmount) +
								toNumber(selectedCanvases[0].paygWithholding),
							calcCashFlowTotal(
								selectedCanvases[1].cashOutItems,
								rightCalculated.gstOnPurchases
							) +
								toNumber(selectedCanvases[1].superAmount) +
								toNumber(selectedCanvases[1].paygWithholding),
						]}
					/>
					<CanvasItemRow
						bold
						label="Cash Surplus"
						values={[leftCalculated.cashSurplus, rightCalculated.cashSurplus]}
					/>
					<CanvasItemRow
						label="Income/Company Tax"
						values={[
							leftCalculated.incomeTaxPercentage,
							rightCalculated.incomeTaxPercentage,
						]}
					/>
					<CanvasItemRow
						bold
						label="Available to spend"
						values={[
							leftCalculated.availableToSpend,
							rightCalculated.availableToSpend,
						]}
					/>
					<CanvasItemRow
						label="Cash to Owner"
						values={[
							selectedCanvases[0].cashToOwner,
							selectedCanvases[1].cashToOwner,
						]}
					/>
					<CanvasItemRow
						bold
						label="Closing balance"
						values={[
							leftCalculated.closingBalance,
							rightCalculated.closingBalance,
						]}
					/>
					<CanvasItemRow
						label="Stock"
						values={[selectedCanvases[0].stock, selectedCanvases[1].stock]}
					/>
					<CanvasItemRow
						label="Debtors"
						values={[selectedCanvases[0].debtors, selectedCanvases[1].debtors]}
					/>
					<CanvasItemRow
						label="Assets"
						values={[selectedCanvases[0].assets, selectedCanvases[1].assets]}
					/>
					<CanvasItemRow
						label="Creditors"
						values={[
							selectedCanvases[0].creditors,
							selectedCanvases[1].creditors,
						]}
					/>
					<CanvasItemRow
						label="Loans"
						values={[selectedCanvases[0].loans, selectedCanvases[1].loans]}
					/>
					<CanvasItemRow
						bold
						label="Net Position"
						values={[
							leftCalculated.totalNetAssets,
							rightCalculated.totalNetAssets,
						]}
					/>
				</TableBody>
			</Table>
		</TableContainer>
	)
}
