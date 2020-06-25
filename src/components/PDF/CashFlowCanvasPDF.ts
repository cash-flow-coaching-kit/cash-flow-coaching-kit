import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import { green } from "@material-ui/core/colors"
import { format } from "date-fns"
import {
	frameContent,
	basicTable,
	pageDefaultSettings,
	pageHeading,
	pagePadding,
} from "./PDFLib"
import { BaseCFCStruct, CashFlow } from "../../data/_config/shape"
import {
	calcCashFlowGST,
	calcCashFlowTotal,
	calcTotalCashOut,
} from "../../state/CFC/accumulators"
import { calculateInitial } from "../Forms/CFC"
import { canvasDisplayTitle } from "../CFC/__config/utilities"
import upperFirst from "../../util/strings/upperCaseFirst"

pdfMake.vfs = pdfFonts.pdfMake.vfs

const formatDollars = (value: number) => `$${value.toString()}`

const openingBalanceSection = (openingBalance: number): any => {
	return frameContent(
		basicTable([
			[
				"Opening Balance",
				{ text: formatDollars(openingBalance), style: ["rightAlign"] },
			],
		])
	)
}

const cashInSection = (cashInItems: CashFlow[], cashInTotal: number): any => {
	return frameContent([
		{
			text: "Cash IN",
			bold: true,
		},
		basicTable([
			...cashInItems.map((line) => [
				line.description,
				{ text: formatDollars(line.amount), style: ["rightAlign"] },
			]),
			[
				"Total (Exc GST)",
				{
					text: formatDollars(cashInTotal),
					style: ["rightAlign"],
				},
			],
		]),
	])
}

const gstOnSalesSection = (gstOnSales: number): any => {
	return frameContent(
		basicTable(
			[
				[
					"GST on Sales",
					{ text: formatDollars(gstOnSales), style: ["rightAlign"] },
				],
			],
			["yellowBlock"]
		)
	)
}

const cashOutSection = (
	cashOutItems: CashFlow[],
	cashOutTotal: number
): any => {
	return frameContent([
		{ text: "Cash OUT", bold: true },
		basicTable([
			...cashOutItems.map((line) => [
				line.description,
				{ text: formatDollars(line.amount), style: ["rightAlign"] },
			]),
			[
				"Total (Exc GST)",
				{
					text: formatDollars(cashOutTotal),
					style: ["rightAlign"],
				},
			],
		]),
	])
}

const gstOnPurchasesSection = (
	gstOnPurchases: number,
	paygWithholding: number,
	superAmount: number
): any => {
	return frameContent(
		basicTable(
			[
				[
					"GST on Purchases",
					{ text: formatDollars(gstOnPurchases), style: ["rightAlign"] },
				],
				[
					"PAYG Withholding",
					{ text: formatDollars(paygWithholding), style: ["rightAlign"] },
				],
				["Super", { text: formatDollars(superAmount), style: ["rightAlign"] }],
			],
			["yellowBlock"]
		)
	)
}

const cashSurplusSection = (cashSurplus: number): any => {
	return frameContent(
		basicTable([
			[
				"Cash Surplus",
				{ text: formatDollars(cashSurplus), style: ["rightAlign"] },
			],
		])
	)
}

const incomeSection = (incomeTax: number): any => {
	return frameContent(
		basicTable(
			[
				[
					"Income/Company Tax",
					// TODO: Needs to use the new calculations in feature/122 branch
					{ text: formatDollars(incomeTax), style: ["rightAlign"] },
				],
			],
			["yellowBlock"]
		)
	)
}

const availableToSpendSection = (availableToSpend: number): any => {
	return frameContent(
		basicTable([
			[
				"Available to spend",
				{ text: formatDollars(availableToSpend), style: ["rightAlign"] },
			],
		])
	)
}

const closingCashBalanceSection = (
	cashToOwner: number,
	closingBalance: number
): any => {
	return frameContent([
		{ text: "Your Closing Cash Balance", bold: true },
		basicTable([
			[
				"Cash to owner",
				{ text: formatDollars(cashToOwner), style: ["rightAlign"] },
			],
			[
				"Closing balance",
				{ text: formatDollars(closingBalance), style: ["rightAlign"] },
			],
		]),
	])
}

const yourNetAssetPositionSection = (
	stock: number,
	creditors: number,
	debtors: number,
	assets: number,
	loans: number,
	totalNetAssets: number
): any => {
	return frameContent([
		{ text: "Your net asset position", bold: true },
		basicTable([
			["Stocks", { text: formatDollars(stock), style: ["rightAlign"] }],
			["Creditors", { text: formatDollars(creditors), style: ["rightAlign"] }],
			["Debtors", { text: formatDollars(debtors), style: ["rightAlign"] }],
			["Assets", { text: formatDollars(assets), style: ["rightAlign"] }],
			["Loans", { text: formatDollars(loans), style: ["rightAlign"] }],
			[
				{ text: "Total net assets", bold: true },
				{ text: formatDollars(totalNetAssets), style: ["rightAlign"] },
			],
		]),
	])
}

export default async (title: string, values: BaseCFCStruct) => {
	const {
		canvasTitle,
		openingBalance,
		cashInItems,
		cashOutItems,
		paygWithholding,
		superAmount,
		incomeTax,
		cashToOwner,
		stock,
		creditors,
		debtors,
		assets,
		loans,
	} = values

	const cashInTotal = calcCashFlowTotal(cashInItems)
	const cashInGST = calcCashFlowGST(cashInItems)
	const cashOutTotal = calcTotalCashOut(values)
	const cashOutGST = calcCashFlowGST(cashOutItems)

	const calculated = calculateInitial(values)
	const {
		cashSurplus,
		availableToSpend,
		closingBalance,
		totalNetAssets,
	} = calculated

	const docDefinition: any = {
		...pageDefaultSettings(),

		content: [
			pageHeading(`${title} - CANVAS - ${canvasDisplayTitle(values)}`),
			pagePadding([
				frameContent({
					table: {
						widths: ["25%", "25%", "25%", "25%"],
						body: [
							[
								[
									{ text: "Canvas Type", bold: true },
									upperFirst(values.canvasType),
								],
								[
									{ text: "Time-frame", bold: true },
									upperFirst(values.canvasTimeFrame),
								],
								[
									{ text: "Start date", bold: true },
									`${format(values.canvasStartDate, "dd/MM/yyyy")}`,
								],
								[
									{ text: "End date", bold: true },
									`${format(values.canvasEndDate, "dd/MM/yyyy")}`,
								],
							],
						],
					},
					layout: "noBorders",
				}),
				" ",
				openingBalanceSection(openingBalance),

				{
					table: {
						widths: ["60%", "*"],
						body: [
							[
								cashInSection(cashInItems, cashInTotal),
								gstOnSalesSection(cashInGST),
							],
							[
								cashOutSection(cashOutItems, cashOutTotal),
								gstOnPurchasesSection(cashOutGST, paygWithholding, superAmount),
							],
							[cashSurplusSection(cashSurplus), incomeSection(incomeTax)],
							[availableToSpendSection(availableToSpend), {}],
							[closingCashBalanceSection(cashToOwner, closingBalance), {}],
							[
								yourNetAssetPositionSection(
									stock,
									creditors,
									debtors,
									assets,
									loans,
									totalNetAssets
								),
								{},
							],
						],
					},
					layout: "noBorders",
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
			rightAlign: {
				// fillColor: "#CCCCCC",
				alignment: "right",
			},
			yellowBlock: {
				fillColor: "yellow",
			},
		},

		defaultStyle: {
			fontSize: 15,
			bold: false,
		},
	}
	return pdfMake.createPdf(docDefinition)
}
