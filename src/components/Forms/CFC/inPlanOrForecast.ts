import { CanvasType } from "../../../data/_config/shape"

/**
 * Checks if a type is in plan or forecast
 *
 * @export
 * @param {CanvasType} type
 * @returns {boolean}
 */
export default function inPlanOrForecast(type: CanvasType): boolean {
	return ["plan", "forecast"].indexOf(type) !== -1
}
