import React, { ReactElement } from "react"
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core"
import { getFormHeaders } from "./__config/utilities"
import Spacer from "../Spacer/Spacer"

const useStyles = makeStyles((theme) => ({
	label: {
		fontWeight: theme.typography.fontWeightMedium,
		fontSize: theme.typography.fontSize,
		paddingBottom: "4px",
	},
}))

/**
 * Component to render the header of the form
 *
 * @export
 * @returns {ReactElement}
 */
export default function FormHeader(): ReactElement {
	const cls = useStyles()

	return (
		<>
			<Grid container spacing={2}>
				{getFormHeaders().map(([label, size]) => (
					<Grid item sm={size} key={label}>
						<Typography className={cls.label}>{label}</Typography>
					</Grid>
				))}
			</Grid>
			<Divider />
			<Spacer />
		</>
	)
}
