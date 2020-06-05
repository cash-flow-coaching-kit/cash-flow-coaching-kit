import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import ExpandableNav from "../../components/ExpandableNav"

export default function CFC(): ReactElement {
	return (
		<ExpandableNav title="Cash Flow Canvas" defaultExpanded={false}>
			<Typography>Content</Typography>
		</ExpandableNav>
	)
}
