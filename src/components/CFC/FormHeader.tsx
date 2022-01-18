import React, { ReactElement, memo } from "react"
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core"
import {
	DescriptionSize,
	AmountSize,
	ApplyGSTSize,
	ActionsSize,
} from "./__config/utilities"
import Spacer from "../Spacer/Spacer"

const useStyles = makeStyles((theme) => ({
	label: {
		fontWeight: 500,
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
export default memo((): ReactElement => {
	const cls = useStyles()

	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={DescriptionSize}>
					<Typography className={cls.label}>Description</Typography>
				</Grid>
				<Grid item xs={AmountSize}>
					<Typography className={cls.label}>Amount</Typography>
				</Grid>
				<Grid item xs={ApplyGSTSize}>
					<Typography className={cls.label}>Apply GST</Typography>
				</Grid>
				<Grid item xs={ActionsSize}>
					<Typography className={cls.label}>Actions</Typography>
				</Grid>
			</Grid>
			<Divider />
			<Spacer />
		</>
	)
})
