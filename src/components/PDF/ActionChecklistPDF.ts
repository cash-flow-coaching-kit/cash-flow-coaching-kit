import pdfMake, { TCreatedPdf } from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import { format } from "date-fns"
import {
	pageHeading,
	pagePadding,
	pageDefaultSettings,
	basicTable,
} from "./PDFLib"
import { ActionChecklistStruct } from "../../data/_config/shape"

pdfMake.vfs = pdfFonts.pdfMake.vfs

const itemsSection = (items: ActionChecklistStruct[]) => {
	return basicTable(
		items.map(({ description, reviewBy }) => [
			description,
			format(reviewBy, "dd/MM/yyyy"),
		])
	)
}

export default async (
	title: string,
	checklistCollection: ActionChecklistStruct[]
): Promise<TCreatedPdf> => {
	const docDefinition: any = {
		...pageDefaultSettings(),

		content: [
			pageHeading(`${title} - Action Checklist`),
			pagePadding([
				{ text: "Cash IN actions", style: "heading" },
				itemsSection(
					checklistCollection.filter(
						(i) => i.actionContainer === "cashInActions"
					)
				),
				" ",
				{ text: "Cash OUT actions", style: "heading" },
				itemsSection(
					checklistCollection.filter(
						(i) => i.actionContainer === "cashOutActions"
					)
				),
				" ",
				{ text: "Planning your business actions", style: "heading" },
				itemsSection(
					checklistCollection.filter(
						(i) => i.actionContainer === "planningBusiness"
					)
				),
			]),
		],

		styles: {
			pageHeader: {
				fontSize: 22,
				bold: true,
				fillColor: "#0091EA",
				color: "white",
			},
			heading: {
				fontSize: 18,
				bold: true,
			},
			rightAlign: {
				alignment: "right",
			},
		},

		defaultStyle: {
			fontSize: 15,
			bold: false,
		},
	}
	return pdfMake.createPdf(docDefinition)
}
