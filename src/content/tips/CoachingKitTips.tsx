import React, { ReactElement } from "react"
import { Typography, List } from "@material-ui/core"
import useSharedTipStyling from "./style"

const CoachingKitTips = (): ReactElement => {
	const styles = useSharedTipStyling()
	return (
		<>
			<List className={styles.list}>
				<Typography component="li">
					Provide an overview of the kit for your client
				</Typography>
				<Typography component="li">
					Discuss the three phases – Discover, Apply, Plan &amp; Action
				</Typography>
				<Typography component="li">
					Use the Four Key Questions to set the focus for your coaching
					conversation
				</Typography>
				<Typography component="li">
					Identify useful tools for each phase
				</Typography>
			</List>
			<Typography variant="h6" component="h3">
				Next Steps
			</Typography>
			<List className={styles.list}>
				<Typography component="li">
					Start with the Health Check to assess cash flow knowledge and focus
					areas for the conversation
				</Typography>
			</List>
		</>
	)
}

export default CoachingKitTips
