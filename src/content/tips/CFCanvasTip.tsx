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
					Start by creating a Review Canvas to look at your past cash flow
				</Typography>
				<Typography component="li">
					Copy the Review Canvas into a Forecast Canvas to predict future cash
					flow
				</Typography>
				<Typography component="li">
					Create a Plan Canvas to see what changes you can make to improve your
					cash flow
				</Typography>
				<Typography component="li">
					Use a Track Canvas to break down a Plan Canvas to weekly, monthly or
					quarterly targets
				</Typography>
				<Typography component="li">
					Check your actual cash flow against your planned cash flow
				</Typography>
				<Typography component="li">
					Compare different canvases to track cash flow trends
				</Typography>
			</List>
			<Typography variant="h6">Next Steps</Typography>
			<List className={styles.list}>
				<Typography component="li">
					Pick the actions you want to take
				</Typography>
				<Typography component="li">
					Repeat the steps to track and review progress
				</Typography>
			</List>
		</>
	)
}

export default CFCanvasTips
