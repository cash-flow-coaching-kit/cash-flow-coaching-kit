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
						Familiarise yourself with the tools in this kit. For more
						information click on the ‘Show me how’ button.
					</Typography>
					<Typography component="li">
						Note the key things you want to discuss with your client.
					</Typography>
					<Typography component="li">
						Identify the cash flow coaching kit tools that will be most suitable
						to aid your coaching conversation.
					</Typography>
					<Typography component="li">Ask your client to:</Typography>
					<List className={cls.list}>
						<Typography component="li">
							prepare a list of questions to ask
						</Typography>
						<Typography component="li">
							bring the financial projections or reports for their business.
						</Typography>
					</List>
					<Typography component="li">
						For an existing client you can review their previous action
						checklist, canvases and financials.
					</Typography>
				</List>
			</Box>
		</ExpandableNav>
	)
}
