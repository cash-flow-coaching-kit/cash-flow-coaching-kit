import ExitToAppIcon from "@material-ui/icons/ExitToApp"
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
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useDTStyles from "./_config/styles"
import Taskbuilder from "../../components/Taskbuilder"
import QuicksnapsPanel from "../../components/QuicksnapsPanel"
<<<<<<< HEAD
import DiscoverTopicsTips from "../../content/tips/DiscoverTopicsTips"
=======
import { setToggleOfflineContent } from "./../../util/helper"
import useHasInternet from "./../../context/useHasInternet"
import DiscoverTopicsTips from "../../content/tips/DiscoverTopicsTips"
import fileSaver from "file-saver"

// Set flag for web or desktop mode
let isDesktop = false

const userAgent = navigator.userAgent.toLowerCase()
if (userAgent.indexOf(" electron/") > -1) {
	isDesktop = true
}

const saveFile = async (filename: string) => {
	const blob = await fetch("./pdf/" + filename).then((r) => r.blob())
	fileSaver.saveAs(blob, filename)
}
>>>>>>> 316b708cfa8dd6cd18dbad61985d0195e75d4330

const DTRecordKeeping = (): ReactElement => {
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
							Record keeping
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
							gutterBottom
						>
							As well as being a legal requirement, keeping accurate, up-to-date
							business records help you make fast, informed, and reliable
							business decisions. It’s important to find a record keeping system
							that suits your business - keep in mind that many digital
							platforms can automate aspects of your record keeping, saving you
							time and money in the long run.
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
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
								Keep track of your cash flow by monitoring the money you pay
								out, and the money that comes in.
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
								Make best use of time with your advisor for business and
								financial planning rather than sifting through papers.
							</Typography>
						</List>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Card variant="outlined">
									<CardHeader title="Eden's Digital Records" />
									<CardMedia
										className={styles.embed}
										component={isOnline ? "iframe" : "video"}
										title="Eden's Digital Records"
										src={setToggleOfflineContent(
											"https://www.youtube.com/embed/1caO4xN-ZwA?rel=0&modestbranding=1",
											isOnline
										)}
										controls
									/>
									<CardActions>
										<Button
											color="primary"
											href="./transcripts/Edens-digital-records.docx"
											target="_blank"
											rel="noopener noreferrer"
										>
											Download Transcript: Eden's Digital Records.{" "}
											{!isOnline && isDesktop
												? " Internet access is required for closed caption. "
												: ""}
										</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid item sm={6}>
								<Card variant="outlined">
									<CardHeader title="Lisa's Paper Records" />
									<CardMedia
										className={styles.embed}
										component={isOnline ? "iframe" : "video"}
										title="Lisa's Paper Records"
										src={setToggleOfflineContent(
											"https://www.youtube.com/embed/q9J_sRCKTn8?rel=0&modestbranding=1",
											isOnline
										)}
										controls
									/>
									<CardActions>
										<Button
											color="primary"
											href="./transcripts/Lisas-paper-records.docx"
											target="_blank"
											rel="noopener noreferrer"
										>
											Download Transcript: Lisa's Paper Records.{" "}
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
						<Taskbuilder container="recordKeeping" />
						<QuicksnapsPanel filename="Record keeping - Quicksnaps.pdf" />
					</Grid>
				</Grid>
				<Typography component="h2" className={styles.SectionTitle}>
					Quicksnaps - How do you stay on top of your record keeping?
				</Typography>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="records-rely-on-content"
						id="records-rely-on"
					>
						<Typography variant="h5" component="h3">
							Records you can rely on
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6" component="h4">
									Why?
								</Typography>
								<Typography>
									To ensure you can make informed financial decisions, you must
									be able to rely upon your financial records.
								</Typography>
							</Grid>
							<Grid item sm={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Can you make informed decisions from the information you
										have?
									</Typography>
									<Typography component="li" className={styles.list}>
										Is the information accurate and complete?
									</Typography>
									<Typography component="li" className={styles.list}>
										Your cash flow budget is based on your planned Cash In and
										Cash Out and allows you to allocate funds for specific
										purposes that are known in advance.
									</Typography>
								</List>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="accounting-system-content"
						id="accounting-system-header"
					>
						<Typography variant="h5" component="h3">
							An accounting system to make your business more efficient
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6" component="h4">
									Why?
								</Typography>
								<Typography>
									An accounting system often provides an opportunity to
									streamline reporting and allows you to make faster and better
									decisions.
								</Typography>
							</Grid>
							<Grid item sm={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Do you have an accounting system that suits your needs?
									</Typography>
									<Typography component="li" className={styles.list}>
										Are you using all of the available features of your
										accounting system to help you maintain accurate and complete
										records and make more informed decisions?
									</Typography>
									<Typography component="li" className={styles.list}>
										Could a different system streamline the different tasks and
										functions within your business?
									</Typography>
									<Typography component="li" className={styles.list}>
										Could you automate some of your accounting and reporting?
									</Typography>
								</List>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="help-record-keeping-content"
						id="help-record-keeping-header"
					>
						<Typography variant="h5" component="h3">
							Help with record keeping
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6" component="h4">
									Why?
								</Typography>
								<Typography>
									Some accounting packages, an accountant or a bookkeeper may
									assist with record keeping.
								</Typography>
							</Grid>
							<Grid item sm={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Do you have enough time to keep your books and records up to
										date or do you require the specialist skills of an
										accountant or a bookkeeper?
									</Typography>
									<Typography component="li" className={styles.list}>
										Could you outsource some of the accounting functions to free
										up your time to spend in other areas, such as obtaining or
										engaging in new work?
									</Typography>
								</List>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="financial-commistments-content"
						id="financial-commistments-header"
					>
						<Typography variant="h5" component="h3">
							Records to meet financial commitments
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6" component="h4">
									Why?
								</Typography>
								<Typography>
									Collecting the right records for your financial commitments
									and obligations is essential to meet your obligations. What
									records you need and the time you need to keep them for is an
									important consideration.
								</Typography>
							</Grid>
							<Grid item sm={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Does your record keeping meet the regulatory requirements?
									</Typography>
									<Typography component="li" className={styles.list}>
										Are your records sufficient to allow the business to meet
										its regulatory obligations in a timely manner?
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
						Record keeping activity
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
						gutterBottom
					>
						This activity can help you determine your specific record keeping
						needs, and guide you towards a solution that is matched to your
						business.
					</Typography>
					<Button
						variant="contained"
						color="primary"
						size="large"
						endIcon={<ExitToAppIcon />}
						onClick={() => saveFile("RecordKeeping-Activity.pdf")}
					>
						Download activity
					</Button>
					<Typography component="h2" className={styles.SectionTitle}>
						ATO App
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
						gutterBottom
					>
						If you are a sole-trader with simple business affairs the ATO App
						provides free and basic record keeping tools that are quick and easy
						to use.
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
						gutterBottom
					>
						Download the ATO app and setup a logbook to keep records of your
						business travel expenses.
					</Typography>
					<Button
						variant="contained"
						color="primary"
						size="large"
						title={
							!isOnline && isDesktop
								? "Internet access is required for full functionality."
								: "ATO app."
						}
						href={setToggleOfflineContent(
							"https://www.ato.gov.au/General/Online-services/ATO-app/",
							isOnline
						)}
						target="_blank"
						rel="noopener noreferrer"
					>
						ATO app.
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
						Good record keeping gives you accurate and complete information you
						can rely on to make informed decisions in your business. Digital
						record keeping systems put time back in your day by automating much
						of your record keeping and business reporting. They also compile
						reports that can provide valuable insights to your business
						performance.
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
					>
						If you have a business advisor, consider using the same record
						keeping platform that they use, to ensure your records are
						compatible and easily shared.
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
						<Grid item sm={6} md={3}>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title={
									!isOnline && isDesktop
										? "Internet access is required for full functionality."
										: "What books & records should my company keep."
								}
								href={setToggleOfflineContent(
									"https://asic.gov.au/for-business/your-business/small-business/compliance-for-small-business/small-business-what-books-and-records-should-my-company-keep/",
									isOnline
								)}
								target="_blank"
								rel="noopener noreferrer"
							>
								What books &amp; records should my company keep.
							</Button>
						</Grid>
						<Grid item sm={6} md={3}>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title={
									!isOnline && isDesktop
										? "Internet access is required for full functionality."
										: "Record keeping for small business."
								}
								href={setToggleOfflineContent(
									"https://www.ato.gov.au/General/Other-languages/In-detail/Information-in-other-languages/Record-keeping-for-small-businesses/",
									isOnline
								)}
								target="_blank"
								rel="noopener noreferrer"
							>
								Record keeping for small business.
							</Button>
						</Grid>
						<Grid item sm={6} md={3}>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title={
									!isOnline && isDesktop
										? "Internet access is required for full functionality."
										: "Key webinar topics for small business."
								}
								href={setToggleOfflineContent(
									"https://www.ato.gov.au/Business/Starting-your-own-business/Small-business-webinars-and-workshops/Small-business-webinars/",
									isOnline
								)}
								target="_blank"
								rel="noopener noreferrer"
							>
								Key webinar topics for small business.
							</Button>
						</Grid>
						<Grid item sm={6} md={3}>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title={
									!isOnline && isDesktop
										? "Internet access is required for full functionality."
										: "Records required by law."
								}
								href={setToggleOfflineContent(
									"https://www.ato.gov.au/Business/Record-keeping-for-business/Detailed-business-record-keeping-requirements/",
									isOnline
								)}
								target="_blank"
								rel="noopener noreferrer"
							>
								Records required by law.
							</Button>
						</Grid>
					</Grid>
				</Container>
			</PageContainer>

			<PageTip tip={DiscoverTopicsTips} />
		</>
	)
}

export default DTRecordKeeping
