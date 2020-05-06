import React, { ReactElement } from "react"
import { Typography, List } from "@material-ui/core"
import useSharedTipStyling from "./style"

const DiscoverTopicsTips = (): ReactElement => {
	const styles = useSharedTipStyling()
	return (
		<>
			<List className={styles.list}>
				<Typography component="li">
					<strong>Health Check</strong> results guide the coaching conversation
				</Typography>
				<Typography component="li">
					<strong>Discover Topics</strong> build knowledge of key financial
					concepts
				</Typography>
				<Typography component="li">
					<strong>Quicksnaps</strong> provide a summary of the knowledge topic
					and questions to consider
				</Typography>
				<Typography component="li">
					Topic activities can help small business apply their learning
				</Typography>
				<Typography component="li">
					Use professional expertise to contextualise the conversation
				</Typography>
			</List>
			<Typography variant="h6">Next Steps</Typography>
			<List>
				<Typography component="li">
					Prepare a <strong>Cash Flow Canvas</strong>
				</Typography>
			</List>
		</>
	)
}

export default DiscoverTopicsTips
