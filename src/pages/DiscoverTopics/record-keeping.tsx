import React, { ReactElement } from "react"
import {
	Typography,
	Grid,
	List,
	Card,
	CardHeader,
	CardActions,
	CardMedia,
	Button,
} from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useDTStyles from "./_config/styles"

const DTRecordKeeping = (): ReactElement => {
	const styles = useDTStyles()
	return (
		<>
			<PageContainer>
				<Typography
					variant="h5"
					component="h1"
					align="center"
					className={styles.tagline}
				>
					Record keeping
				</Typography>
				<Typography variant="body1" component="p">
					As well as being a legal requirement, keeping accurate, up-to-date
					business records help you make fast, informed, and reliable business
					decisions. It’s important to find a record keeping system that suits
					your business - keep in mind that many digital platforms can automate
					aspects of your record keeping, saving you time and money in the long
					run.
				</Typography>
				<Typography variant="body1" component="p">
					<strong>Accurate record keeping can help you:</strong>
				</Typography>
				<List>
					<Typography component="li" className={styles.list}>
						Help identify issues early.
					</Typography>
					<Typography component="li" className={styles.list}>
						Measure how well your business is performing so you can make
						informed business decisions.
					</Typography>
					<Typography component="li" className={styles.list}>
						Keep track of your cash flow by monitoring the money you pay out,
						and the money that comes in.
					</Typography>
					<Typography component="li" className={styles.list}>
						Reduce the risk of employee theft.
					</Typography>
					<Typography component="li" className={styles.list}>
						Claim as many allowable deductions as possible.
					</Typography>
					<Typography component="li" className={styles.list}>
						Show your financial position to banks and other lenders, or
						prospective buyers of your business.
					</Typography>
					<Typography component="li" className={styles.list}>
						Make best use of time with your advisor for business and financial
						planning rather than sifting through papers.
					</Typography>
				</List>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Eden's Digital Records" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/1caO4xN-ZwA"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Edens-digital-records.docx"
								>
									Download Transcript: Eden's Digital Records
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Lisa's Paper Records" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/q9J_sRCKTn8"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Lisas-Paper-records.docx"
								>
									Download Transcript: Lisa's Paper Records
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</>
	)
}

export default DTRecordKeeping
