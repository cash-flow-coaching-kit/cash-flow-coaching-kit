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
import { setToggleOfflineContent } from "../../util/helper"
import useHasInternet from "../../context/useHasInternet"

// Set flag for web or desktop mode
const userAgent = navigator.userAgent.toLowerCase()
const isDesktop = userAgent.indexOf(" electron/") > -1
export default function Coaching(): ReactElement {
	const cls = useStyles()
	const isOnline = useHasInternet()

	return (
		<ExpandableNav
			title="The Cash Flow Coaching Kit overview"
			defaultExpanded={false}
		>
			<Box className={cls.box}>
				<List className={cls.list}>
					<Typography component="li">
						Explain the coaching steps (Discover, Apply, Plan & Action) and
						tools.
					</Typography>
					<Typography component="li">
						Explain why the Four Key Questions are fundamental success factors
						for cash flow. Refer to these questions in every step.
					</Typography>
					<Typography component="li">
						Use the Health Check or review your client’s Action Checklist tasks
						to help start a conversation.
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
						component={isOnline ? "iframe" : "video"}
						title="What advisors think of the kit"
						src={setToggleOfflineContent(
							"https://www.youtube.com/embed/z64Bc5K2TKo?rel=0&modestbranding=1",
							isOnline
						)}
						controls
					/>
					<CardActions>
						<Button
							color="primary"
							href="./transcripts/What-advisors-think-of-the-kit.docx"
							aria-label="Download transcript: What advisors think of the kit"
							target="_blank"
							rel="noopener noreferrer"
						>
							Download Transcript.{" "}
							{!isOnline && isDesktop
								? " Internet access is required for closed caption. "
								: ""}
						</Button>
					</CardActions>
				</Card>
			</Box>
		</ExpandableNav>
	)
}
