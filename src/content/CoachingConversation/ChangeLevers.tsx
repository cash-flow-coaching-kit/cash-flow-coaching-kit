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

export default function ChangeLevers(): ReactElement {
	const cls = useStyles()

	return (
		<ExpandableNav title="Change Levers" defaultExpanded={false}>
			<Box className={cls.box}>
				<List className={cls.list}>
					<Typography component="li">
						The Change Levers highlight different options that could improve
						business performance.
					</Typography>
					<Typography component="li">
						Keep the conversation action focused and positive.
					</Typography>
					<Typography component="li">
						The actions and considerations in Change Levers will help structure
						your conversation. Use them to tailor relevant messages and include
						some additional insights in your coaching conversation.
					</Typography>
					<Typography component="li">
						Consider asking questions such as:
						<List className={cls.list}>
							<Typography component="li">
								Which of these actions stand out to you?
							</Typography>
							<Typography component="li">
								How do you feel about completing these actions?
							</Typography>
							<Typography component="li">
								How will you implement them?
							</Typography>
							<Typography component="li">
								What do these actions look like for your business?
							</Typography>
							<Typography component="li">
								How do you think completing these actions will impact your cash
								flow?
							</Typography>
						</List>
					</Typography>
				</List>

				<Spacer space={4} />

				<Card variant="outlined">
					<CardHeader title="Change Levers coaching tips" />
					<CardMedia
						className={cls.embed}
						component="iframe"
						title="Change Levers coaching tips"
						src="https://www.youtube.com/embed/_xYdO-STzYI"
					/>
					<CardActions>
						<Button
							color="primary"
							href="/transcripts/Change Levers coaching tips.docx"
							aria-label="Download transcript: Change Levers coaching tips"
						>
							Download Transcript
						</Button>
					</CardActions>
				</Card>
			</Box>
		</ExpandableNav>
	)
}
