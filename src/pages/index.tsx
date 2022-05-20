import React, { ReactElement, useContext } from "react"
import { Link as RouterLink } from "react-router-dom"
// import ReactGA from "react-ga"
import ImportClient from "../components/ClientListing/_partials/ImportClient"
import TakeATourButton from "../components/TakeATour/TakeATourButton"
import {
	Typography,
	Container,
	Button,
	Grid,
	Card,
	CardMedia,
	CardActions,
	CardContent,
	Box,
	CardHeader,
	Avatar,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { PrivateRoutes } from "../util/routes/routes"
import { PublicNavbar } from "../components/Navbar"
import { NewClientDialog } from "../content/dialog"
import { ClientContext } from "../state/client"
import Spacer from "../components/Spacer"

const useHomepageStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(5),
	},
	grid: {
		marginTop: theme.spacing(8),
	},
	gridWrap: {
		width: "320px",
		marginTop: "30px",
		marginBottom: "10px",
	},
	buttonBox: {
		marginTop: theme.spacing(5),
		display: "flex",
		justifyContent: "left",
		"& .MuiButton-root + .MuiButton-root": {
			marginLeft: theme.spacing(1),
		},
	},
	embed: {
		minHeight: "300px",
		border: "none",
	},
	cardActions: {
		justifyContent: "flex-end",
	},
	containerIndigo: {
		backgroundColor: "#5C5C5C", // indigo50
		color: "white",
		padding: theme.spacing(5),
	},
	padding: {
		paddingTop: "60px",
		paddingBottom: "60px",
	},
	containerGrey: {
		backgroundColor: "#f5f5f5",
		padding: theme.spacing(2),
		marginTop: theme.spacing(3),
	},
	containerGreyHeight: {
		backgroundColor: "#f5f5f5",
		padding: theme.spacing(2),
		marginTop: theme.spacing(3),
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},
	contentText: {
		margin: theme.spacing(2, 0),
		width: "100%",
	},
	footerText: {
		margin: theme.spacing(2, 0),
		width: "50%",
	},
	aboutText: {
		textAlign: "center",
		marginBottom: 24,
	},
	splitCont: {
		width: "55%",
		float: "right",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-center",
	},

	splitContLeft: {
		width: "45%",
		float: "left",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "right",

		alignContent: "right",
	},
	alignJustifyContent: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		alignItems: "center",
		alignContent: "center",
		margin: theme.spacing(2, 1),
	},
	purple: {
		color: theme.palette.getContrastText("#9c27b0"),
		backgroundColor: "#9c27b0",
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginTop: theme.spacing(2),
		fontSize: "1.8rem",
	},
	green: {
		color: theme.palette.getContrastText("#43a047"),
		backgroundColor: "#43a047",
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginTop: theme.spacing(2),
		fontSize: "1.8rem",
	},
	blue: {
		color: theme.palette.getContrastText("#0091ea"),
		backgroundColor: "#0091ea",
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginTop: theme.spacing(2),
		fontSize: "1.8rem",
	},
	red: {
		color: theme.palette.getContrastText("#c74f23"),
		backgroundColor: "#c74f23",
		width: theme.spacing(7),
		height: theme.spacing(7),
		marginTop: theme.spacing(2),
		fontSize: "1.8rem",
	},
	MainHeading: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(1),
		fontSize: "2.2rem",
		fontWeight: "bold",
	},
	SectionTitle: {
		paddingTop: theme.spacing(1),
		fontSize: "28px",
		fontFamily: "Roboto, Helvetica",
	},
	SectionTitleSecond: {
		paddingTop: theme.spacing(1),
		fontSize: "28px",
		fontFamily: "Roboto, Helvetica",
		textAlign: "center",
	},
	testing: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
	},
	testing2: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
}))

const Homepage = (): ReactElement => {
	const {
		state: { clients },
	} = useContext(ClientContext)
	const styles = useHomepageStyles()

	const hasClients = (): boolean => clients.length > 0

	return (
		<>
			<PublicNavbar hasClients={hasClients()} />
			<Box role="main">
				<Container maxWidth="lg" className={styles.container}>
					<Typography
						align="left"
						component="h1"
						className={styles.MainHeading}
					>
						Help businesses improve <br></br>their cash flow
					</Typography>
					<div className="w-[40%]">
						<Typography align="left" component="p" variant="h5">
							Help small businesses build cash flow capability, meet their
							<br></br>
							financial commitments and take action to thrive with this<br></br>
							practical toolkit.{" "}
						</Typography>
						<br></br>
						<Typography align="left" component="p" variant="h5">
							Ask your trusted adviser about the Cash Flow Coaching Kit to
							<br></br>
							better manage cash flow in your business.
						</Typography>
					</div>
					<div className="w-[25%]">
						<TakeATourButton />
					</div>
					<CardActions />
				</Container>
				<Container
					maxWidth={false}
					component="div"
					className={styles.containerGreyHeight}
				>
					<Container component="div" maxWidth="lg">
						<div className={styles.testing}>
							<div className={styles.splitContLeft} id="floatFull">
								<h2 className={styles.SectionTitle}>
									Turn cash flow theory into <br></br>practical solutions
								</h2>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
									align="left"
								>
									Use the Cash Flow Coaching Kit to help small businesses
									recognise <br></br>the cash flow success factors and focus on
									four key questions:
								</Typography>
								<Box className={styles.buttonBox}>
									{hasClients() ? (
										<Button
											color="primary"
											variant="contained"
											component={RouterLink}
											to={PrivateRoutes.ClientList}
											size="large"
										>
											Get Started
										</Button>
									) : (
										<NewClientDialog triggerText="Get Started" />
									)}
									<ImportClient />
								</Box>
							</div>
							<div className={styles.splitCont}>
								<div className={styles.testing}>
									<Grid
										item
										xs={10}
										sm={4}
										className={styles.alignJustifyContent}
									>
										<Avatar className={styles.purple}>1</Avatar>

										<Typography
											variant="body1"
											component="p"
											className={styles.contentText}
											align="center"
										>
											Are you trading profitably?
										</Typography>
									</Grid>
									<Grid
										item
										xs={12}
										sm={4}
										className={styles.alignJustifyContent}
									>
										<Avatar className={styles.green}>2</Avatar>

										<Typography
											variant="body1"
											component="p"
											className={styles.contentText}
											align="center"
										>
											Have you put enough aside to meet your regular financial
											commitments?{" "}
										</Typography>
									</Grid>
									<Grid
										item
										xs={12}
										sm={4}
										className={styles.alignJustifyContent}
									>
										<Avatar className={styles.blue}>3</Avatar>

										<Typography
											variant="body1"
											component="p"
											className={styles.contentText}
											align="center"
										>
											Does your business have enough to spend on yourself and
											pay others?{" "}
										</Typography>
									</Grid>
									<Grid
										item
										xs={12}
										sm={4}
										className={styles.alignJustifyContent}
									>
										<Avatar className={styles.red}>4</Avatar>

										<Typography
											variant="body1"
											component="p"
											className={styles.contentText}
											align="center"
										>
											Is your business improving its financial position?{" "}
										</Typography>
									</Grid>
								</div>
							</div>
						</div>
					</Container>
				</Container>
				<Spacer space={5} />
				<Container maxWidth="lg">
					<div className={styles.testing2}>
						<Grid item xs={12} sm={4}>
							<h2 className={styles.SectionTitle}>
								Join thousands of advisors helping their clients’ businesses
								succeed
							</h2>

							<Typography
								variant="body1"
								component="p"
								className={styles.contentText}
								align="left"
							>
								Trusted advisers across the country are using the Cash Flow
								Coaching Kit to help small businesses uplift their financial and
								cash flow capability.
							</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<Card variant="outlined">
								<CardHeader title="What advisors think of the kit" />
								<CardMedia
									className={styles.embed}
									component="iframe"
									title="What advisors think of the kit"
									src="https://www.youtube.com/embed/z64Bc5K2TKo?rel=0&modestbranding=1"
								/>
								<CardActions>
									<Button
										color="primary"
										href="/transcripts/What advisors think of the kit.pdf"
										aria-label="Download transcript: What advisors think of the kit"
										target="_blank"
										rel="noopener noreferrer"
									>
										Download Transcript
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</div>
					<Spacer space={5} />
				</Container>
				<Container
					maxWidth={false}
					component="div"
					className={styles.containerGrey}
				>
					<div className={styles.padding}>
						<Container maxWidth="lg">
							<h2 className={styles.SectionTitleSecond}>
								See how the tools work
							</h2>
							<div className={styles.testing}>
								<div className={styles.gridWrap}>
									<Grid item>
										<Card>
											<CardMedia
												component="img"
												height="155"
												image="/images/healthCheck_thumb.png"
												title="Health check"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													Health Check
												</Typography>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
												>
													Answer 10 questions to learn about the health of your
													business.
												</Typography>
											</CardContent>
											<CardActions className={styles.cardActions}></CardActions>
										</Card>
									</Grid>
								</div>
								<div className={styles.gridWrap}>
									<Grid item>
										<Card>
											<CardMedia
												component="img"
												alt="Discover Topics"
												height="155"
												image="/images/discoverTopics_thumb.png"
												title="Discover Topics"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													Discover Topics
												</Typography>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
												>
													Build your business knowledge with activities and
													ideas that you can do at any time.
												</Typography>
											</CardContent>
											<CardActions className={styles.cardActions}></CardActions>
										</Card>
									</Grid>
								</div>
								<div className={styles.gridWrap}>
									<Grid item>
										<Card>
											<CardMedia
												component="img"
												alt="Cash Flow Canvas"
												height="155"
												image="/images/cashFlowCanvas_thumb.png"
												title="Cash Flow Canvas"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													Cash Flow Canvas
												</Typography>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
												>
													Input simple figures to review, plan, change and track
													your cash flow.
												</Typography>
											</CardContent>
											<CardActions className={styles.cardActions}></CardActions>
										</Card>
									</Grid>
								</div>
								<div className={styles.gridWrap}>
									<Grid item>
										<Card>
											<CardMedia
												component="img"
												alt="Change Levers"
												height="155"
												image="/images/changeLevers_thumb.png"
												title="Change Levers"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													Change Levers
												</Typography>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
												>
													Explore practical ideas and actions to improve your
													cash flow.
												</Typography>
											</CardContent>
											<CardActions className={styles.cardActions}></CardActions>
										</Card>
									</Grid>
								</div>
								<div className={styles.gridWrap}>
									<Grid item>
										<Card>
											<CardMedia
												component="img"
												alt="Action Checklist"
												height="155"
												image="/images/actionChecklist_thumb.png"
												title="Action Checklist"
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
													Action Checklist
												</Typography>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
												>
													Maintain a list of actions and deadlines to help you
													track your cash flow improvements over time.
												</Typography>
											</CardContent>
											<CardActions className={styles.cardActions}></CardActions>
										</Card>
									</Grid>
								</div>
							</div>
						</Container>
					</div>
				</Container>

				<Container
					component="div"
					className={styles.containerIndigo}
					maxWidth={false}
				>
					<Container maxWidth="lg">
						<h2>Privacy</h2>
						<Typography
							variant="body2"
							component="p"
							className={styles.footerText}
							align="left"
							id="footerID"
						>
							This website does not collect or store any personal information,
							including the name of your business, any financial records, or any
							action you are taking with your business. Please refer to the
							Terms and Conditions for use and our Data usage and privacy
							statement.
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={styles.footerText}
							align="left"
							id="footerID"
						>
							The data you enter the Kit will be stored on this device only.
							Exiting or clearing your browser cache will erase all unsaved
							client data. We recommend regularly using the Export data function
							from the Client List to avoid data loss.
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={styles.footerText}
							align="left"
							id="footerID"
						>
							Please refer to the
							<a
								href="/docs/Terms and Conditions.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms &amp; Conditions
							</a>{" "}
							for use and our Data usage and{" "}
							<a
								href="/docs/Data usage and privacy statement.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								privacy statement.
							</a>
						</Typography>
					</Container>
				</Container>
			</Box>
		</>
	)
}

export default Homepage
