import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
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
		"Cash OUT",
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
		"Your Closing Cash Balance",
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
		"Your net asset position",
		basicTable([
			["Stocks", { text: formatDollars(stock), style: ["rightAlign"] }],
			["Creditors", { text: formatDollars(creditors), style: ["rightAlign"] }],
			["Debtors", { text: formatDollars(debtors), style: ["rightAlign"] }],
			["Assets", { text: formatDollars(assets), style: ["rightAlign"] }],
			["Loans", { text: formatDollars(loans), style: ["rightAlign"] }],
			[
				"Total net assets",
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
			pageHeading(`${title} - CANVAS - ${canvasTitle}`),
			pagePadding([
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
				fontSize: 22,
				bold: true,
				fillColor: "#43A047",
				color: "white",
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
