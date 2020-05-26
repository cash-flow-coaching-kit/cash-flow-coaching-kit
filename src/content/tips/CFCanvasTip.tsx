import React, { ReactElement } from "react"
import { Typography, List } from "@material-ui/core"
import useSharedTipStyling from "./style"

/**
 * Tip displayed on the CFC canvas page
 *
 * @returns ReactElement
 */
const CFCanvasTips = (): ReactElement => {
	const styles = useSharedTipStyling()

	return (
		<>
			<List className={styles.list}>
				<Typography component="li">
					The canvas constantly saves information as it is entered
				</Typography>
				<Typography component="li">
					Start by creating a Review Canvas to look at the actual results for a
					previous period
				</Typography>
				<Typography component="li">
					Copy the Review Canvas into a Forecast Canvas to predict future cash
					flow based on existing assumptions
				</Typography>
				<Typography component="li">
					Use Change Levers to explore possible actions to take to improve cash
					flow
				</Typography>
				<Typography component="li">
					Create a Plan Canvas to show projected cash flow taking into account
					changes to be implemented in the business
				</Typography>
				<Typography component="li">
					Use a Track Canvas to break down a Plan Canvas to weekly, monthly or
					quarterly targets to monitor actual against expected performance
				</Typography>
				<Typography component="li">
					Compare different canvases to track cash flow trends
				</Typography>
			</List>
			<Typography variant="h6">Next Steps</Typography>
			<List className={styles.list}>
				<Typography component="li">Apply Change Levers</Typography>
				<Typography component="li">Repeat the steps regularly</Typography>
			</List>
		</>
	)
}

export default CFCanvasTips
