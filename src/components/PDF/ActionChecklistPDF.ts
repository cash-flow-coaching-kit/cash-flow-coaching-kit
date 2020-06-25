/* eslint-disable */
import pdfMake, { TCreatedPdf } from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
import { format } from "date-fns"
import { lightBlue } from "@material-ui/core/colors"
import {
	pageHeading,
	pagePadding,
	pageDefaultSettings,
	basicTable,
} from "./PDFLib"
import {
	ActionChecklistStruct,
	ActionChecklistNotesStruct,
} from "../../data/_config/shape"
import { actionTitleMapping } from "../ActionChecklist/ActionContainer/_config/data"
import { PossibleActionItems } from "../../state/action-checklist/shape"

pdfMake.vfs = pdfFonts.pdfMake.vfs

const itemsSection = (items: ActionChecklistStruct[]) => {
	if (items.length === 0) {
		return {
			text: "No action items",
			style: "noResult",
		}
	}

	return basicTable(
		items.map(({ description, reviewBy }) => [
			{
				text: description || "No description provided",
				style: description === "" ? "noResult" : "",
			},
			format(reviewBy, "dd/MM/yyyy"),
		])
	)
}

export default async (
	title: string,
	checklistCollection: ActionChecklistStruct[],
	notes: ActionChecklistNotesStruct[]
): Promise<TCreatedPdf> => {
	const docDefinition: any = {
		...pageDefaultSettings(),

		content: [
			pageHeading(`${title} - Action Checklist`),
			pagePadding([
				...(Object.keys(actionTitleMapping) as PossibleActionItems[]).map(
					(value, idx) => {
						const arr = []
						const items = checklistCollection.filter(
							(i) => i.actionContainer === value
						)
						const note = notes.filter((i) => i.actionContainer === value)
						if (items.length === 0) return ""

						if (idx !== 0) arr.push(" ")
						arr.push({ text: actionTitleMapping[value], style: "heading" })
						arr.push(itemsSection(items))
						if (note.length > 0 && note[0].notes !== "") {
							arr.push(" ")
							arr.push({ text: "Notes", style: "subHeading" })
							arr.push(note[0].notes)
						}
						return arr
					}
				),
			]),
		],

		styles: {
			pageHeader: {
				fontSize: 20,
				bold: true,
				fillColor: lightBlue["800"],
				color: "white",
				alignment: "center",
			},
			heading: {
				fontSize: 16,
				bold: true,
			},
			subHeading: {
				fontSize: 14,
				bold: true,
			},
			rightAlign: {
				alignment: "right",
			},
			noResult: {
				italics: true,
				color: "#333",
			},
		},

		defaultStyle: {
			fontSize: 15,
			bold: false,
		},
	}
	return pdfMake.createPdf(docDefinition)
}
