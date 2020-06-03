import { CanvasDateKeys } from "../../Forms/CFC/changeDate"

/**
 * Prop definition for a single date picker in the range picker
 *
 * @export
 * @interface SinglePickerProps
 */
export interface SinglePickerProps {
	value: Date
	onChange: (date: Date | null, key: keyof OpenState) => void
	open: boolean
	onOpen: () => void
	onClose: () => void
	label: string
	compareDay: Date
	minDate?: Date
	id: keyof OpenState
}

/**
 * Prop definition for the Date range picker
 *
 * @export
 * @interface DateRangeProps
 */
export interface DateRangeProps {
	startDate: Date
	endDate: Date
	onChange: (k: CanvasDateKeys, v: Date) => void
}

// States available for the date range
export type OpenState = {
	start: boolean
	end: boolean
}
