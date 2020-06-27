import {
	differenceInCalendarDays,
	addWeeks,
	addMonths,
	addYears,
} from "date-fns"
import { CFCTimeFrame } from "../../data/_config/shape"

export const newTimestamp = (): number => new Date().getTime()

/**
 * Checks if the end date should be synced with the start date
 *
 * @export
 * @param {Date} start
 * @param {Date} end
 * @returns {boolean}
 */
export function syncEndDate(start: Date, end: Date): boolean {
	return differenceInCalendarDays(start, end) > 0
}

export function calculatedEndDate(start: Date, timeframe: CFCTimeFrame): Date {
	switch (timeframe) {
		case "weekly":
			return addWeeks(start, 1)
		case "fortnightly":
			return addWeeks(start, 2)
		case "monthly":
			return addMonths(start, 1)
		case "quaterly":
			return addMonths(start, 3)
		case "biannually":
			return addMonths(start, 6)
		case "yearly":
			return addYears(start, 1)
		case "other":
		default:
			return start
	}
}
