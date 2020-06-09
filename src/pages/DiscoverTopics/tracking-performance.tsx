import React, { ReactElement } from "react"
import { Link as RouterLink } from "react-router-dom"
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
	Container,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useDTStyles from "./_config/styles"
import { PrivateRoutes } from "../../util/routes/routes"
import Taskbuilder from "../../components/Taskbuilder"

const TrackingPerformance = (): ReactElement => {
	const styles = useDTStyles()

	return (
		<>
			<PageContainer role="main">
				<Grid container spacing={2}>
					<Grid item sm={9}>
						<Typography
							component="h1"
							align="center"
							className={styles.tagline}
						>
							Tracking your performance
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
							gutterBottom
						>
							It is vital for every business to track performance over time, to
							monitor and address cash flow issues before it’s too late.
							Tracking accurately reveals how you are performing against your
							plan and allows you to revisit your budget with a clear path to
							improve your cash flow.
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							<strong>Tracking your performance can help you:</strong>
						</Typography>
						<List>
							<Typography component="li" className={styles.list}>
								Operate profitably and continue to generate a positive cash
								flow.
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
							<Grid item sm={6}>
								<Card variant="outlined">
									<CardHeader title="Tina's Hair &amp; Beauty" />
									<CardMedia
										title="Tina's Hair &amp; Beauty"
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
							<Grid item sm={6}>
								<Card variant="outlined">
									<CardHeader title="Anders' Retirement Plan" />
									<CardMedia
										title="Anders' Retirement Plan"
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
					</Grid>
					<Grid item sm={3}>
						<Taskbuilder container="tracking" />
					</Grid>
				</Grid>
				<Typography component="h2" className={styles.SectionTitle}>
					Quicksnaps - How to best track your business performance.
				</Typography>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="review-regularly-content"
						id="review-regularly-header"
					>
						<Typography variant="h5" component="h3">
							Review your business regularly
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6" component="h4">
									Why?
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
								>
									Understanding your regular financial commitments is essential
									for budgeting. Appreciating when they occur, how much they are
									likely to be and who they are owed to is a great place to
									start. By mapping these expenses, you will gain a better idea
									of the cash you need during certain time frames to pay your
									debts.
								</Typography>
							</Grid>
							<Grid item sm={6}>
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
						aria-controls="know-what-content"
						id="know-what-header"
					>
						<Typography variant="h5" component="h3">
							Know what to look for
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6" component="h4">
									Why?
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
								>
									Obtaining a clearer picture of your cash flow and business
									will allow you to make better decisions. Knowing exactly what
									to look for will vary, but asking yourself these Quicksnap
									questions will ensure you are on your way to identifying key
									areas.
								</Typography>
							</Grid>
							<Grid item sm={6}>
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
						aria-controls="past-performance-content"
						id="past-performance-header"
					>
						<Typography variant="h5" component="h3">
							Past performance, future success
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6" component="h4">
									Why?
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
								>
									Your past performance is not a reliable assurance of future
									success. However, it may assist you in forecasting and
									budgeting, allowing you to make informed decisions that
									maximise your cash flow.
								</Typography>
							</Grid>
							<Grid item sm={6}>
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
				<Container
					maxWidth="lg"
					component="div"
					className={styles.containerActivity}
				>
					<Typography component="h2" className={styles.SectionTitle}>
						Track Canvas activity
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
						gutterBottom
					>
						This is your opportunity to use the Track Canvas to track your
						business performance. You may wish to revisit your business plan,
						choose a goal and track your progress towards it. The Track Canvas
						helps you determine how you are tracking. Click “Show Me How” at any
						time to get help using the tool.
					</Typography>
					<Button
						variant="contained"
						color="primary"
						size="large"
						startIcon={<VerticalSplitIcon />}
						component={RouterLink}
						to={PrivateRoutes.CFC}
					>
						Cash flow canvas
					</Button>
				</Container>
				<Container
					maxWidth="lg"
					component="div"
					className={styles.containerWrapUp}
				>
					<Typography component="h2" className={styles.SectionTitle}>
						Wrap up
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
					>
						If you have a business advisor, consider asking for assistance in
						interpreting and responding to information revealed through tracking
						your performance. An advisor may be able to help you take advantage
						of opportunities in your industry, make changes within your
						business, or understand whether your business is performing well or
						not.
					</Typography>
				</Container>
				<Container
					maxWidth="lg"
					component="div"
					className={styles.containerMoreInfo}
				>
					<Typography component="h2" className={styles.SectionTitle}>
						More information
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
					>
						You might like to visit these links for more information
					</Typography>
					<Grid container spacing={3}>
						<Grid item sm={6} md>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								href="https://www.business.qld.gov.au/running-business/protecting-business/risk-management/surviving-downturn/assess-performance"
								title="assess business performance"
								target="_blank"
								rel="noopener noreferrer"
							>
								Assess business performance
							</Button>
						</Grid>
						<Grid item sm={6} md>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								href="https://www.business.qld.gov.au/running-business/finances-cash-flow/managing-money/monitoring-performance"
								title="monitoring your financial performance"
								target="_blank"
								rel="noopener noreferrer"
							>
								Monitoring your financial performance
							</Button>
						</Grid>
						<Grid item sm={6} md>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								href="https://www.business.qld.gov.au/starting-business/planning/market-customer-research/benchmarking"
								title="benchmarking your business"
								target="_blank"
								rel="noopener noreferrer"
							>
								Benchmarking your business
							</Button>
						</Grid>
						<Grid item sm={6} md>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								href="https://www.business.vic.gov.au/money-profit-and-accounting/financial-processes-and-procedures/check-your-financial-health"
								title="check the financial health of your business"
								target="_blank"
								rel="noopener noreferrer"
							>
								Check the financial health of your business
							</Button>
						</Grid>
						<Grid item sm={6} md>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								href="https://www.business.qld.gov.au/running-business/growing-business/tips-improving"
								title="improving business performance"
								target="_blank"
								rel="noopener noreferrer"
							>
								Improving business performance
							</Button>
						</Grid>
					</Grid>
				</Container>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</>
	)
}

export default TrackingPerformance
