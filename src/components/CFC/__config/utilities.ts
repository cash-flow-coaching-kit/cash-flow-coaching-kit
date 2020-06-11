import { format, isValid, isSameDay } from "date-fns"
import { SelectFieldOptions } from "../../SelectField/SelectField"
import {
	CanvasType,
	CFCTimeFrame,
	CFCStruct,
	BaseCFCStruct,
	CFCPanelSlice,
	CFCId,
	ClientId,
} from "../../../data/_config/shape"
import upperFirst from "../../../util/strings/upperCaseFirst"
import { pipe, minusBy, add } from "../../../util/reduce/math"
import concatStr from "../../../util/strings/concatStr"
import filterById from "../../../util/filters/ById"
import CFCUseCase from "../../../data/CFC/CFCLogic"
import { CalculatedValues } from "../../../state/CFC/useCalculated"

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

type DupResponse = false | CFCStruct

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
	values: CFCPanelSlice,
	canvasId?: CFCId
): DupResponse {
	if (dups.length === 0) return false
	const { canvasTitle, canvasEndDate, canvasStartDate } = values

	const filtered = dups.filter((item) => {
		if (canvasTitle === "" && item.canvasTitle === "") {
			return (
				isSameDay(item.canvasStartDate, canvasStartDate) &&
				isSameDay(item.canvasEndDate, canvasEndDate)
			)
		}

		return item.canvasTitle === canvasTitle
	})

	if (!canvasId) {
		return filtered.length < 1 ? false : filtered[0]
	}

	if (filtered.length < 1) return false

	const withoutCurrentCanvas = filtered.filter(filterById(canvasId, true))
	return withoutCurrentCanvas.length < 1 ? false : withoutCurrentCanvas[0]
}

/**
 * Fetches from the database and does the duplication filter
 *
 * @export
 * @param {CFCPanelSlice} slice
 * @param {ClientId} client
 * @param {CFCId} [canvasId]
 * @returns {Promise<DupResponse>}
 */
export async function performDupFind(
	slice: CFCPanelSlice,
	client: ClientId,
	canvasId?: CFCId
): Promise<DupResponse> {
	console.log("canvasId", canvasId)
	const dups = await CFCUseCase.findPossibleDuplicates(
		slice.canvasType,
		slice.canvasTimeFrame,
		client
	)

	return identifyIfDuplicate(dups, slice, canvasId)
}

/**
 * Calculates the value for Question 1 of 4
 *
 * @export
 * @param {CalculatedValues} calculated
 * @returns {number}
 */
export function calcQuestionOne(calculated: CalculatedValues): number {
	return calculated.cashSurplus
}

/**
 * Calculates the value for Question 2 of 4
 *
 * @export
 * @param {CalculatedValues} calculated
 * @param {number} payg
 * @param {number} superAmount
 * @param {number} incomeTax
 * @returns {number}
 */
export function calcQuestionTwo(
	calculated: CalculatedValues,
	payg: number,
	superAmount: number,
	incomeTax: number
): number {
	return pipe(
		minusBy(calculated.gstOnPurchases),
		add(payg),
		add(superAmount),
		add(incomeTax)
	)(calculated.gstOnSales)
}

/**
 * Calculates the value for Question 3 of 4
 *
 * @export
 * @param {number} openingBalance
 * @param {CalculatedValues} calculated
 * @param {number} incomeTax
 * @returns {number}
 */
export function calcQuestionThree(
	openingBalance: number,
	calculated: CalculatedValues,
	incomeTax: number
): number {
	return pipe(add(calculated.cashSurplus), minusBy(incomeTax))(openingBalance)
}

/**
 * Calculates the value for Question 4 of 4
 *
 * @export
 * @param {CalculatedValues} left
 * @param {CalculatedValues} right
 * @returns {number}
 */
export function calcQuestionFour(
	left: CalculatedValues,
	right: CalculatedValues
): number {
	return left.totalNetAssets - right.totalNetAssets
}
