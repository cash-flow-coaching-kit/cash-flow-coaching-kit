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
import { setToggleOfflineContent } from "./../../util/helper"
import useHasInternet from "./../../context/useHasInternet"

export default function ActionChecklist(): ReactElement {
	const cls = useStyles()
	const isOnline = useHasInternet()

	return (
		<ExpandableNav title="Action Checklist" defaultExpanded={false}>
			<Box className={cls.box}>
				<List className={cls.list}>
					<Typography component="li">
						Introduce the Action Checklist as a set of steps to improve business
						cash flow.
					</Typography>
					<Typography component="li">
						Explain that putting their knowledge into action requires a clear
						plan and timeframes.
					</Typography>
					<Typography component="li">
						Focus your conversation on practical actions your client can take to
						create change.
					</Typography>
					<Typography component="li">
						Start prioritising tasks based on your client's needs.
					</Typography>
					<Typography component="li">
						The most important part of this whole process is keeping your client
						accountable for completing their actions.
					</Typography>
					<Typography component="li">
						Set a follow-up date to have another conversation to review the
						tasks.
					</Typography>
					<Typography component="li">
						Consider questions such as:
						<List className={cls.list}>
							<Typography component="li">What did we discuss?</Typography>
							<Typography component="li">What did we agree to do?</Typography>
							<Typography component="li">Who will do what by when?</Typography>
							<Typography component="li">
								Who is accountable for these actions?
							</Typography>
							<Typography component="li">
								How is the Action Checklist going?
							</Typography>
							<Typography component="li">Are you making progress?</Typography>
						</List>
					</Typography>
				</List>

				<Spacer space={4} />

				<Card variant="outlined">
					<CardHeader title="Action Checklist coaching tips" />
					<CardMedia
						className={cls.embed}
						component={isOnline ? "iframe" : "video"}
						title="Action Checklist coaching tips"
						src={setToggleOfflineContent(
							"https://www.youtube.com/embed/td4ReSc9Eos?rel=0&modestbranding=1",
							isOnline
						)}
						controls
					/>
					<CardActions>
						<Button
							color="primary"
							href="./transcripts/Action Checklist coaching tips.docx"
							aria-label="Download transcript: Action Checklist coaching tips"
							target="_blank"
							rel="noopener noreferrer"
						>
							Download Transcript
						</Button>
					</CardActions>
				</Card>
			</Box>
		</ExpandableNav>
	)
}
