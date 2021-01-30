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

export default function HealthCheck(): ReactElement {
	const cls = useStyles()

	return (
		<ExpandableNav title="Health Check" defaultExpanded={false}>
			<Box className={cls.box}>
				<List className={cls.list}>
					<Typography component="li">
						The Health Check helps you understand your client's business and
						cashflow knowledge.
					</Typography>
					<Typography component="li">
						Introduce the Health Check to your client as an opportunity to
						understand where they are at.
					</Typography>
					<Typography component="li">
						Consider questions such as:
						<List className={cls.list}>
							<Typography component="li">
								Are there areas of your business that are causing you concern?
							</Typography>
							<Typography component="li">
								How have you been trying to deal with this up to now?
							</Typography>
							<Typography component="li">
								What could you do to improve in these areas?
							</Typography>
						</List>
					</Typography>
					<Typography component="li">
						If your client is unsure about their results, they can learn more by
						using the Discover Topics.
					</Typography>
				</List>

				<Spacer space={4} />

				<Card variant="outlined">
					<CardHeader title="Health Check coaching tips" />
					<CardMedia
						className={cls.embed}
						component="iframe"
						title="Health Check coaching tips"
						src="https://www.youtube.com/embed/C6Gduin0fJg?rel=0&modestbranding=1"
					/>
					<CardActions>
						<Button
							color="primary"
							href="/transcripts/Health Check coaching tips.docx"
							aria-label="Download transcript: Health Check coaching tips"
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
