import React, {
	ReactElement,
	useState,
	useEffect,
	memo,
	useCallback,
} from "react"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { Typography, makeStyles, Box } from "@material-ui/core"
import { DateRangeProps, OpenState } from "./__config/shape"
import { SinglePicker } from "./__partials"

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-start",
	},
	separator: {
		paddingRight: theme.spacing(1),
		paddingLeft: theme.spacing(1),
		color: theme.palette.grey[500],
		textTransform: "uppercase",
		fontSize: theme.typography.fontSize,
		lineHeight: "56px",
	},
}))

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
const DateRange = memo(function DateRange({
	startDate,
	endDate,
	onChange,
}: DateRangeProps): ReactElement {
	const [open, setOpen] = useState<OpenState>({ start: false, end: false })
	const classes = useStyles()

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

	const openStart = useCallback(() => onOpen("start"), [])
	const openEnd = useCallback(() => onOpen("end"), [])

	/**
	 * Closes the datepickers
	 *
	 */
	const onClose = useCallback((): void => {
		setOpen({
			start: false,
			end: false,
		})
	}, [])

	/**
	 * Triggers the passed in onChange method
	 *
	 * @param {(Date | null)} date
	 * @param {keyof OpenState} key
	 */
	const onDateChange = useCallback(
		(date: Date | null, key: keyof OpenState): void => {
			if (date) {
				if (key === "start") {
					onChange("canvasStartDate", date)
				} else {
					onChange("canvasEndDate", date)
					onClose()
				}
			}
		},
		[onChange, onClose]
	)

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
					onOpen={openStart}
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
					onOpen={openEnd}
					onClose={onClose}
					label="End Date"
					compareDay={startDate}
					id="end"
					minDate={startDate}
				/>
			</Box>
		</MuiPickersUtilsProvider>
	)
})

export default DateRange
