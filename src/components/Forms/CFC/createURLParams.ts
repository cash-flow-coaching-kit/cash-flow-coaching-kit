import { getTime } from "date-fns"
import { BaseCFCStruct, CFCPanelSlice } from "../../../data/_config/shape"

/**
 * Creates a search query to pass to the Canvas Edit page
 *
 * @export
 * @param {(BaseCFCStruct | CFCPanelSlice)} values
 * @param {boolean} useCustomTitle
 * @returns {string}
 */
export default function createURLParams(
	values: BaseCFCStruct | CFCPanelSlice,
	useCustomTitle: boolean
): string {
	const n = new URLSearchParams()
	n.append("title", values.canvasTitle)
	n.append("useCustom", useCustomTitle ? "1" : "0")
	n.append("type", values.canvasType)
	n.append("timeframe", values.canvasTimeFrame)
	n.append("startDate", getTime(values.canvasStartDate).toString())
	n.append("endDate", getTime(values.canvasEndDate).toString())

	return n.toString()
}
