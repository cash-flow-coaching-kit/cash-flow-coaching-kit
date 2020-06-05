import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import ExpandableNav from "../../components/ExpandableNav"

export default function Coaching(): ReactElement {
	return (
		<ExpandableNav title="Cash Flow Coaching Kit" defaultExpanded={false}>
			<Typography>Content</Typography>
		</ExpandableNav>
	)
}
