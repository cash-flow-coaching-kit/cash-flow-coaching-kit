import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import ExpandableNav from "../../components/ExpandableNav"

export default function ChangeLevers(): ReactElement {
	return (
		<ExpandableNav title="Change Levers" defaultExpanded={false}>
			<Typography>Content</Typography>
		</ExpandableNav>
	)
}
