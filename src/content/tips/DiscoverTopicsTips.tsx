import React, { ReactElement } from "react"
import { Typography, List } from "@material-ui/core"

const DiscoverTopicsTips = (): ReactElement => {
	return (
		<>
			<List>
				<Typography component="li">
					Health Check results guide the coaching conversation
				</Typography>
				<Typography component="li">
					Discover Topics build knowledge of key financial concepts
				</Typography>
				<Typography component="li">
					Quicksnaps provide a summary of the knowledge topic and questions to
					consider
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
