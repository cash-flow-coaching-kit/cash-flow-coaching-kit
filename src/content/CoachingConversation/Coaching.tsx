import React, { ReactElement } from "react"
import {
	Typography,
	Box,
	List,
	Card,
	CardHeader,
	CardMedia,
	CardActions,
	Button,
} from "@material-ui/core"
import ExpandableNav from "../../components/ExpandableNav"
import useStyles from "./styles"
import Spacer from "../../components/Spacer"

export default function Coaching(): ReactElement {
	const cls = useStyles()

	return (
		<ExpandableNav title="Cash Flow Coaching Kit" defaultExpanded={false}>
			<Box className={cls.box}>
				<List className={cls.list}>
					<Typography component="li">
						The Cash Flow Coaching Kit has specific coaching phases (Discover,
						Apply, Plan & Action) each with their own set of tools and
						activities. Use these as most appropriate for your client.
					</Typography>
					<Typography component="li">
						Explain why the Four Key Questions are fundamental success factors
						for cash flow. Refer back to these questions frequently to keep the
						conversation focused on cash flow improvements.
					</Typography>
					<Typography component="li">
						Use the Health Check or review your client’s Action Checklist tasks
						to help start a conversation. Ask your client for their areas of
						interest or concerns.
					</Typography>
					<Typography component="li">
						It isn’t necessary to complete the entire coaching kit in every
						session.
					</Typography>
					<Typography component="li">
						As you explore the kit with your client, consider questions such as:
						<List className={cls.list}>
							<Typography component="li">Why are you in business?</Typography>
							<Typography component="li">
								Where do you see your business in 12 months?
							</Typography>
							<Typography component="li">
								Where do you see your business in 5 years?
							</Typography>
						</List>
					</Typography>
				</List>

				<Spacer space={4} />

				<Card variant="outlined">
					<CardHeader title="What advisors think of the kit" />
					<CardMedia
						className={cls.embed}
						component="iframe"
						title="What advisors think of the kit"
						src="https://www.youtube.com/embed/z64Bc5K2TKo"
					/>
					<CardActions>
						<Button
							color="primary"
							href="/transcripts/What-advisors-think-of-the-kit.docx"
						>
							Download Transcript
						</Button>
					</CardActions>
				</Card>
			</Box>
		</ExpandableNav>
	)
}
