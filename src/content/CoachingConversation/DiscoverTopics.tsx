import React, { ReactElement } from "react"
import { Typography, List, Box } from "@material-ui/core"
import ExpandableNav from "../../components/ExpandableNav"
import useStyles from "./styles"

export default function DiscoverTopics(): ReactElement {
	const cls = useStyles()

	return (
		<ExpandableNav title="Discover Topics" defaultExpanded={false}>
			<Box className={cls.box}>
				<List className={cls.list}>
					<Typography component="li">
						Introduce Discover Topics to your client as a way to understand cash
						flow management.
					</Typography>
					<Typography component="li">
						Identify the relevant topics and add them to the Action Checklist by
						using the Task Builder.
					</Typography>
					<Typography component="li">
						Use the activities to build practical knowledge. Focus on making it
						real and relevant to your client.
					</Typography>
					<Typography component="li">
						As you explore the Discover Topics with your client, consider
						questions such as:
					</Typography>
					<List className={cls.list}>
						<Typography component="li">
							Why do you think this topic area is relevant for your business?
						</Typography>
						<Typography component="li">
							What else would you like to know about this topic area?
						</Typography>
						<Typography component="li">
							How are you handling this aspect of your business now?
						</Typography>
						<Typography component="li">
							What could you do to change this in the future?
						</Typography>
					</List>
				</List>
			</Box>
		</ExpandableNav>
	)
}
