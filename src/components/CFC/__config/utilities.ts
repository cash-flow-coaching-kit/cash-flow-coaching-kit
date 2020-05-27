/* eslint-disable import/prefer-default-export */
import { SelectFieldOptions } from "../../SelectField/SelectField"
import { CanvasType, CFCTimeFrame } from "../../../data/_config/shape"
import upperFirst from "../../../util/strings/upperCaseFirst"

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
