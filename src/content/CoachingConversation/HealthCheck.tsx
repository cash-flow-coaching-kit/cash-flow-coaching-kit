import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import ExpandableNav from "../../components/ExpandableNav"

export default function HealthCheck(): ReactElement {
	return (
		<ExpandableNav title="Health Check" defaultExpanded={false}>
			<Typography>Content</Typography>
		</ExpandableNav>
	)
}
