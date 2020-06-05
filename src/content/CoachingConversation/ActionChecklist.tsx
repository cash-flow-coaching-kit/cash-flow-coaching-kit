import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import ExpandableNav from "../../components/ExpandableNav"

export default function ActionChecklist(): ReactElement {
	return (
		<ExpandableNav title="Action Checklist" defaultExpanded={false}>
			<Typography>Content</Typography>
		</ExpandableNav>
	)
}
