import { isAfter } from "date-fns"
import { CFCStruct, ClientId, CFCId } from "../../../data/_config/shape"
import CFCUseCase from "../../../data/CFC/CFCLogic"
import { SelectFieldOptions } from "../../SelectField/SelectField"
import { canvasDisplayTitle } from "../../CFC/__config/utilities"
import { CanvasTuple } from "./shape"
import filterById from "../../../util/filters/ById"
import {
	toTwoDecimal,
	removeTrailingZeros,
} from "../../../util/money/formatting"
import concatStr from "../../../util/strings/concatStr"
import { pipe } from "../../../util/reduce/math"

type Client = ClientId | undefined

/**
 * Fetches the canvases for a specific client
 *
 * @param {Client} client
 * @returns {Promise<CFCStruct[]>}
 */
export async function getCanvasData(client: Client): Promise<CFCStruct[]> {
	if (!client) return []
	const data = await CFCUseCase.findByClient(client)
	return data
}

/**
 * Reduces a CFC object into options for the select field
 *
 * @returns {ReducerHOF<SelectFieldOptions, CFCStruct>}
 */
export function reduceToOptions(): ReducerHOF<SelectFieldOptions, CFCStruct> {
	return (acc, cur): SelectFieldOptions => {
		return acc.concat({
			value: cur.id || -1,
			label: canvasDisplayTitle(cur),
		})
	}
}

/**
 * Changes which canvases are selected for comparing
 *
 * @export
 * @param {CFCStruct[]} allCanvases
 * @param {CanvasTuple} selected
 * @param {number} idx
 * @param {CFCId} id
 * @returns {CanvasTuple}
 */
export function changeSelected(
	allCanvases: CFCStruct[],
	selected: CanvasTuple,
	idx: number,
	id: CFCId
): CanvasTuple {
	const newItem = allCanvases.filter(filterById(id))[0]
	// return if undefined
	if (!newItem) return selected

	if (idx === 0) {
		if (isAfter(selected[1].canvasStartDate, newItem.canvasStartDate)) {
			return [selected[1], newItem]
		}
		return [newItem, selected[1]]
	}

	if (isAfter(newItem.canvasStartDate, selected[0].canvasStartDate)) {
		return [newItem, selected[0]]
	}
	return [selected[0], newItem]
}

/**
 * Calculated the percentage difference of two fields
 *
 * @export
 * @param {number} val1
 * @param {number} val2
 * @returns {string}
 */
export function calculateDifferencePer(val1: number, val2: number): string {
	if (val2 === 0) return "N/A"
	const diff = ((val1 - val2) / val2) * 100

	return pipe(toTwoDecimal, removeTrailingZeros, concatStr("%"))(`${diff}`)
}
