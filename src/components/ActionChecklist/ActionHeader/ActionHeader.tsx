import React, { ReactElement } from "react"
import {
	AppBar,
	Toolbar,
	FormControlLabel,
	Checkbox,
	Box,
} from "@material-ui/core"
import DateFnsUtils from "@date-io/date-fns"
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers"
import useActionHeaderStyles from "./_config/style"

const ActionHeader = (): ReactElement => {
	const styles = useActionHeaderStyles()

	const [selectedDate, setSelectedDate] = React.useState<Date | null>(
		new Date()
	)

	const handleDateChange = (date: Date | null): void => {
		setSelectedDate(date)
	}

	return (
		<AppBar position="static" color="default" className={styles.appbar}>
			<Toolbar>
				<FormControlLabel
					control={<Checkbox name="hide-items" />}
					label="Hide completed item"
				/>
				<Box className={styles.box}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							inputVariant="outlined"
							format="dd/MM/yyyy"
							margin="normal"
							id="review-by-date"
							label="Review by"
							value={selectedDate}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</MuiPickersUtilsProvider>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default ActionHeader
