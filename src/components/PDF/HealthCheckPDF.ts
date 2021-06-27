import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import { purple, grey } from "@material-ui/core/colors"
import {
	pageDefaultSettings,
	pageHeading,
	pagePadding,
	addPadding,
} from "./PDFLib"
import { answerTheming } from "../HealthCheck/_config/data"

pdfMake.vfs = pdfFonts.pdfMake.vfs // eslint-disable-line fp/no-mutation

export interface HealthCheckQuestion {
	question: string
	answer: string
	text: string
}

export interface HealthCheckQuestionSet {
	[key: number]: HealthCheckQuestion // 0..9
}

const questionElementTop = ({ question, answer, text }: HealthCheckQuestion) =>
	addPadding([
		{ text: question, style: "question" },
		" ",
		{ text, style: answer },
	])

export interface HealthCheckParams {
	title: string
	answers: {
		[idx: string]: string
	}
}

export default async (title: string, answers: HealthCheckQuestionSet) => {
	// eslint-disable-next-line
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
									text: "Four Key Questions",
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
					style: "tableCell",
					table: {
						widths: ["*", "*"],
						body: [
							[questionElementTop(answers[4]), questionElementTop(answers[5])],

							[questionElementTop(answers[6]), questionElementTop(answers[7])],

							[questionElementTop(answers[8]), questionElementTop(answers[9])],
						],
					},
				},
			]),
		],

		styles: {
			pageHeader: {
				fontSize: 20,
				bold: true,
				fillColor: purple["500"],
				color: "white",
				alignment: "center",
			},
			tableHeading: {
				fillColor: grey["200"],
				alignment: "center",
			},
			question: {},
			positive: {
				fontSize: 16,
				color: answerTheming[0].color,
				bold: true,
			},
			negative: {
				fontSize: 16,
				color: answerTheming[1].color,
				bold: true,
			},
			neutral: {
				fontSize: 16,
				color: answerTheming[2].color,
				bold: true,
			},
		},

		defaultStyle: {
			fontSize: 15,
			bold: false,
			color: "#000",
		},
	}
	return pdfMake.createPdf(docDefinition)
}
