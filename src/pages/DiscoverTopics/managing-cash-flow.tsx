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
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useDTStyles from "./_config/styles"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit"
import SectionTitle from "../../components/SectionTitle"
import { PrivateRoutes } from "../../util/routes/routes"

const DTManagingCashFlow = (): ReactElement => {
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
					Managing your cash flow
				</Typography>
				<Typography variant="body1" component="p">
					People often understand the cash part of cash flow, but not the flow
					part. Put simply, cash will move in and out of your business at
					different times, which can create different periods of cash
					availability. It is important to anticipate these periods so that you
					can plan and manage your cash flow so you don’t run out of money.
				</Typography>
				<Typography variant="body1" component="p">
					<strong>Managing your cash flow can help you:</strong>
				</Typography>
				<List>
					<Typography component="li" className={styles.list}>
						Have enough cash to meet obligations.
					</Typography>
					<Typography component="li" className={styles.list}>
						Be prepared for the unexpected, when things do not go as planned.
					</Typography>
					<Typography component="li" className={styles.list}>
						Continue to operate.
					</Typography>
					<Typography component="li" className={styles.list}>
						Pay yourself.
					</Typography>
					<Typography component="li" className={styles.list}>
						Breakdown which cash belongs to you, and which cash is owed to third
						parties.
					</Typography>
				</List>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Yulari's Cash Flow" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/uPDZ6O3FFaY"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Yularis-cash-flow.docx"
								>
									Download Transcript: Yulari's Cash Flow
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="Cameron's Cash Flow" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/aAUWgm3-zL4"
							/>
							<CardActions>
								<Button
									color="primary"
									href="/transcripts/Camerons-cash-flow.docx"
								>
									Download Transcript: Cameron's Cash Flow
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<SectionTitle className={styles.SectionTitle}>
					QUICKSNAPS - Want to know the secrets of successful cash flow?
				</SectionTitle>
				<ExpansionPanel>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography variant="h5">
							The timing of cash flow and the impact on your bank balance
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									It is important to plan for cash coming in and going out, so
									that you can manage the payments you need to make when you
									have not necessarily recouped the funds you are owed.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										The following are examples where you may need to spend cash
										before your customers have paid you: payment for stock,
										salary and wages to staff, and buying tools/supplies
									</Typography>
									<Typography component="li" className={styles.list}>
										You may also have fixed payments, such as rent or lease
										payments on equipment that you have to meet even if you are
										not receiving income from customers. You’ll need to have
										sufficient funds to cover this, sometimes up to several
										months
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
							Profit and cash flow are different
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Profit is not the same as your cash flow. Cash flow
									considerations are based on time and allow you to pay your
									financial commitments. Profit does not include everything you
									spend and may over or under estimate your cash on hand.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Your profit and loss statement might show a profit but
										that’s not how much is in the bank
									</Typography>
									<Typography component="li" className={styles.list}>
										Profit doesn’t include everything you spend, for example
										loan repayments or asset purchases. It may also include
										non-cash items such as depreciation on assets you own
									</Typography>
									<Typography component="li" className={styles.list}>
										Future expenses are often not reported and included in
										profit calculations
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
						<Typography variant="h5">Cash that is not yours</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Just because cash is sitting in your bank account, doesn't
									necessarily mean it is all yours. Understanding what amounts
									may be owed to third parties allows you to make better
									decisions, and budget for upcoming expenses.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										Supplier commitments and overheads such as insurance or rent
										that are outstanding need to be factored in
									</Typography>
									<Typography component="li" className={styles.list}>
										The goods and services tax (GST) portion of sales you
										receive is not yours to spend
									</Typography>
									<Typography component="li" className={styles.list}>
										Pay-As-You-Go withholding (PAYG withholding) and
										superannuation related to wages that need to be paid
									</Typography>
									<Typography component="li" className={styles.list}>
										Any late payments you make can attract penalties and
										interest (i.e. banks, regulatory bodies, government
										agencies, suppliers)
									</Typography>
									<Typography component="li" className={styles.list}>
										Creating a balance sheet can give you a snapshot of your
										business health as this looks at the available capital
										within your business at any one time. This snapshot of your
										business capital can be compared with your current net
										profit to show you that ‘profit’ and ‘health’ are different
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
						<Typography variant="h5">Working capital</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography variant="h6">Why?</Typography>
								<Typography>
									Understanding your working capital and how much you have on
									hand may allow you to make better decisions in respect to
									paying suppliers, the amount of stock you need or any major
									expenditures.
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<List>
									<Typography component="li" className={styles.list}>
										You want your customers to pay you in a shorter timeframe
										than you have to pay your suppliers or other creditors so
										that the money you receive from your customers can be used
										to meet these commitments
									</Typography>
									<Typography component="li" className={styles.list}>
										What is the right amount of stock for your business to
										operate?
									</Typography>
								</List>
							</Grid>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<SectionTitle className={styles.SectionTitle}>
					Seven tips for maximising cash flow
				</SectionTitle>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Pricing
						</Typography>
						<Typography component="p">
							Setting the right price for your products and services will help
							you to maximise profits. An increase in price, that does not
							impact customer demand, will have a positive impact on your cash
							flow.
						</Typography>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Volume
						</Typography>
						<Typography component="p">
							Increasing the range or number of products and services,
							discounting to attract new customers, or selling into new markets
							can increase the volume of your sales to generate greater income.
						</Typography>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Debtors
						</Typography>
						<Typography component="p">
							Collecting payments from your customers as quickly as possible
							will allow you to use the cash within your business. Establish
							clear credit policies and carry out credit checks before setting
							up accounts. Carefully consider the account terms you offer your
							customers and maintain regular communication to ensure they comply
							with these terms. Consider discounts for early payment.
						</Typography>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Assets
						</Typography>
						<Typography component="p">
							Under-utilised or unnecessary assets tie up cash that could be put
							to better use in your business. Consider whether leasing some
							assets is a better option. Sell assets you no longer need.
						</Typography>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Expenses
						</Typography>
						<Typography component="p">
							Think about where you are spending money. Identify which costs are
							necessary for you to generate your income and which are not.
							Consider whether there are some expenses that can be reduced to
							improve your cash flow. Take advantage of credit arrangements and
							discounts where possible.
						</Typography>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Inventory
						</Typography>
						<Typography component="p">
							Maintaining the right levels of the right inventory plays an
							important part in managing your cash flow. Forecast your
							customers’ needs and buy and ship inventory as close to the time
							of sale as possible. Identify, discount and/or return slow moving
							stock to free up cash and shelf-space.
						</Typography>
					</Grid>

					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Staffing
						</Typography>
						<Typography component="p">
							Staff costs are significant expenses for many businesses. In
							addition to the weekly payroll, there are costs associated with
							hiring, training and rewarding staff. Choosing the right staff for
							your business and reducing staff turnover can assist in managing
							these costs. Rostering the right number of staff to cover demand
							is vital to producing your income and preventing unnecessary
							costs.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={8}>
						<Typography component="h3" variant="h5">
							Looking for more ideas to increase your cash flow?
						</Typography>
						<Button
							variant="contained"
							size="large"
							className={styles.button}
							component={RouterLink}
							to={PrivateRoutes.ChangeLevers}
						>
							Change Levers
						</Button>
						<Typography component="p">
							Explore the Change Levers tool to get suggestions on a range of
							actions that focus on improving the cash flow of your business.
						</Typography>
					</Grid>
				</Grid>
				<Container
					maxWidth="lg"
					component="div"
					className={styles.containerActivity}
				>
					<SectionTitle className={styles.SectionTitle}>
						Cash Flow Canvas
					</SectionTitle>
					<Typography variant="body1">
						The Cash Flow Coaching Kit is designed to help you effectively
						manage your cash flow. Use the Cash Flow Canvas to get a clear
						picture of your cash flow, compare your cash flow across multiple
						periods, and test the improvements that potential changes could have
						in your business. Click “Show Me How” at any time to get help using
						the tool.
					</Typography>
					<Button
						variant="contained"
						color="secondary"
						size="large"
						className={styles.button}
						startIcon={<VerticalSplitIcon />}
						component={RouterLink}
						to={PrivateRoutes.CFC}
					>
						Cash flow canvas
					</Button>
				</Container>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</>
	)
}

export default DTManagingCashFlow
