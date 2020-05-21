import React, { ReactElement } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
	Typography,
	Grid,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Button,
	Divider,
	CardActionArea,
} from "@material-ui/core"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import { PrivateRoutes } from "../../util/routes/routes"
import useDTStyles from "./_config/styles"

const DTListing = (): ReactElement => {
	const styles = useDTStyles()

	return (
		<>
			<PageContainer role="main">
				<Typography component="h1" align="center" className={styles.tagline}>
					Build knowledge on key areas of your business
				</Typography>
				<Grid container spacing={3}>
					<Grid item md={9}>
						<Typography component="h2" className={styles.SectionTitle}>
							Cash Flow Topics
						</Typography>
						<Typography
							variant="body1"
							component="p"
							className={styles.contentText}
						>
							There are six knowledge topics to help businesses effectively
							manage cash flow.
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6} md={4}>
								<Card>
									<CardActionArea
										component={RouterLink}
										to={PrivateRoutes.DTPlanningBusiness}
									>
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
									</CardActionArea>
								</Card>
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Card>
									<CardActionArea
										component={RouterLink}
										to={PrivateRoutes.DTRecordKeeping}
									>
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
									</CardActionArea>
								</Card>
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Card>
									<CardActionArea
										component={RouterLink}
										to={PrivateRoutes.DTFundingBusiness}
									>
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
									</CardActionArea>
								</Card>
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Card>
									<CardActionArea
										component={RouterLink}
										to={PrivateRoutes.DTManagingCashFlow}
									>
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
									</CardActionArea>
								</Card>
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Card>
									<CardActionArea
										component={RouterLink}
										to={PrivateRoutes.DTPlanningFinanicalCommitments}
									>
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
									</CardActionArea>
								</Card>
							</Grid>
							<Grid item xs={12} sm={6} md={4}>
								<Card>
									<CardActionArea
										component={RouterLink}
										to={PrivateRoutes.DTTrackingPerformance}
									>
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
									</CardActionArea>
								</Card>
							</Grid>
						</Grid>
						<Container component="div" className={styles.container}>
							<Button
								size="large"
								component={RouterLink}
								to={PrivateRoutes.DTSellingClosingSuccession}
								variant="contained"
								color="primary"
								fullWidth
							>
								Considering exiting your business?
							</Button>
						</Container>
					</Grid>
					<Grid item md={3}>
						<Card>
							<CardContent>
								<Typography component="h2" variant="h5">
									The Four Key Questions
								</Typography>

								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
								>
									There are four simple questions that determine the cash flow
									health of your business. No matter how big a business is or
									what stage it is at, answering these Four Key Questions are
									the foundation to set you up to succeed.
								</Typography>
								<Divider className={styles.contentText} />

								<Typography variant="h6" component="h3" gutterBottom>
									1. Profit
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
									gutterBottom
								>
									Am I trading profitably?
								</Typography>
								<Divider className={styles.contentText} />

								<Typography variant="h6" component="h3" gutterBottom>
									2. Provisioning
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
									gutterBottom
								>
									Have I put enough aside to meet my regular financial
									commitments?
								</Typography>
								<Divider className={styles.contentText} />
								<Typography variant="h6" component="h3" gutterBottom>
									3. Liquidity
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
									gutterBottom
								>
									Does my business have enough to spend on myself and pay
									others?
								</Typography>
								<Divider className={styles.contentText} />
								<Typography variant="h6" component="h3" gutterBottom>
									4. Meeting Goals
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
									gutterBottom
								>
									Is my business improving its financial position?
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</PageContainer>

			<PageTip tip="DiscoverTopicsTips" />
		</>
	)
}

export default DTListing
