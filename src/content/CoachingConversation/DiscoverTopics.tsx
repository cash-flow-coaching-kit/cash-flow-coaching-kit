import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import ExpandableNav from "../../components/ExpandableNav"

export default function DiscoverTopics(): ReactElement {
	return (
		<ExpandableNav title="Discover Topics" defaultExpanded={false}>
			<Typography>Content</Typography>
		</ExpandableNav>
	)
}
