import React, { ReactElement } from "react"
import { Typography, List } from "@material-ui/core"
import useSharedTipStyling from "./style"

/**
 * Tip displayed on the client listing page
 *
 * @returns ReactElement
 */
const ActionChecklistTips = (): ReactElement => {
	const styles = useSharedTipStyling()

	return (
		<>
			<List className={styles.list}>
				<Typography component="li">
					Personalise actions by adding descriptions
				</Typography>
				<Typography component="li">
					Set a review date for all actions
				</Typography>
				<Typography component="li">
					Discuss strategies to complete the actions
				</Typography>
				<Typography component="li">
					Use the reorder button to prioritise action items
				</Typography>
			</List>
			<Typography variant="h6">Next Steps</Typography>
			<List className={styles.list}>
				<Typography component="li">Agree a review date</Typography>
				<Typography component="li">
					Track goals by updating and checking off actions
				</Typography>
				<Typography component="li">
					After each review date, revisit Health Check and Actions for new
					insights
				</Typography>
			</List>
		</>
	)
}

export default ActionChecklistTips
