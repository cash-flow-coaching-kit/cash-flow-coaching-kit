import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import {
	pageDefaultSettings,
	pageHeading,
	pagePadding,
	addPadding,
} from "./PDFLib"

pdfMake.vfs = pdfFonts.pdfMake.vfs

export interface HealthCheckQuestion {
	question: string
	answer: string
	text: string
}

export interface HealthCheckQuestionSet {
	[key: number]: HealthCheckQuestion // 0..9
}

const questionElementTop = ({
	question,
	answer,
	text,
}: HealthCheckQuestion) => {
	return addPadding([
		{ text: question, style: "question" },
		" ",
		{ text, style: answer },
	])
}

const questionElementBottom = ({
	question,
	answer,
	text,
}: HealthCheckQuestion) => {
	return [
		{
			table: {
				widths: ["*"], // to make it full length
				heights: [125], // set the height for each block
				body: [
					[
						addPadding([
							{ text: question, style: "question" },
							" ",
							{ text, style: answer },
						]),
					],
				],
			},
		},
		" ",
	]
}

export interface HealthCheckParams {
	title: string
	answers: {
		[idx: string]: string
	}
}

export default async (title: string, answers: HealthCheckQuestionSet) => {
	const docDefinition: any = {
		...pageDefaultSettings(),

		content: [
			pageHeading(`${title} - Health Check`),
			pagePadding([
				{
					style: "tableCell",
					table: {
						widths: ["*", "*"],
						body: [
							[
								{
									text: "FOUR KEY QUESTIONS",
									style: "tableHeading",
									colSpan: 2,
								},
								{},
							],
							[questionElementTop(answers[0]), questionElementTop(answers[1])],
							[questionElementTop(answers[2]), questionElementTop(answers[3])],
						],
					},
				},

				" ",

				{
					table: {
						widths: ["*", 20, "*"],
						body: [
							[
								questionElementBottom(answers[4]),
								{},
								questionElementBottom(answers[5]),
							],

							[
								questionElementBottom(answers[6]),
								{},
								questionElementBottom(answers[7]),
							],

							[
								questionElementBottom(answers[8]),
								{},
								questionElementBottom(answers[9]),
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
				fillColor: "#9C27B0",
				color: "white",
			},
			tableHeading: {
				fillColor: "#cccccc",
				alignment: "center",
			},
			question: {},
			positive: {
				fontSize: 18,
				color: "green",
				bold: true,
			},
			negative: {
				fontSize: 18,
				color: "red",
				bold: true,
			},
			neutral: {
				fontSize: 18,
				color: "orange",
				bold: true,
			},
		},

		defaultStyle: {
			fontSize: 15,
			bold: false,
		},
	}
	return pdfMake.createPdf(docDefinition)
}
