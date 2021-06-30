/**
 * Add Padding
 *
 * add white space around some content
 */

import { format } from "date-fns"

export const addPadding = (
	content: any, // eslint-disable-line
	margin = 10
) => ({
	margin,
	columns: [content],
})

/**
 * Page and margin defaults
 */

export const pageDefaultSettings = () => ({
	// watermark: {
	// 	text: "draft",
	// 	color: "blue",
	// 	opacity: 0.3,
	// 	bold: true,
	// 	italics: false,
	// },

	pageSize: "A4",
	pageMargins: [0, 0, 0, 25],
	footer: {
		columns: [
			{
				text: `Created on the ${format(new Date(), "do 'of' MMMM yyyy")}`,
				alignment: "center",
				fontSize: 12,
				color: "#333",
			},
		],
	},
})

/**
 * Frame Content
 *
 * Put content in a table with a border
 */

export const frameContent = (
	inner: any, // eslint-disable-line
	style: string[] = []
) => ({
	table: {
		widths: ["*"], // to make it full length
		body: [[inner]],
	},
	style,
})

/**
 * Table with Text in it for top of page
 * Requires a pageHeader style
 */

export const pageHeading = (text: string) => {
	const content = frameContent(addPadding(text), ["pageHeader"])

	return {
		...content,
		layout: "noBorders",
	}
}

/**
 * Add 20 points of padding on a full page
 */

// eslint-disable-next-line
export const pagePadding = (content: any) => addPadding(content, 20)

/**
 * Basic table of key .... value
 */

export const basicTable = (
	items: any, // eslint-disable-line
	style: string[] = []
) => ({
	table: {
		widths: ["70%", "*"],
		body: items,
	},
	style,
	layout: "noBorders",
})
