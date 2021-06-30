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
	calcCashFlowTotal,
	calcTotalCashOut,
	calcIncomeTaxPer,
} from "../../state/CFC/accumulators"
import { calculateInitial } from "../Forms/CFC"
import { canvasDisplayTitle } from "../CFC/__config/utilities"
import upperFirst from "../../util/strings/upperCaseFirst"
import { addDollarSign, formatNumber } from "../../util/money/formatting"

pdfMake.vfs = pdfFonts.pdfMake.vfs // eslint-disable-line

const formatDollars = (value: number) => addDollarSign(formatNumber(`${value}`))

const openingBalanceSection = (
	openingBalance: number
): any => // eslint-disable-line
	frameContent(
		basicTable([
			[
				"Opening Balance",
				{ text: formatDollars(openingBalance), style: ["rightAlign"] },
			],
		])
	)

const cashInSection = (
	cashInItems: CashFlow[],
	cashInTotal: number
): any => // eslint-disable-line
	frameContent([
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

const gstOnSalesSection = (
	gstOnSales: number
): any => // eslint-disable-line
	frameContent(
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

const cashOutSection = (
	cashOutItems: CashFlow[],
	cashOutTotal: number
): any => // eslint-disable-line
	frameContent([
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

const gstOnPurchasesSection = (
	gstOnPurchases: number,
	paygWithholding: number,
	superAmount: number
): any => // eslint-disable-line
	frameContent(
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

const cashSurplusSection = (
	cashSurplus: number
): any => // eslint-disable-line
	frameContent(
		basicTable([
			[
				"Cash Surplus",
				{ text: formatDollars(cashSurplus), style: ["rightAlign"] },
			],
		])
	)

const incomeSection = (
	values: BaseCFCStruct
): any => // eslint-disable-line
	frameContent(
		basicTable(
			[
				[
					"Income/Company Tax",
					// TODO: Needs to use the new calculations in feature/122 branch
					{
						text: formatDollars(calcIncomeTaxPer(values)),
						style: ["rightAlign"],
					},
				],
			],
			["yellowBlock"]
		)
	)

const availableToSpendSection = (
	availableToSpend: number
): any => // eslint-disable-line
	frameContent(
		basicTable([
			[
				"Available to spend",
				{ text: formatDollars(availableToSpend), style: ["rightAlign"] },
			],
		])
	)

const closingCashBalanceSection = (
	cashToOwner: number,
	closingBalance: number
): any => // eslint-disable-line
	frameContent([
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

const question2Section = (value: number) =>
	frameContent(
		basicTable(
			[
				[
					"Have you put enough money aside to meet your regular financial commitments?",
					{ text: formatDollars(value), style: ["rightAlign"] },
				],
			],
			["yellowBlock"]
		)
	)

const yourNetAssetPositionSection = (
	stock: number,
	creditors: number,
	debtors: number,
	assets: number,
	loans: number,
	totalNetAssets: number
): any => // eslint-disable-line
	frameContent([
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

export default async (
	title: string,
	values: BaseCFCStruct,
	questionValues: any // eslint-disable-line
) => {
	const {
		openingBalance,
		cashInItems,
		cashOutItems,
		paygWithholding,
		superAmount,
		cashToOwner,
		stock,
		creditors,
		debtors,
		assets,
		loans,
		gstOnPurchases: dbGSTOnPurchase,
		gstOnSales: dbGSTOnSales,
	} = values

	const cashInTotal = calcCashFlowTotal(cashInItems, dbGSTOnSales)
	const cashOutTotal = calcTotalCashOut(values, dbGSTOnPurchase)

	const calculated = calculateInitial(values)
	const {
		cashSurplus,
		availableToSpend,
		closingBalance,
		totalNetAssets,
		gstOnSales,
		gstOnPurchases,
	} = calculated

	// eslint-disable-next-line
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
						widths: ["55%", "*"],
						body: [
							[
								cashInSection(cashInItems, cashInTotal),
								gstOnSalesSection(gstOnSales),
							],
							[
								cashOutSection(cashOutItems, cashOutTotal),
								gstOnPurchasesSection(
									gstOnPurchases,
									paygWithholding,
									superAmount
								),
							],
							[cashSurplusSection(cashSurplus), incomeSection(values)],
							[availableToSpendSection(availableToSpend), {}],
							[
								[
									closingCashBalanceSection(cashToOwner, closingBalance),
									{ text: " ", style: ["spacer"] },
									yourNetAssetPositionSection(
										stock,
										creditors,
										debtors,
										assets,
										loans,
										totalNetAssets
									),
								],
								question2Section(questionValues.two),
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
			spacer: {
				fontSize: 4, // cheat for a spacer between blocks
			},
		},

		defaultStyle: {
			fontSize: 13,
			bold: false,
		},
	}
	return pdfMake.createPdf(docDefinition)
}
