import { differenceInCalendarDays } from "date-fns"

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
