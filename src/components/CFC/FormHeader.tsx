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
export default memo(function FormHeader(): ReactElement {
	const cls = useStyles()

	return (
		<>
			<Grid container spacing={2}>
				<Grid item sm={DescriptionSize}>
					<Typography className={cls.label}>Description</Typography>
				</Grid>
				<Grid item sm={AmountSize}>
					<Typography className={cls.label}>Amount</Typography>
				</Grid>
				<Grid item sm={ApplyGSTSize}>
					<Typography className={cls.label}>Apply GST</Typography>
				</Grid>
				<Grid item sm={ActionsSize}>
					<Typography className={cls.label}>Actions</Typography>
				</Grid>
			</Grid>
			<Divider />
			<Spacer />
		</>
	)
})
