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
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Container,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import fileSaver from "file-saver"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useDTStyles from "./_config/styles"
import Taskbuilder from "../../components/Taskbuilder"
import QuicksnapsPanel from "../../components/QuicksnapsPanel"
import { setToggleOfflineContent } from "../../util/helper"
import useHasInternet from "../../context/useHasInternet"
import DiscoverTopicsTips from "../../content/tips/DiscoverTopicsTips"

// Set flag for web or desktop mode
const userAgent = navigator.userAgent.toLowerCase()
const isDesktop = userAgent.indexOf(" electron/") > -1

const saveFile = async (filename: string, fileSubPath: string) => {
	const blob = await fetch("./" + fileSubPath + "/" + filename).then((r) =>
		r.blob()
	)
	return fileSaver.saveAs(blob, filename)
}

const DTPlanningFinanicalCommitments = (): ReactElement => {
	const styles = useDTStyles()
	const isOnline = useHasInternet()

	return (
		<>
			<PageContainer role="main">
				<Grid container spacing={2}>
					<Grid item xs={12} md={8} lg={9}>
						<Typography
							component="h1"
							align="center"
							className={styles.tagline}
						>
							Planning your regular financial commitments
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
							gutterBottom
						>
							There are many operating costs when managing your business. Some
							are more obvious, such as phone bills, rent, or equipment.
							However, there are a number of less obvious costs, including
							licences you may need to operate your business, superannuation for
							you or your employees, and your business activity statements.
							Knowing and planning for all of your commitments can help you to
							avoid unnecessary cash flow stress.
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
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
								Be in control of your financial commitments, without any
								surprises.
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
							<Grid item sm={6}>
								<Card variant="outlined">
									<CardHeader title="Mick's Farm" />
									<CardMedia
										className={styles.embed}
										component={isOnline ? "iframe" : "video"}
										title="Mick's Farm"
										src={setToggleOfflineContent(
											"https://www.youtube.com/embed/FSJsiEaRNRU?rel=0&modestbranding=1/",
											isOnline
										)}
										controls
									/>
									<CardActions>
										<Button
											color="primary"
											onClick={() => saveFile("Micks-farm.docx", "transcripts")}
										>
											Download Transcript: Mick&rsquo;s Farm
											{!isOnline && isDesktop
												? " Internet access is required for closed caption. "
												: ""}
										</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid item sm={6}>
								<Card variant="outlined">
									<CardHeader title="Ming's Disability Services" />
									<CardMedia
										className={styles.embed}
										component={isOnline ? "iframe" : "video"}
										title="Ming's Disability Services"
										src={setToggleOfflineContent(
											"https://www.youtube.com/embed/wXe051xOIzI?rel=0&modestbranding=1",
											isOnline
										)}
										controls
									/>
									<CardActions>
										<Button
											color="primary"
											onClick={() =>
												saveFile(
													"Mings-disability-services.docx",
													"transcripts"
												)
											}
										>
											Download Transcript: Ming&rsquo;s Disability Services
											{!isOnline && isDesktop
												? " Internet access is required for closed caption. "
												: ""}
										</Button>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={4} lg={3}>
						<Taskbuilder container="planningCommitments" />
						<QuicksnapsPanel filename="Planning your regular financial commitments - Quicksnaps.pdf" />
					</Grid>
				</Grid>
				<Typography component="h2" className={styles.SectionTitle}>
					Quicksnaps - How to plan for your regular financial commitments.
				</Typography>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="business-activities-content"
						id="business-activities-header"
					>
						<Typography variant="h5" component="h3">
							Business activities that trigger commitments
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6" component="h4">
									Why?
								</Typography>
								<Typography>
									At times, certain business activities, such as employing a new
									staff member, can have a dramatic impact on your financial
									commitments. Understanding the triggers for these activities
									can allow you to make better decisions.
								</Typography>
							</Grid>
							<Grid item sm={6}>
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
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="important-dates-content"
						id="important-dates-header"
					>
						<Typography variant="h5" component="h3">
							Important dates
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6" component="h4">
									Why?
								</Typography>
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
							<Grid item sm={6}>
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
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="put-aside-content"
						id="put-aside-header"
					>
						<Typography variant="h5" component="h3">
							How much to put aside
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6" component="h4">
									Why?
								</Typography>
								<Typography>
									Expenses such as GST, superannuation and PAYG Income Tax are
									often forgotten about until BAS time. Understanding how much
									to put aside can assist in budgeting for these expenses.
								</Typography>
							</Grid>
							<Grid item sm={6}>
								<List>
									<Typography component="li" className={styles.list}>
										A good practice is to put your commitments, such as GST,
										insurances or FBT, into a separate bank account
									</Typography>
									<Typography component="li" className={styles.list}>
										Put aside money into a separate account for personal income
										tax
									</Typography>
									<Typography component="li" className={styles.list}>
										You can use the PAYG withholding calculator to work out how
										much to put aside
									</Typography>
								</List>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="implications-content"
						id="implications-header"
					>
						<Typography variant="h5" component="h3">
							Implications of not meeting your obligations
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6" component="h4">
									Why?
								</Typography>
								<Typography>
									Failing to meet your financial obligations can have a huge
									impact on your business and also the debt you owe.
									Understanding these implications will help to ensure you can
									identify why you should pay your bills on time, and the steps
									you can take if you are facing cash flow issues.
								</Typography>
							</Grid>
							<Grid item sm={6}>
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
					</AccordionDetails>
				</Accordion>
				<Container
					maxWidth="lg"
					component="div"
					className={styles.containerActivity}
				>
					<Typography component="h2" className={styles.SectionTitle}>
						Know your commitments activity
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
						gutterBottom
					>
						This activity will guide you in identifying all of your regular
						financial commitments, where they fall in the year, and how to
						prepare for them ahead of time.
					</Typography>
					<Button
						variant="contained"
						color="primary"
						size="large"
						endIcon={<ExitToAppIcon />}
						onClick={() => saveFile("KnowYourCommitments-Activity.pdf","pdf")}
					>
						Download activity
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
						gutterBottom
					>
						If you have a business advisor, they may be able to help you spread
						your commitments across the year.
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
					>
						It is important to separate your personal and business bank
						accounts. Be sure to investigate a number of financial institutions
						to find the best option for you and your business - many banks offer
						fee-free accounts.
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
						You might like to visit these links for more information.{" "}
						{!isOnline && isDesktop
							? "Internet access is required for full functionality."
							: ""}
					</Typography>
					<Grid container spacing={3}>
						<Grid item xs={12} sm>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title={
									!isOnline && isDesktop
										? "Internet access is required for full functionality."
										: "Taxation and your employees."
								}
								href={setToggleOfflineContent(
									"https://www.business.gov.au/People/Pay-and-conditions/Employees-pay-leave-and-entitlements",
									isOnline
								)}
								target="_blank"
								rel="noopener noreferrer"
							>
								Taxation and your employees.
							</Button>
						</Grid>

						<Grid item xs={12} sm>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title={
									!isOnline && isDesktop
										? "Internet access is required for full functionality."
										: "Due dates by month."
								}
								href={setToggleOfflineContent(
									"https://www.ato.gov.au/Business/Reports-and-returns/Due-dates-for-lodging-and-paying/Due-dates-by-month/",
									isOnline
								)}
								target="_blank"
								rel="noopener noreferrer"
							>
								Due dates by month.
							</Button>
						</Grid>

						<Grid item xs={12} sm>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title={
									!isOnline && isDesktop
										? "Internet access is required for full functionality."
										: "Due dates by topic."
								}
								href={setToggleOfflineContent(
									"https://www.ato.gov.au/Business/Reports-and-returns/Due-dates-for-lodging-and-paying/Due-dates-by-topic/",
									isOnline
								)}
								target="_blank"
								rel="noopener noreferrer"
							>
								Due dates by topic.
							</Button>
						</Grid>

						<Grid item xs={12} sm>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title={
									!isOnline && isDesktop
										? "Internet access is required for full functionality."
										: "ATO App."
								}
								href={setToggleOfflineContent(
									"https://www.ato.gov.au/General/Online-services/ATO-app/",
									isOnline
								)}
								target="_blank"
								rel="noopener noreferrer"
							>
								ATO App.{" "}
							</Button>
						</Grid>

						<Grid item xs={12} sm>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title={
									!isOnline && isDesktop
										? "Internet access is required for full functionality."
										: "ATO business key dates."
								}
								href={setToggleOfflineContent(
									"https://www.ato.gov.au/Newsroom/smallbusiness/Key-dates",
									isOnline
								)}
								target="_blank"
								rel="noopener noreferrer"
							>
								ATO business key dates.
							</Button>
						</Grid>
					</Grid>
				</Container>
			</PageContainer>

			<PageTip tip={DiscoverTopicsTips} />
		</>
	)
}

export default DTPlanningFinanicalCommitments
