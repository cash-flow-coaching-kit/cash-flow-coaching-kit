import React, { ReactElement } from "react"
import {
	Typography,
	Grid,
	List,
	Card,
	CardHeader,
	CardActions,
	CardMedia,
	Container,
	Button,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PictureAsPdf from "@material-ui/icons/PictureAsPdf"
import SectionTitle from "../../components/SectionTitle"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useDTStyles from "./_config/styles"

const DTFundingBusiness = (): ReactElement => {
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
					Funding your business
				</Typography>

				<Typography variant="body1" component="p">
					Finding the right funding option is important to the long term success
					of your business. Understanding the various types of funding can help
					you select the best option for your business when starting up,
					expanding, or going through a time of limited cash flow.
				</Typography>
				<Typography variant="body1" component="p">
					<strong>Funding your business can help you:</strong>
				</Typography>
				<List>
					<Typography component="li" className={styles.list}>
						Understand how to fund your business.
					</Typography>
					<Typography component="li" className={styles.list}>
						Release pressure on cash flow and personal finances.
					</Typography>
					<Typography component="li" className={styles.list}>
						Keep the doors open.
					</Typography>
					<Typography component="li" className={styles.list}>
						Meet business goals.
					</Typography>
					<Typography component="li" className={styles.list}>
						Grow your business.
					</Typography>
					<Typography component="li" className={styles.list}>
						Provide for personal financial goals.
					</Typography>
				</List>

				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Tamako's Funding" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/fAe_2eyAkrU"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Tamakos-funding.docx"
								>
									Download Transcript: Tamako's Funding
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Charlotte's Loans" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/BTwVYKfGyuk"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Charlottes-loans.docx"
								>
									Download Transcript: Charlotte's Loans
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<SectionTitle className={styles.SectionTitle}>
					The four main types of funding
				</SectionTitle>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Typography component="h3" variant="h5">
							Debt Funding
						</Typography>
						<Typography component="p">
							Money provided by an external party such as a bank that requires
							repayment
						</Typography>
						<List>
							<Typography component="li" className={styles.list}>
								Financial Institutions such as a bank loan, line of credit, or
								equipment lease.
							</Typography>
							<Typography component="li" className={styles.list}>
								Retailers that offer the use of store credit to purchase goods
								or equipment.
							</Typography>
							<Typography component="li" className={styles.list}>
								Suppliers that allow you to delay your payment of goods and
								services.
							</Typography>
							<Typography component="li" className={styles.list}>
								Factor Companies are third parties that buy your unpaid
								invoices, giving you cash now.
							</Typography>
							<Typography component="li" className={styles.list}>
								Family or friends who are willing to loan cash under varied
								circumstances and agreements.
							</Typography>
						</List>
					</Grid>
					<Grid item xs={6}>
						<Typography component="h3" variant="h5">
							Equity Funding
						</Typography>
						<Typography component="p">
							Money sourced internally or from others, often for a stake of the
							business.
						</Typography>
						<List>
							<Typography component="li" className={styles.list}>
								Self-funding (boot strapping) the initial phases of your
								business with your own finances.
							</Typography>
							<Typography component="li" className={styles.list}>
								Friends or family involved in the business by providing funding,
								often through a partnership arrangement.
							</Typography>
							<Typography component="li" className={styles.list}>
								Private investors contribute for a share of the profits or a
								percentage stake in the business.
							</Typography>
							<Typography component="li" className={styles.list}>
								Venture capitalists, such as large corporates or wealthy
								individuals, who invest large sums of money for a part of the
								business or future profit.
							</Typography>
							<Typography component="li" className={styles.list}>
								Floating the company on the Stock market (Initial Public
								Offering) in return for a share of profits.
							</Typography>
						</List>
					</Grid>
					<Grid item xs={6}>
						<Typography component="h3" variant="h5">
							Grant Funding
						</Typography>
						<Typography component="p">
							Money granted for specific business purposes.
						</Typography>
						<List>
							<Typography component="li" className={styles.list}>
								Government grants can be given at a federal, state or local
								level, for businesses that qualify under certain conditions.
							</Typography>
							<Typography component="li" className={styles.list}>
								Private companies or organisations may offer grants to certain
								causes or businesses as a philanthropic action or establishing
								mutually beneficial ongoing relationships.
							</Typography>
						</List>
					</Grid>
					<Grid item xs={6}>
						<Typography component="h3" variant="h5">
							Crowdfunding
						</Typography>
						<Typography component="p">
							Money raised for a business by a group or community of supporters
							who contribute to a capital pool of funding.
						</Typography>
						<List>
							<Typography component="li" className={styles.list}>
								Multiple platforms facilitate crowdfunding, often asking that
								funders, or “backers” be rewarded for their contribution should
								the project come to fruition.
							</Typography>
							<Typography component="li" className={styles.list}>
								It is important to understand the tax implications of a
								crowdfunded business, as well as your liability for delivering
								to "backers".
							</Typography>
						</List>
					</Grid>
				</Grid>
				<SectionTitle className={styles.SectionTitle}>
					QUICKSNAPS - What to look for when funding your business.
				</SectionTitle>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h5">Purpose of Funding</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Understanding the purpose of funding and the best use of it
									can allow you to make better decisions and ensure you are
									correctly identifying the need.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Depending on where you are in your business lifecycle, will
										the funding be used to start the business, to support your
										working capital commitments or to assist with expansion?
									</Typography>
									<Typography component="li" className={styles.list}>
										Is funding needed for short-term cash flow issues or
										long-term asset purchases? There are different products that
										have different advantages and disadvantages that may make it
										more preferable for short-term needs or long-term needs e.g.
										credit card vs. line of credit.
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
						<Typography variant="h5">Having Enough Funding</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Ensuring you have enough funding to meet financial commitments
									is essential in respect to your cash flow. Alternate avenues
									exist to obtain funding, with some options provided in this
									quicksnap.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Debt is not necessarily a bad thing – it can help start or
										grow your business.
									</Typography>
									<Typography component="li" className={styles.list}>
										If you are not able to personally provide funding, there are
										many different options such as government grants, banks or
										crowdfunding.
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
						<Typography variant="h5">Funding opportunities</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Looking at new avenues for funding could allow growth or
									increased cash flow now.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										What are the different funding opportunities for your
										business?
									</Typography>
									<Typography component="li" className={styles.list}>
										What are the advantages and disadvantages of each funding
										opportunity?
									</Typography>
									<Typography component="li" className={styles.list}>
										Are you able to meet the commitments of your preferred
										financing method?
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
						<Typography variant="h5">Right terms</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Understanding the terms in which you need to pay debts can
									have a dramatic impact on your cash flow.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Do you have enough free cash flow to meet repayments or will
										the terms of your funding constrain ongoing operations of
										the business?
									</Typography>
									<Typography component="li" className={styles.list}>
										Can you renegotiate? Do you have flexibility in the agreed
										terms and can you negotiate these with the bank if required?
									</Typography>
									<Typography component="li" className={styles.list}>
										Are you paying down debt too quickly? Could you use this
										cash more effectively for an alternative purpose?
									</Typography>
								</List>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<Container
					maxWidth="lg"
					component="div"
					className={styles.containerPurple}
				>
					<SectionTitle className={styles.SectionTitle}>
						Funding activity
					</SectionTitle>
					<Typography variant="body1">
						This activity is designed to help you make an informed decision when
						it comes to funding your business. The activity will focus on
						determining the purpose for your funding, ensuring you receive
						enough funding, and understanding the terms that best suit your
						business.
					</Typography>
					<Button
						variant="contained"
						color="secondary"
						size="large"
						className={styles.button}
						startIcon={<PictureAsPdf />}
					>
						Download your own
						<br />
						Funding activity template
					</Button>
				</Container>
				<Container component="div">
					<SectionTitle className={styles.SectionTitle}>Wrap up</SectionTitle>
					<Typography variant="body1">
						Getting into debt or taking on more debt is a big decision and can
						have wide spread impacts for your business. For this reason, it is
						advisable to speak with an accountant or financial advisor to
						understand the different products and start-up options available for
						your needs, particularly those that are not offered by a bank such
						as government grants and/or crowdfunding.
					</Typography>
					<Typography variant="body1">
						If you already have loans or credit you might like to speak to your
						bank to discuss your current banking arrangements and revisit
						whether they are suitable for your current business operations and
						any short-term funding requirements.
					</Typography>
				</Container>
				<Container component="div">
					<SectionTitle className={styles.SectionTitle}>
						More information
					</SectionTitle>
					<Typography variant="body1">
						You might like to visit these links for more information
					</Typography>
					<Button
						variant="contained"
						size="large"
						className={styles.button}
						href="https://www.business.qld.gov.au/starting-business/costs-finance-banking/funding-business"
					>
						Funding your buisiness
					</Button>
					<Button
						variant="contained"
						size="large"
						className={styles.button}
						href="https://www.business.gov.au/Finance/Seeking-finance/Reasons-and-options-for-seeking-finance"
					>
						Reasons for seeking finance
					</Button>
				</Container>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</>
	)
}

export default DTFundingBusiness
