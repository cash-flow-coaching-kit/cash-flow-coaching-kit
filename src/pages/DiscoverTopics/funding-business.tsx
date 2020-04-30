import React, { ReactElement } from "react"
import {
	Typography,
	Grid,
	makeStyles,
	List,
	Card,
	CardHeader,
	CardActions,
	CardMedia,
	Button,
} from "@material-ui/core"
import { SectionTitle } from "../../components/Content"
import { PrivatePage, PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"

const useDTStyles = makeStyles((theme) => ({
	tagline: {
		marginBottom: theme.spacing(4),
	},
	container: {
		paddingTop: theme.spacing(5),
	},
	grid: {
		paddingTop: theme.spacing(5),
	},
	SectionTitle: {
		paddingTop: theme.spacing(5),
	},
	embed: {
		minHeight: "300px",
		border: "none",
	},
}))

const DTFundingBusiness = (): ReactElement => {
	const styles = useDTStyles()

	return (
		<PrivatePage>
			<PageContainer>
				<Typography variant="h5" align="center" className={styles.tagline}>
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
					<Typography component="li">
						Understand how to fund your business.
					</Typography>
					<Typography component="li">
						Release pressure on cash flow and personal finances.
					</Typography>
					<Typography component="li">Keep the doors open.</Typography>
					<Typography component="li">Meet business goals.</Typography>
					<Typography component="li">Grow your business.</Typography>
					<Typography component="li">
						Provide for personal financial goals.
					</Typography>
				</List>

				<Grid container>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="What advisors think of the kit" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/fAe_2eyAkrU"
							/>
							<CardActions>
								<Button color="primary">Download Transcript</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card variant="outlined">
							<CardHeader title="What advisors think of the kit" />
							<CardMedia
								className={styles.embed}
								component="iframe"
								src="https://www.youtube.com/embed/BTwVYKfGyuk"
							/>
							<CardActions>
								<Button color="primary">Download Transcript</Button>
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
							<Typography component="li">
								Financial Institutions such as a bank loan, line of credit, or
								equipment lease.
							</Typography>
							<Typography component="li">
								Retailers that offer the use of store credit to purchase goods
								or equipment.
							</Typography>
							<Typography component="li">
								Suppliers that allow you to delay your payment of goods and
								services.
							</Typography>
							<Typography component="li">
								Factor Companies are third parties that buy your unpaid
								invoices, giving you cash now.
							</Typography>
							<Typography component="li">
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
							<Typography component="li">
								Self-funding (boot strapping) the initial phases of your
								business with your own finances.
							</Typography>
							<Typography component="li">
								Friends or family involved in the business by providing funding,
								often through a partnership arrangement.
							</Typography>
							<Typography component="li">
								Private investors contribute for a share of the profits or a
								percentage stake in the business.
							</Typography>
							<Typography component="li">
								Venture capitalists, such as large corporates or wealthy
								individuals, who invest large sums of money for a part of the
								business or future profit.
							</Typography>
							<Typography component="li">
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
							<Typography component="li">
								Government grants can be given at a federal, state or local
								level, for businesses that qualify under certain conditions.
							</Typography>
							<Typography component="li">
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
							<Typography component="li">
								Multiple platforms facilitate crowdfunding, often asking that
								funders, or “backers” be rewarded for their contribution should
								the project come to fruition.
							</Typography>
							<Typography component="li">
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
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</PrivatePage>
	)
}

export default DTFundingBusiness
