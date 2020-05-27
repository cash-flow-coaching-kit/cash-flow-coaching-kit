import React, { ReactElement, useState, useEffect } from "react"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { Typography, makeStyles, Box } from "@material-ui/core"
import { DateRangeProps, OpenState } from "./__config/shape"
import { SinglePicker } from "./__partials"

/**
 * Date range selector
 *
 * @export
 * @param {DateRangeProps} {
 * 	startDate,
 * 	endDate,
 * 	onChange,
 * }
 * @returns {ReactElement}
 */
export default function DateRange({
	startDate,
	endDate,
	onChange,
}: DateRangeProps): ReactElement {
	const [open, setOpen] = useState<OpenState>({ start: false, end: false })
	const classes = makeStyles((theme) => ({
		root: {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
		},
		separator: {
			paddingRight: theme.spacing(1),
			paddingLeft: theme.spacing(1),
			color: theme.palette.grey[500],
			textTransform: "uppercase",
			fontSize: theme.typography.fontSize,
		},
	}))()

	/**
	 * Change the open state of the datepicker modal
	 *
	 * @param {keyof OpenState} key
	 */
	function onOpen(key: keyof OpenState): void {
		setOpen({
			start: false,
			end: false,
			[key]: true,
		})
	}

	/**
	 * Closes the datepickers
	 *
	 */
	function onClose(): void {
		setOpen({
			start: false,
			end: false,
		})
	}

	/**
	 * Triggers the passed in onChange method
	 *
	 * @param {(Date | null)} date
	 * @param {keyof OpenState} key
	 */
	function onDateChange(date: Date | null, key: keyof OpenState): void {
		if (date) {
			if (key === "start") {
				onChange("canvasStartDate", date)
			} else {
				onChange("canvasEndDate", date)
			}
		}
	}

	// When the start date is edited and the panel is still open
	// Change to the end date panel
	useEffect(() => {
		if (open.start) {
			onOpen("end")
		}
		// eslint-disable-next-line
	}, [startDate])

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Box className={classes.root}>
				<SinglePicker
					value={startDate}
					onChange={onDateChange}
					open={open.start}
					onOpen={(): void => onOpen("start")}
					onClose={onClose}
					label="Start Date"
					compareDay={endDate}
					id="start"
				/>
				<Typography component="span" className={classes.separator}>
					to
				</Typography>
				<SinglePicker
					value={endDate}
					onChange={onDateChange}
					open={open.end}
					onOpen={(): void => onOpen("end")}
					onClose={onClose}
					label="End Date"
					compareDay={startDate}
					id="end"
					minDate={startDate}
				/>
			</Box>
		</MuiPickersUtilsProvider>
	)
}
