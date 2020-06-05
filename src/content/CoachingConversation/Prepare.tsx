import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import ExpandableNav from "../../components/ExpandableNav"

export default function Prepare(): ReactElement {
	return (
		<ExpandableNav
			title="Prepare for your client meeting"
			defaultExpanded={false}
		>
			<Typography>Content</Typography>
		</ExpandableNav>
	)
}
