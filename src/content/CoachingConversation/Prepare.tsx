import React, { ReactElement } from "react"
import { Typography, List, Box } from "@material-ui/core"
import ExpandableNav from "../../components/ExpandableNav"
import useStyles from "./styles"

export default function Prepare(): ReactElement {
	const cls = useStyles()

	return (
		<ExpandableNav
			title="Prepare for your client meeting"
			defaultExpanded={false}
		>
			<Box className={cls.box}>
				<List className={cls.list}>
					<Typography component="li">
						Familiarise yourself with the tools in this kit.
					</Typography>
					<Typography component="li">
						Identify the tools that will be most suitable to your client.
					</Typography>
					<Typography component="li">Ask your client to:</Typography>
					<List className={cls.list}>
						<Typography component="li">
							prepare a list of questions to ask
						</Typography>
						<Typography component="li">
							bring the financial projections or reports for their business
						</Typography>
					</List>
					<Typography component="li">
						For an existing client, review their previous action checklist,
						canvases and financials.
					</Typography>
				</List>
			</Box>
		</ExpandableNav>
	)
}
