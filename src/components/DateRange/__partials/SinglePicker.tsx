import React, { ReactElement, cloneElement, memo } from "react"
import { makeStyles } from "@material-ui/core"
import { isSameDay } from "date-fns"
import { KeyboardDatePicker } from "@material-ui/pickers"
import { useStyles as useDayStyles } from "@material-ui/pickers/views/Calendar/Day"
import { SinglePickerProps } from "../__config/shape"

const useStyles = makeStyles((theme) => ({
	dateHighlight: {
		borderWidth: `1px`,
		borderColor: theme.palette.primary.main,
		borderStyle: "dashed",
	},
}))

/**
 * A single Date picker field used in the Range picker
 *
 * @export
 * @param {SinglePickerProps} {
 * 	value,
 * 	onChange,
 * 	open,
 * 	onOpen,
 * 	onClose,
 * 	label,
 * 	compareDay,
 * 	id,
 * 	minDate = new Date(1900, 1, 1),
 * }
 * @returns {ReactElement}
 */
function SinglePicker({
	value,
	onChange,
	open,
	onOpen,
	onClose,
	label,
	compareDay,
	id,
	minDate,
}: SinglePickerProps): ReactElement {
	const curStyles = useDayStyles()
	const customCls = useStyles()

	/**
	 * Renders the day components based on the current date selected
	 *
	 * @param {Date} compare
	 * @returns
	 */
	function renderDay(compare: Date) {
		return (
			day: Date | null,
			selectedDate: Date | null,
			isInCurrentMonth: boolean,
			dayComponent: ReactElement
		): ReactElement => {
			if (day && isSameDay(day, compare)) {
				return cloneElement(dayComponent, {
					className: `${curStyles.day} ${customCls.dateHighlight}`,
				})
			}
			return dayComponent
		}
	}

	function onDateChange(date: Date | null): void {
		onChange(date, id)
	}

	return (
		<KeyboardDatePicker
			value={value}
			disableToolbar
			variant="inline"
			inputVariant="outlined"
			onChange={onDateChange}
			minDate={minDate}
			open={open}
			format="dd/MM/yyyy"
			onOpen={onOpen}
			onClose={onClose}
			label={label}
			renderDay={renderDay(compareDay)}
			fullWidth
		/>
	)
}

export default memo(SinglePicker)
