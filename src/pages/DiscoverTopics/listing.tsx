import React, { ReactElement } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
	Typography,
	Grid,
	List,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
} from "@material-ui/core"
import { PrivatePage, PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import SectionTitle from "../../components/SectionTitle"
import { PrivateRoutes } from "../../util/routes/routes"
import useDTStyles from "./_config/styles"

const DTListing = (): ReactElement => {
	const styles = useDTStyles()

	return (
		<PrivatePage>
			<PageContainer>
				<Typography variant="h5" align="center" className={styles.tagline}>
					Build knowledge on key areas of your business
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={3}>
						<SectionTitle>1. The Four Key Questions</SectionTitle>
						<Typography variant="body1">
							There are four simple questions that determine the cash flow
							health of your business. No matter how big a business is or what
							stage it is at, answering these Four Key Questions are the
							foundation to set you up to succeed.
						</Typography>
						<List>
							<Typography component="li">
								<Typography variant="h5">Profit</Typography>
								Am I trading profitably?
							</Typography>
							<Typography component="li">
								<Typography variant="h5">Provisioning</Typography>
								Have I put enough aside to meet my regular financial
								commitments?
							</Typography>
							<Typography component="li">
								<Typography variant="h5">Liquidity</Typography>
								Does my business have enough to spend on myself and pay others?
							</Typography>
							<Typography component="li">
								<Typography variant="h5">Meeting Goals</Typography>
								Is my business improving its financial position?
							</Typography>
						</List>
					</Grid>
					<Grid item xs={9}>
						<SectionTitle>2. Cash Flow Topics</SectionTitle>
						<Typography variant="body1">
							There are six knowledge topics to help businesses effectively
							manage cash flow.
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								<Card>
									<CardMedia
										component="img"
										alt="Planning your business"
										height="140"
										image="https://www.cashflowcoachingkit.com.au/static/media/planning-business.ebd51a56.png"
										title="Planning your business"
									/>
									<CardContent>
										<Typography gutterBottom variant="body1" component="h3">
											Planning Your business
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											component={RouterLink}
											to={PrivateRoutes.DTPlanningBusiness}
										>
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid item xs={4}>
								<Card>
									<CardMedia
										component="img"
										alt="Record Keeping"
										height="140"
										image="https://www.cashflowcoachingkit.com.au/static/media/budget.e07d4e44.png"
										title="Record Keeping"
									/>
									<CardContent>
										<Typography gutterBottom variant="body1" component="h3">
											Record Keeping
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											component={RouterLink}
											to={PrivateRoutes.DTRecordKeeping}
										>
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid item xs={4}>
								<Card>
									<CardMedia
										component="img"
										alt="Funding your business"
										height="140"
										image="https://www.cashflowcoachingkit.com.au/static/media/funding.a3b58fb3.png"
										title="Funding your business"
									/>
									<CardContent>
										<Typography gutterBottom variant="body1" component="h3">
											Funding your business
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											component={RouterLink}
											to={PrivateRoutes.DTFundingBusiness}
										>
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid item xs={4}>
								<Card>
									<CardMedia
										component="img"
										alt="Managing your cash flow"
										height="140"
										image="https://www.cashflowcoachingkit.com.au/static/media/managing.1825be92.png"
										title="Managing your cash flow"
									/>
									<CardContent>
										<Typography gutterBottom variant="body1" component="h3">
											Managing your cash flow
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											component={RouterLink}
											to={PrivateRoutes.DTManagingCashFlow}
										>
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid item xs={4}>
								<Card>
									<CardMedia
										component="img"
										alt="Planning your regular Financial commitments"
										height="140"
										image="https://www.cashflowcoachingkit.com.au/static/media/planning-commitments.71750b55.png"
										title="Planning your regular Financial commitments"
									/>
									<CardContent>
										<Typography gutterBottom variant="body1" component="h3">
											Planning your regular Financial commitments
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											component={RouterLink}
											to={PrivateRoutes.DTPlanningFinanicalCommitments}
										>
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Grid>{" "}
							<Grid item xs={4}>
								<Card>
									<CardMedia
										component="img"
										alt="Tracking your performance"
										height="140"
										image="https://www.cashflowcoachingkit.com.au/static/media/tracking.66e33c25.png"
										title="Tracking your performance"
									/>
									<CardContent>
										<Typography gutterBottom variant="body1" component="h3">
											Tracking your performance
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											component={RouterLink}
											to={PrivateRoutes.DTTrackingPerformance}
										>
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</PrivatePage>
	)
}

export default DTListing
