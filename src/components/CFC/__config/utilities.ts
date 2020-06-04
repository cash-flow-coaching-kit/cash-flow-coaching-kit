import { format, isValid, isSameDay } from "date-fns"
import { SelectFieldOptions } from "../../SelectField/SelectField"
import {
	CanvasType,
	CFCTimeFrame,
	CFCStruct,
	BaseCFCStruct,
	CFCPanelSlice,
} from "../../../data/_config/shape"
import upperFirst from "../../../util/strings/upperCaseFirst"
import { pipe } from "../../../util/reduce/math"
import concatStr from "../../../util/strings/concatStr"

type Opts = SelectFieldOptions

/**
 * Converts an array of strings into a array that can be used as options
 * for the `SelectField` component.
 *
 * Use this method with `reduce`
 *
 * ## Example
 * ```ts
 * const opts = ["a", "b", "c"].reduce(reduceToOptions, [])
 * ```
 *
 * @export
 * @param {Opts} acc
 * @param {string} cur
 * @returns {Opts}
 */
export function reduceToOptions(acc: Opts, cur: string): Opts {
	return acc.concat({ value: cur, label: upperFirst(cur) })
}

/**
 * Creates options for the `CanvasTypeSelect` component
 *
 * @export
 * @returns {Opts}
 */
export function canvasTypeOptions(): Opts {
	const x: CanvasType[] = ["review", "forecast", "plan", "track"]
	return x.reduce(reduceToOptions, [])
}

/**
 * Creates options for the `CanvasTimeFrameSelect` component
 *
 * @export
 * @returns {Opts}
 */
export function canvasTimeFrameOptions(): Opts {
	const x: CFCTimeFrame[] = [
		"weekly",
		"fortnightly",
		"monthly",
		"quaterly",
		"biannually",
		"yearly",
		"other",
	]
	return x.reduce(reduceToOptions, [])
}

/**
 * Generates the automated title for the canvas
 *
 * @export
 * @param {CanvasType} type
 * @param {CFCTimeFrame} timeframe
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {string}
 */
export function generateTitle(
	type: CanvasType,
	timeframe: CFCTimeFrame,
	startDate: Date,
	endDate: Date
): string {
	if (!isValid(startDate) || !isValid(endDate)) {
		return "Please provide a valid date"
	}

	return pipe(
		concatStr(upperFirst(`${timeframe} `)),
		concatStr(format(startDate, "dd/MM/yyyy")),
		concatStr(" to "),
		concatStr(format(endDate, "dd/MM/yyyy"))
	)(upperFirst(`${type} `))
}

/**
 * Gets the display title for a canvas
 *
 * @export
 * @param {(CFCStruct | BaseCFCStruct)} values
 * @returns {string}
 */
export function canvasDisplayTitle(values: CFCStruct | BaseCFCStruct): string {
	if (values.canvasTitle === "") {
		return generateTitle(
			values.canvasType,
			values.canvasTimeFrame,
			values.canvasStartDate,
			values.canvasEndDate
		)
	}

	return values.canvasTitle
}

export const DescriptionSize = 5
export const AmountSize = 3
export const ApplyGSTSize = 2
export const ActionsSize = 2

/**
 * Checks if the current config setup is a duplicate of another canvas.
 *
 * It either returns the cavnas that is being duplicated or false if it isn't a
 * duplicate
 *
 * @export
 * @param {CFCStruct} dups
 * @param {CFCPanelSlice} values
 * @param {BaseCFCStruct["canvasTitle"]} title
 * @returns {(boolean | CFCStruct)}
 */
export function identifyIfDuplicate(
	dups: CFCStruct[],
	values: CFCPanelSlice
): false | CFCStruct {
	if (dups.length === 0) return false
	const { canvasTitle, canvasEndDate, canvasStartDate } = values

	const filtered = dups.filter((item) => {
		if (canvasTitle === "") {
			return (
				isSameDay(item.canvasStartDate, canvasStartDate) &&
				isSameDay(item.canvasEndDate, canvasEndDate)
			)
		}

		return item.canvasTitle === canvasTitle
	})
	return filtered.length < 1 ? false : filtered[0]
}
