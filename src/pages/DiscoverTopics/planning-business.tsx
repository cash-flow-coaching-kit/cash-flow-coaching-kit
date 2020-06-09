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
	Container,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PictureAsPdf from "@material-ui/icons/PictureAsPdf"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useDTStyles from "./_config/styles"
import Taskbuilder from "../../components/Taskbuilder"

const DTPlanningBusiness = (): ReactElement => {
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
							Planning your business
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
							gutterBottom
						>
							Planning your business is crucial to being successful. When you
							have a well researched business plan, you are able to accurately
							forecast and analyse your business. This helps you to be
							financially prepared for circumstances outside of your control,
							find opportunities to grow your business, and ensure you don't run
							out of money.
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							<strong>A business plan can help you:</strong>
						</Typography>
						<List>
							<Typography component="li" className={styles.list}>
								Attract funding and find opportunities to grow your business.
							</Typography>
							<Typography component="li" className={styles.list}>
								Estimate the time and cost of starting up, or expanding.
							</Typography>
							<Typography component="li" className={styles.list}>
								Have realistic expectations around demand, value and
								competition.
							</Typography>
							<Typography component="li" className={styles.list}>
								Plan for regular payments such as insurance, superannuation and
								GST.
							</Typography>
							<Typography component="li" className={styles.list}>
								Set the right price for your product and/or services.
							</Typography>
							<Typography component="li" className={styles.list}>
								Be financially prepared for circumstances outside your control.
							</Typography>
							<Typography component="li" className={styles.list}>
								Ensure you don’t run out of money.
							</Typography>
						</List>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Card variant="outlined">
									<CardHeader title="Kirra's Native Foods" />
									<CardMedia
										title="Kirra's Native Foods"
										className={styles.embed}
										component="iframe"
										src="https://www.youtube.com/embed/LhVKOyMeFQE"
									/>
									<CardActions>
										<Button
											color="primary"
											href="/transcripts/Kirras-native-foods.docx"
										>
											Download Transcript: Kirra's Native Foods
										</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid item sm={6}>
								<Card variant="outlined">
									<CardHeader title="Sanjana's Restaurant" />
									<CardMedia
										title="Sanjana's Restaurant"
										className={styles.embed}
										component="iframe"
										src="https://www.youtube.com/embed/Bxj4r3Dh1EQ"
									/>
									<CardActions>
										<Button
											color="primary"
											href="/transcripts/Sanjanas-restaurant.docx"
										>
											Download Transcript: Sanjana's Restaurant
										</Button>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</Grid>
					<Grid item sm={3}>
						<Taskbuilder container="planningBusiness" />
						{/* TODO: Add additional control panel */}
					</Grid>
				</Grid>
				<Typography variant="h4" component="h2" className={styles.SectionTitle}>
					Quicksnaps - Deciding how to exit your business.
				</Typography>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="forecast-demand-content"
						id="forecast-demand-header"
					>
						<Typography variant="h5">Forecast demand</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Forecasting the demand for your product or service will help
									you:
								</Typography>
								<List>
									<Typography component="li" className={styles.list}>
										Satisfy your customers – you will have enough stock to meet
										customer demand.
									</Typography>
									<Typography component="li" className={styles.list}>
										Minimise your stock costs – purchasing enough stock to meet
										demand will cost less than purchasing too much.
									</Typography>
									<Typography component="li" className={styles.list}>
										Optimise your cash flow – reduce your cash out by
										eliminating unnecessary expenditures.
									</Typography>
								</List>
							</Grid>
							<Grid item sm={6}>
								<List>
									<Typography component="li" className={styles.list}>
										What do you sell?
									</Typography>
									<Typography component="li" className={styles.list}>
										Who do you sell it to?
									</Typography>
									<Typography component="li" className={styles.list}>
										If you sell products, what volumes are similar businesses
										generating?
									</Typography>
									<Typography component="li" className={styles.list}>
										If you sell a service, how much time do you have available
										to sell? How much of that time can you charge your customers
										for?
									</Typography>
									<Typography component="li" className={styles.list}>
										How does volume change over time? Is it seasonal?
									</Typography>
									<Typography component="li" className={styles.list}>
										What’s the best case? Can you keep up with demand?
									</Typography>
									<Typography component="li" className={styles.list}>
										What’s the worst case? Do you have enough cash to get
										through it?
									</Typography>
									<Typography component="li" className={styles.list}>
										How would changing market conditions impact your volume?
										Consider competition, industry slow down and changing
										regulations in your assessment.
									</Typography>
								</List>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="right-price-content"
						id="right-price-header"
					>
						<Typography variant="h5">Setting the right price</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Setting the right price for your product or service will
									maximise your cash flow and may remove any potential losses on
									sales. Pricing too high may reduce customers and sales.
									Pricing too low may affect the perceived quality of your
									product or service. A price that is too low is also not
									maximising your profit margin and may lead you to a long term
									loss.
								</Typography>
							</Grid>
							<Grid item sm={6}>
								<List>
									<Typography component="li" className={styles.list}>
										How much profit do you need to make to meet the needs of the
										business and as an owner?
									</Typography>
									<Typography component="li" className={styles.list}>
										How much are the overheads you need to cover?
									</Typography>
									<Typography component="li" className={styles.list}>
										What is the cost of producing your product or service?
									</Typography>
									<Typography component="li" className={styles.list}>
										What are your competitors charging?
									</Typography>
									<Typography component="li" className={styles.list}>
										Do you sell a unique product or service that you could
										charge a premium for?
									</Typography>
									<Typography component="li" className={styles.list}>
										How much could price or volume assumptions change?
									</Typography>
									<Typography component="li" className={styles.list}>
										How big an impact would that have on profit?
									</Typography>
									<Typography component="li" className={styles.list}>
										How much will you sell and how much will you sell it for?
									</Typography>
									<Typography component="li" className={styles.list}>
										How much of a buffer do you need to include in pricing?
									</Typography>
									<Typography component="li" className={styles.list}>
										How much do you need to start your business?
									</Typography>
								</List>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="capital-content"
						id="capital-header"
					>
						<Typography variant="h5">Capital to start up or grow</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item sm={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Securing the right amount of capital to start your business or
									to fund growth will help you keep the business running and
									grow to assist with generating profit. Ask yourself these
									questions to estimate how much you need to start or grow your
									business.
								</Typography>
							</Grid>
							<Grid item sm={6}>
								<List>
									<Typography component="li" className={styles.list}>
										How much do you need to have in reserve while your business
										ramps up?
									</Typography>
									<Typography component="li" className={styles.list}>
										How much can the business afford to fund growth? Will you
										need to personally contribute? If so, how much can you
										afford?
									</Typography>
									<Typography component="li" className={styles.list}>
										What does your cash flow look like over a period of time?
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
					<Typography
						variant="h4"
						component="h2"
						className={styles.SectionTitle}
					>
						Writing a business plan
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
					>
						Writing a business plan can be easier than you think - keep it
						simple to start with and build on it over time. To set your business
						up for success, review your business plan regularly.
					</Typography>
					<Button
						variant="contained"
						color="primary"
						size="large"
						startIcon={<PictureAsPdf />}
						href="/pdf/BusinessPlan-Activity.pdf"
					>
						Build your own business plan
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
						When you review your business plan, look for ways to improve your
						cash flow and financial performance. You can use the canvas tool and
						change lever cards to help you consider what changes you can make in
						your business and the impact they may have on your cash flow.
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
					>
						You may want to discuss your business plan with a professional
						advisor.
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
						<Grid item sm={6} md={3}>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title="Plan for success"
								href="https://www.business.gov.au/New-to-business-essentials/Plan-for-success"
								target="_blank"
								rel="noopener noreferrer"
							>
								Plan for success
							</Button>
						</Grid>

						<Grid item sm={6} md={3}>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title="How to develop your business plan"
								href="https://www.business.gov.au/planning/business-plans/how-to-develop-your-business-plan"
								target="_blank"
								rel="noopener noreferrer"
							>
								How to develop your business plan
							</Button>
						</Grid>
						<Grid item sm={6} md={3}>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title="Starting your business checklist"
								href="https://www.business.gov.au/planning/templates-and-tools/checklists/starting-your-business-checklist"
								target="_blank"
								rel="noopener noreferrer"
							>
								Starting your business checklist
							</Button>
						</Grid>
						<Grid item sm={6} md={3}>
							<Button
								variant="contained"
								fullWidth
								size="large"
								className={styles.button}
								title="Licenses or permits you may require"
								href="https://ablis.business.gov.au/pages/home.aspx"
								target="_blank"
								rel="noopener noreferrer"
							>
								Licenses or permits you may require
							</Button>
						</Grid>
					</Grid>
				</Container>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</>
	)
}

export default DTPlanningBusiness
