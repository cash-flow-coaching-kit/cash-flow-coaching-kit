import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import { green } from "@material-ui/core/colors"
import { toNumber } from "lodash"
import { CFCStruct } from "../../data/_config/shape"
import { pageDefaultSettings, pageHeading, pagePadding } from "./PDFLib"
import { canvasDisplayTitle } from "../CFC/__config/utilities"
import { addDollarSign, formatNumber } from "../../util/money/formatting"
import { calculateDifferencePer } from "../CFCCompare/__config/utilities"
import { calculateInitial } from "../Forms/CFC"
import { calcCashFlowTotal } from "../../state/CFC/accumulators"
// import arrayFillWith from "../../util/array/arrayFillWith"

pdfMake.vfs = pdfFonts.pdfMake.vfs

const rowValue = (values: [number, number], flip = false): any[] => {
	const [val1, val2] = values
	return [
		{ text: addDollarSign(formatNumber(`${val1}`)), alignment: "right" },
		{ text: addDollarSign(formatNumber(`${val2}`)), alignment: "right" },
		{ text: addDollarSign(formatNumber(`${val1 - val2}`)), alignment: "right" },
		{ text: calculateDifferencePer(val1, val2, flip), alignment: "right" },
	]
}

// function renderRepeaterFields(val1: CashFlow[], val2: CashFlow[]): string[][] {
// 	const len = val1.length > val2.length ? val1.length : val2.length
// 	const arr = arrayFillWith(len, 0)
// 	return arr.map((item, idx) => [
// 		"",
// 		...rowValue([val1[idx]?.amount || 0, val2[idx]?.amount || 0]),
// 	])
// }

export default async (
	leftSelected: CFCStruct,
	rightSelected: CFCStruct
): Promise<pdfMake.TCreatedPdf> => {
	const leftCalc = calculateInitial(leftSelected)
	const rightCalc = calculateInitial(rightSelected)

	const docDefinition: any = {
		...pageDefaultSettings(),
		content: [
			pageHeading("Canvas Comparison"),
			pagePadding([
				{
					table: {
						width: ["*", "*", "*", "*", "*"],
						body: [
							[
								"",
								{ text: canvasDisplayTitle(leftSelected), bold: true },
								{ text: canvasDisplayTitle(rightSelected), bold: true },
								{ text: "$ Difference", bold: true },
								{ text: "% Difference", bold: true },
							],
							[
								{ text: "Opening balance", bold: true },
								...rowValue([
									leftSelected.openingBalance,
									rightSelected.openingBalance,
								]),
							],
							[{ text: "Cash In", colSpan: 5, bold: true }, "", "", "", ""],
							// ...renderRepeaterFields(
							// 	leftSelected.cashInItems,
							// 	rightSelected.cashInItems
							// ),
							[
								"GST on sales",
								...rowValue([leftCalc.gstOnSales, rightCalc.gstOnSales]),
							],
							[
								{ text: "Total", bold: true },
								...rowValue([
									calcCashFlowTotal(leftSelected.cashInItems, 0),
									calcCashFlowTotal(rightSelected.cashInItems, 0),
								]),
							],
							[
								{ text: "(exc GST)", bold: true },
								...rowValue([
									calcCashFlowTotal(
										leftSelected.cashInItems,
										leftCalc.gstOnSales
									),
									calcCashFlowTotal(
										rightSelected.cashInItems,
										rightCalc.gstOnSales
									),
								]),
							],
							[{ text: "Cash Out", colSpan: 5, bold: true }, "", "", "", ""],
							// ...renderRepeaterFields(
							// 	leftSelected.cashOutItems,
							// 	rightSelected.cashOutItems
							// ),
							[
								"PAYG Withholding",
								...rowValue([
									leftSelected.paygWithholding,
									rightSelected.paygWithholding,
								]),
							],
							[
								"Super",
								...rowValue([
									leftSelected.superAmount,
									rightSelected.superAmount,
								]),
							],
							[
								"GST on Purchases",
								...rowValue([
									leftCalc.gstOnPurchases,
									rightCalc.gstOnPurchases,
								]),
							],
							[
								{ text: "Total Cash Out", bold: true },
								...rowValue([
									calcCashFlowTotal(leftSelected.cashOutItems, 0),
									calcCashFlowTotal(rightSelected.cashOutItems, 0),
								]),
							],
							[
								{ text: "(exc GST, PAYG W & Super)", bold: true },
								...rowValue([
									calcCashFlowTotal(
										leftSelected.cashOutItems,
										leftCalc.gstOnPurchases
									) +
										toNumber(leftSelected.superAmount) +
										toNumber(leftSelected.paygWithholding),
									calcCashFlowTotal(
										rightSelected.cashOutItems,
										rightCalc.gstOnPurchases
									) +
										toNumber(rightSelected.superAmount) +
										toNumber(rightSelected.paygWithholding),
								]),
							],
							[
								{ text: "Cash Surplus", bold: true },
								...rowValue([leftCalc.cashSurplus, rightCalc.cashSurplus]),
							],
							[
								"Income/Company Tax",
								...rowValue([
									leftCalc.incomeTaxPercentage,
									rightCalc.incomeTaxPercentage,
								]),
							],
							[
								{ text: "Available to spend", bold: true },
								...rowValue([
									leftCalc.availableToSpend,
									rightCalc.availableToSpend,
								]),
							],
							[
								"Cash to owner",
								...rowValue([
									leftSelected.cashToOwner,
									rightSelected.cashToOwner,
								]),
							],
							[
								{ text: "Closing balance", bold: true },
								...rowValue([
									leftCalc.closingBalance,
									rightCalc.closingBalance,
								]),
							],
							["Stock", ...rowValue([leftSelected.stock, rightSelected.stock])],
							[
								"Debtors",
								...rowValue([leftSelected.debtors, rightSelected.debtors]),
							],
							[
								"Assets",
								...rowValue([leftSelected.assets, rightSelected.assets]),
							],
							[
								"Creditors",
								...rowValue([leftSelected.creditors, rightSelected.creditors]),
							],
							["Loans", ...rowValue([leftSelected.loans, rightSelected.loans])],
							[
								{ text: "Net position", bold: true },
								...rowValue([
									leftCalc.totalNetAssets,
									rightCalc.totalNetAssets,
								]),
							],
						],
					},
				},
			]),
		],
		styles: {
			pageHeader: {
				fontSize: 20,
				bold: true,
				fillColor: green["800"],
				color: "white",
				alignment: "center",
			},
		},
		defaultStyles: {
			fontSize: 15,
			bold: false,
			color: "#000",
		},
	}

	return pdfMake.createPdf(docDefinition)
}
