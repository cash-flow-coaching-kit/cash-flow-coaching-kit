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
import SectionTitle from "../../components/SectionTitle"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const DTPlanningFinanicalCommitments = (): ReactElement => {
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
					Planning your regular financial commitments
				</Typography>
				<Typography variant="body1" component="p">
					There are many operating costs when managing your business. Some are
					more obvious, such as phone bills, rent, or equipment. However, there
					are a number of less obvious costs, including licences you may need to
					operate your business, superannuation for you or your employees, and
					your business activity statements. Knowing and planning for all of
					your commitments can help you to avoid unnecessary cash flow stress.
				</Typography>
				<Typography variant="body1" component="p">
					<strong>
						Planning your regular financial commitments can help you:
					</strong>
				</Typography>
				<List>
					<Typography component="li" className={styles.list}>
						Prepare for large payments.
					</Typography>
					<Typography component="li" className={styles.list}>
						Know how much to put aside to meet your commitments when they
						arrive.
					</Typography>
					<Typography component="li" className={styles.list}>
						Look at negotiating where certain payments fall within the year.
					</Typography>
					<Typography component="li" className={styles.list}>
						Be in control of your financial commitments, without any surprises.
					</Typography>
					<Typography component="li" className={styles.list}>
						Feel prepared for the unexpected.
					</Typography>
					<Typography component="li" className={styles.list}>
						Understand the financial ramifications of the decisions you make
						within your business.
					</Typography>
				</List>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Mick's Farm" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/FSJsiEaRNRU"
							/>
							<CardActions>
								<Button color="primary" href="/transcripts/Micks-farm.docx">
									Download Transcript: Mick's Farm
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Ming's Disability Services" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/wXe051xOIzI"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Mings-disability-services.docx"
								>
									Download Transcript: Ming's Disability Services
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<SectionTitle className={styles.SectionTitle}>
					QUICKSNAPS - How to plan for your regular financial commitments.
				</SectionTitle>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h5">
							Business activities that trigger commitments
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									At times, certain business activities, such as employing a new
									staff member, can have a dramatic impact on your financial
									commitments. Understanding the triggers for these activities
									can allow you to make better decisions.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Selling goods or services; GST applies
									</Typography>
									<Typography component="li" className={styles.list}>
										Employing staff; PAYG withholding, superannuation, leave,
										Workcover, FBT
									</Typography>
									<Typography component="li" className={styles.list}>
										Carrying on a business; income tax
									</Typography>
									<Typography component="li" className={styles.list}>
										Industry specific; professional memberships, insurances and
										licences
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
						<Typography variant="h5">Important dates</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Many financial commitments are cyclical. It’s important to
									know your payment cycles and dates. Keeping a record of your
									commitments can help you anticipate and prepare. It can help
									you make sure you pay the correct amount on time. You may like
									to set up regular reminders on your calendar or phone. The ATO
									app has a feature that helps you work out key dates and setup
									important reminders for tax and superannuation commitments.
									The ATO website has a list of tax and superannuation due dates
									for small business. It’s important to setup a system that
									works for you.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										1 July – start of financial year
									</Typography>
									<Typography component="li" className={styles.list}>
										30 September – end of quarter; BAS and superannuation due 28
										days later
									</Typography>
									<Typography component="li" className={styles.list}>
										31 October – tax return due (no tax agent)
									</Typography>
									<Typography component="li" className={styles.list}>
										31 December – end of quarter; superannuation due 28 January
									</Typography>
									<Typography component="li" className={styles.list}>
										31 December – end of quarter; BAS due 28 February
									</Typography>
									<Typography component="li" className={styles.list}>
										31 March – end of quarter; BAS and superannuation due 28
										days later
									</Typography>
									<Typography component="li" className={styles.list}>
										31 March – end of FBT year
									</Typography>
									<Typography component="li" className={styles.list}>
										1 April – start of FBT year
									</Typography>
									<Typography component="li" className={styles.list}>
										21 May – FBT return due
									</Typography>
									<Typography component="li" className={styles.list}>
										30 June – end of financial year; BAS and superannuation due
										28 days later
									</Typography>
									<Typography component="li" className={styles.list}>
										Note: if you use a tax agent you also get extra time to
										lodge and pay your BAS
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
						<Typography variant="h5">How much to put aside</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Expenses such as GST, superannuation and PAYG Income Tax are
									often forgotten about until BAS time. Understanding how much
									to put aside can assist in budgeting for these expenses.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										A good practice is to put your commitments, such as GST,
										insurances or FBT, into a separate bank account
									</Typography>
									<Typography component="li" className={styles.list}>
										Put aside money into a separate account for personal income
										tax
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
							Implications of not meeting your obligations
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Failing to meet your financial obligations can have a huge
									impact on your business and also the debt you owe.
									Understanding these implications will help to ensure you can
									identify why you should pay your bills on time, and the steps
									you can take if you are facing cash flow issues.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Late payment penalties and general interest charges
									</Typography>
									<Typography component="li" className={styles.list}>
										Important to discuss issues with creditors, other
										businesses, and regulatory bodies (including the ATO) before
										these issues become a problem
									</Typography>
									<Typography component="li" className={styles.list}>
										Legal action or loss of business protection
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

export default DTPlanningFinanicalCommitments
