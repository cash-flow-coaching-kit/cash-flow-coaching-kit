import React, { ReactElement } from "react"
import {
	Typography,
	Grid,
	List,
	Container,
	Button,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useDTStyles from "./_config/styles"
import Taskbuilder from "../../components/Taskbuilder"
import QuicksnapsPanel from "../../components/QuicksnapsPanel"

const DTSellingClosingSuccession = (): ReactElement => {
	const styles = useDTStyles()

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
							Selling, closing and succession planning
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
							gutterBottom
						>
							Most business owners will reach a time when they consider exiting
							their business. There are many reasons you may want to exit your
							business, including financial concerns, challenges around managing
							the business or personal reasons such as retirement.
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							Exiting your business can be a complex and emotional time. You can
							successfully navigate this process by seeking professional advice
							from your business advisor, accountant and/or solicitor, to
							understand your options and obligations.
						</Typography>
						<Typography component="h2" className={styles.SectionTitle}>
							Quicksnaps - Deciding how to exit your business.
						</Typography>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="purpose-exiting-content"
								id="purpose-exiting-header"
							>
								<Typography variant="h5" component="h3">
									Purpose for exiting
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Grid container spacing={3}>
									<Grid item sm={6}>
										<Typography variant="h6" component="h4">
											Why?
										</Typography>
										<Typography>
											When deciding to exit your business, it is important to
											consider the underlying reason for this decision.
										</Typography>
									</Grid>
									<Grid item sm={6}>
										<List>
											<Typography component="li" className={styles.list}>
												Have you reached your business goal?
											</Typography>
											<Typography component="li" className={styles.list}>
												Is the decision to exit right for you at this time?
												Consider whether the decision to exit is a 'business'
												decision or a 'personal' decision. Many small businesses
												are a very personal matter for owners.
											</Typography>
											<Typography component="li" className={styles.list}>
												If you are considering exiting for business reasons, it
												can be useful to seek professional advice from your
												business advisor, accountant and/or solicitor. They can
												provide support options for you to consider before
												exiting your business, especially if you are having
												difficulties running the business, keeping on top of
												business obligations, or managing financial pressures.
											</Typography>
											<Typography component="li" className={styles.list}>
												If you are considering exiting for personal reasons, it
												can be useful to seek advice from your family, friends
												or trusted confidants.
											</Typography>
											<Typography component="li" className={styles.list}>
												Have you considered what you will do if you exit your
												business? You may be looking to retire, start a new
												business or go into employment.
											</Typography>
										</List>
									</Grid>
								</Grid>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="family-objectives-support-content"
								id="family-objectives-support-header"
							>
								<Typography variant="h5" component="h3">
									Family objectives and support
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Grid container spacing={3}>
									<Grid item sm={6}>
										<Typography variant="h6" component="h4">
											Why?
										</Typography>
										<Typography>
											Where your business is a family business, consider family
											objectives when deciding to exit your business.
										</Typography>
									</Grid>
									<Grid item sm={6}>
										<List>
											<Typography component="li" className={styles.list}>
												Have you discussed your decision with your family?
												Consider involving your professional advisor/s in these
												discussion to support the family to understand the
												implications of any business exit.
											</Typography>
											<Typography component="li" className={styles.list}>
												Will a family member take over the business (family
												succession plan)? If so, do they currently have the
												skills and experience to do this?
											</Typography>
											<Typography component="li" className={styles.list}>
												Will you remain involved in the business? For example
												there may be a period of transition while other members
												of the family step into your role.
											</Typography>
											<Typography component="li" className={styles.list}>
												Where the business is sold, have you considered if/how
												sale proceeds would be distributed between family
												members?
											</Typography>
											<Typography component="li" className={styles.list}>
												Are all key family members supportive of the decisions
												being made?
											</Typography>
										</List>
									</Grid>
								</Grid>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="options-exit-content"
								id="options-exit-header"
							>
								<Typography variant="h5" component="h3">
									Options to exit
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Grid container spacing={3}>
									<Grid item sm={6}>
										<Typography variant="h6" component="h4">
											Why?
										</Typography>
										<Typography>
											Once you have decided to exit your business, your next
											important decision is how you will exit your business.
											There are several options, the most common are selling
											your business or closing your business down.
										</Typography>
									</Grid>
									<Grid item sm={6}>
										<List>
											<Typography component="li" className={styles.list}>
												Consider if your business is profitable? If your
												business is not currently profitable, or is unlikely to
												be profitable in the near future, closing your business
												may be the best course of action.
											</Typography>
											<Typography component="li" className={styles.list}>
												If you were to sell and exit your business, would your
												business still have value? For example, it may be
												challenging to sell your business if you are a sole
												trader and your business value is based predominantly on
												you and your networks.
											</Typography>
											<Typography component="li" className={styles.list}>
												If applicable, do you have a family succession plan for
												the business?
											</Typography>
										</List>
									</Grid>
								</Grid>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="preparing-exit-content"
								id="preparing-exit-header"
							>
								<Typography variant="h5" component="h3">
									Preparing for exit
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Grid container spacing={3}>
									<Grid item sm={6}>
										<Typography variant="h6" component="h4">
											Why?
										</Typography>
										<Typography>
											Planning for a business exit is crucial. Planning enables
											you to make informed decisions, positions you to take
											advantage of opportunities and supports a clean and
											efficient exit.
										</Typography>
									</Grid>
									<Grid item sm={6}>
										<List>
											<Typography component="li" className={styles.list}>
												Is your record keeping up to date?
											</Typography>
											<Typography component="li" className={styles.list}>
												Have you separated your personal affairs from any
												affairs of the business?
											</Typography>
											<Typography component="li" className={styles.list}>
												Do you have any outstanding financial obligations that
												need to be settled?
											</Typography>
											<Typography component="li" className={styles.list}>
												Are there any legal or operational risks that need to be
												managed?
											</Typography>
											<Typography component="li" className={styles.list}>
												Are you continuing to meet the ongoing financial
												commitments of the business?
											</Typography>
										</List>
									</Grid>
								</Grid>
							</AccordionDetails>
						</Accordion>
					</Grid>
					<Grid item xs={12} md={4} lg={3}>
						<Taskbuilder container="transition" />
						<QuicksnapsPanel filename="Selling, closing and succession planning - Quicksnaps.pdf" />
					</Grid>
				</Grid>
				<Typography component="h2" className={styles.SectionTitle}>
					Nine considerations when selling your business
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Prepare early
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							Early preparation is important to get your business in sale-ready.
							You will be able to respond quickly to changes and opportunities
							in the market.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Value your business
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							Set an appropriate sales price, based on what your business is
							worth now and its potential. Your business advisor or accountant
							can help you determine the appropriate value.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Your role in the business
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							If you are the primary person driving the success of your
							business, consider how value will be retained after you exit. You
							could consider bringing in a CEO or manager prior to the sale to
							help with transition. Alternatively, a buyer may negotiate for you
							to stay in the business for a transition period.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Who will buy your business?
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							You need a willing buyer. Consider your potential buyers and
							whether the market conditions are in your favour. Consider your
							sales strategy. Will you use a business broker, formal
							advertising, or directly approach other businesses in your
							industry?
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							What are you selling?
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							Are you selling the assets of the business (for example, equipment
							or machinery), or your ownership entitlement in the business (for
							example shares in a private company). Seek advice from your
							business advisor or tax accountant on different legal and tax
							outcomes.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Document the sale in a legal contract
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							Once you have secured a buyer, draft a robust sale contract to
							reflect your negotiations and intentions. Consider seeking help
							from a qualified legal professional.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Your tax and legal obligations
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							There are a number of tax and legal matters to consider:
						</Typography>
						<List>
							<Typography component="li" className={styles.list}>
								Capital Gains Tax (CGT) obligations. Discuss with your tax
								accountant whether you are eligible for small business CGT
								concessions.
							</Typography>
							<Typography component="li" className={styles.list}>
								Settle all outstanding obligations with the ATO, including
								finalising tax returns, activity statements and installment
								notices.
							</Typography>
							<Typography component="li" className={styles.list}>
								Cancel your ABN and transfer your business name to the new
								owner.
							</Typography>
						</List>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Proceeds from sale
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							Seek advice from your accountant about managing the sales
							proceeds, including establishing the right entity structures,
							wealth management strategies and estate planning processes.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Maintain business records
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							Retain records in accordance with the Privacy Act and other
							relevant legislation and regulation. Your advisor can help you
							decide on the best approach for your circumstances.
						</Typography>
					</Grid>
				</Grid>
				<Typography component="h2" className={styles.SectionTitle}>
					Six considerations when closing your business
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Advise employees
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							You must provide written notice to your employees and pay any
							outstanding employee entitlements such as wages and accrued leave.
							You will need to settle any employee obligations such as
							pay-as-you-go (PAYG) withholding and superannuation payments.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Advise suppliers and customers
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							Let your suppliers and customers know that you will be closing
							operations. Finalise any outstanding business contracts such as
							property leases, and any outstanding business transactions such as
							debts owed to creditors.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Dispose of the business assets
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							Your business is likely to have assets such as equipment,
							machinery or vehicles that will need to be sold or transferred.
							Discuss the tax implication of the sale of these assets with your
							tax accountant.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Your tax and legal obligations
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							There are a number of tax and legal matters that need to be
							considered:
						</Typography>
						<List>
							<Typography component="li" className={styles.list}>
								Capital Gains Tax (CGT) obligations. Discuss with your tax
								accountant whether you may be eligible for small business CGT
								concessions.
							</Typography>
							<Typography component="li" className={styles.list}>
								Settle all outstanding obligations with the ATO, including
								finalising tax returns, activity statements and installment
								notices.
							</Typography>
							<Typography component="li" className={styles.list}>
								Cancel your ABN and your business name.
							</Typography>
						</List>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Legally close your business
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							The process to legally close your business will depend on the
							structure of your business. For example, closing a private company
							is guided by the company’s constitution. A company officially
							closes when it is deregistered with ASIC. Other structures such as
							trusts and partnerships have different processes to follow. Your
							advisor can help you decide on the best approach for your
							circumstances.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Typography component="h3" variant="h5">
							Maintain business records
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							You are legally required to keep business records including
							financial records, customer records and employee records,
							generally for a minimum of 5 years. Where the business is a
							private company, ASIC also requires certain meeting minutes to be
							documented and retained.
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							Retain records in accordance with the Privacy Act and other
							relevant legislation and regulation. Your advisor can help you
							decide on the best approach for your circumstances.
						</Typography>
					</Grid>
				</Grid>
				<Container component="div" className={styles.containerWrapUp}>
					<Typography component="h2" className={styles.SectionTitle}>
						Wrap up
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
					>
						Exiting your business can be a complex and emotional time. Don't
						forget to look after yourself. Seek professional advice from you
						business advisor, accountant and/or solicitor to help you
						successfully navigate this process.
					</Typography>
				</Container>
				<Container component="div" className={styles.containerMoreInfo}>
					<Typography component="h2" className={styles.SectionTitle}>
						More information
					</Typography>
					<Typography
						variant="body1"
						component="p"
						className={styles.contentText}
						gutterBottom
					>
						You might like to visit these links for more information
					</Typography>
					<Grid container spacing={3}>
						<Grid item sm={6} md={3}>
							<Button
								size="large"
								fullWidth
								variant="contained"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.button}
								href="https://www.business.gov.au/closing/selling-or-closing"
							>
								Selling or closing
							</Button>
						</Grid>
						<Grid item sm={6} md={3}>
							<Button
								size="large"
								fullWidth
								variant="contained"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.button}
								href="https://www.business.gov.au/Closing/Selling-or-closing/Close-your-business"
							>
								Close your business
							</Button>
						</Grid>
						<Grid item sm={6} md={3}>
							<Button
								size="large"
								fullWidth
								variant="contained"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.button}
								href="https://www.business.gov.au/Closing/Selling-or-closing/Sell-your-business"
							>
								Sell your business
							</Button>
						</Grid>
						<Grid item sm={6} md={3}>
							<Button
								size="large"
								fullWidth
								variant="contained"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.button}
								href="https://asic.gov.au/for-business/closing-your-company/deregistration/"
							>
								Deregister your company
							</Button>
						</Grid>
					</Grid>
				</Container>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</>
	)
}

export default DTSellingClosingSuccession
