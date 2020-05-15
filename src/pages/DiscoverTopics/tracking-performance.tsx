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
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
} from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useDTStyles from "./_config/styles"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import SectionTitle from "../../components/SectionTitle"

const TrackingPerformance = (): ReactElement => {
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
					Tracking your performance
				</Typography>
				<Typography variant="body1" component="p">
					It is vital for every business to track performance over time, to
					monitor and address cash flow issues before it’s too late. Tracking
					accurately reveals how you are performing against your plan and allows
					you to revisit your budget with a clear path to improve your cash
					flow.
				</Typography>
				<Typography variant="body1" component="p">
					<strong>Tracking your performance can help you:</strong>
				</Typography>
				<List>
					<Typography component="li" className={styles.list}>
						Operate profitably and continue to generate a positive cash flow.
					</Typography>
					<Typography component="li" className={styles.list}>
						Make changes to improve cash flow in a timely manner.
					</Typography>
					<Typography component="li" className={styles.list}>
						Make informed decisions.
					</Typography>
					<Typography component="li" className={styles.list}>
						Gather and analyse comprehensive information to prepare reports.
					</Typography>
					<Typography component="li" className={styles.list}>
						Review past performance and make plans to improve your business.
					</Typography>
					<Typography component="li" className={styles.list}>
						Use reliable financial details to track your business.
					</Typography>
					<Typography component="li" className={styles.list}>
						Reach your financial and business goals.
					</Typography>
				</List>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Tina's Hair &amp; Beauty" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/VRxQ7AkxsfY"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Tinas-hair-and-beauty.docx"
								>
									Download Transcript: Tina's Hair &amp; Beauty
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Anders' Retirement Plan" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/MPNkTF-puTQ"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Anders-retirement-plan.docx"
								>
									Download Transcript: Anders' Retirement Plan
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<SectionTitle className={styles.SectionTitle}>
					QUICKSNAPS - How to best track your business performance.
				</SectionTitle>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h5">Review your business regularly</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Understanding your regular financial commitments is essential
									for budgeting. Appreciating when they occur, how much they are
									likely to be and who they are owed to is a great place to
									start. By mapping these expenses, you will gain a better idea
									of the cash you need during certain time frames to pay your
									debts.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Do you set aside time at the end of each week, month,
										quarter and year to review your financial performance?
									</Typography>
									<Typography component="li" className={styles.list}>
										Are there issues which have arisen in the past which you
										have not been prepared for?
									</Typography>
									<Typography component="li" className={styles.list}>
										Could you have avoided cash flow problems in the past if you
										had a better understanding of how your business was truly
										performing?
									</Typography>
								</List>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h5">Know what to look for</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Obtaining a clearer picture of your cash flow and business
									will allow you to make better decisions. Knowing exactly what
									to look for will vary, but asking yourself these Quicksnap
									questions will ensure you are on your way to identifying key
									areas.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										What is working well?
									</Typography>
									<Typography component="li" className={styles.list}>
										What is not working well?
									</Typography>
									<Typography component="li" className={styles.list}>
										Did you meet your budget?
									</Typography>
									<Typography component="li" className={styles.list}>
										Do you have enough cash for the upcoming months?
									</Typography>
									<Typography component="li" className={styles.list}>
										Which product or customer do you make the most money on?
									</Typography>
									<Typography component="li" className={styles.list}>
										Which debtors are the slowest payers? Can you address this?
									</Typography>
									<Typography component="li" className={styles.list}>
										Have you performed better than this time last year?
									</Typography>
									<Typography component="li" className={styles.list}>
										Are expenses in line with your expectations?
									</Typography>
								</List>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h5">
							Past performance, future success
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Your past performance is not a reliable assurance of future
									success. However, it may assist you in forecasting and
									budgeting, allowing you to make informed decisions that
									maximise your cash flow.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										How is your business tracking against your business plan?
									</Typography>
									<Typography component="li" className={styles.list}>
										How is your business tracking against your budget and
										forecast?
									</Typography>
									<Typography component="li" className={styles.list}>
										Do you know the busy and quiet periods in your business?
									</Typography>
									<Typography component="li" className={styles.list}>
										What can you change? (Use the Change lever cards)
									</Typography>
								</List>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</>
	)
}

export default TrackingPerformance
