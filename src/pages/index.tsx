import React, { ReactElement, useContext } from "react"
import { Link as RouterLink } from "react-router-dom"
import ReactGA from "react-ga"

import {
	Typography,
	Container,
	Button,
	Grid,
	Card,
	CardMedia,
	CardActions,
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
import handleOpen from "../components/TakeATour"

const useHomepageStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(5),
	},
	grid: {
		marginTop: theme.spacing(8),
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
	containerIndigo: {
		backgroundColor: "#5C5C5C", // indigo50
		color: "white",
		padding: theme.spacing(5),
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
		height: "600px",
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
		justifyContent: "flex-end",
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
	MainHeading: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(1),
		fontSize: "2.2rem",
	},
	SectionTitle: {
		paddingTop: theme.spacing(1),
		fontSize: "1.8rem",
	},
}))

const Homepage = (): ReactElement => {
	const {
		state: { clients },
	} = useContext(ClientContext)
	const styles = useHomepageStyles()

	const hasClients = (): boolean => clients.length > 0
	const triggerGATracking = (type: string) => () => {
		ReactGA.event({
			category: `Download Desktop ( , ${type}  )`,
			action: `User downloaded desktop app for - ,${type}`,
			label: "Download desktop app",
		})
	}

	const uploadConfig = {
		mac: "Cash Flow Coaching Kit.dmg",
		win: "Cash Flow Coaching Kit.exe",
	}
	const desktopDownload = (type: string) => {
		const macLink = `https://${process.env.REACT_APP_AWS_CONTENT_DELIVERY_URL}/mac/${uploadConfig.mac}`
		const winLink = `https://${process.env.REACT_APP_AWS_CONTENT_DELIVERY_URL}/win/${uploadConfig.win}`

		return type === "mac" ? macLink : winLink
	}

	return (
		<>
			<PublicNavbar hasClients={hasClients()} />
			<Box role="main">
				<Container className={styles.container}>
					<Typography
						align="left"
						component="h1"
						className={styles.MainHeading}
					>
						Help buisiness understand <br></br> their business
					</Typography>
					<div className="w-[50%]">
						<Typography align="left" component="p" variant="h5">
							Help small businesses build cash flow capability, meet financial
							<br></br>
							commitments and remain viable with this simple, free toolkit
						</Typography>
					</div>
					<Button
						type="submit"
						variant="contained"
						onClick={handleOpen}
						size="medium"
						color="primary"
						title="Download free desktop application - available for Windows or Mac"
					>
						Take a tour
					</Button>
				</Container>
				<Container
					maxWidth={false}
					component="div"
					className={styles.containerGreyHeight}
				>
					<Container component="div" maxWidth="lg">
						<div className={styles.containerGrey}>
							<div className={styles.splitContLeft}>
								<h2 className={styles.SectionTitle}>
									Turn cash flow theory into <br></br>practical solutions
								</h2>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
									align="left"
								>
									The Cash Flow Coaching Kit turns cash flow theory into
									practical solutions by identifying cash flow success factors
									and focuses on 4 key questions for small businesses
								</Typography>
								<Box className={styles.buttonBox}>
									{hasClients() ? (
										<Button
											color="primary"
											variant="contained"
											component={RouterLink}
											to={PrivateRoutes.ClientList}
											size="medium"
										>
											Get Started
										</Button>
									) : (
										<NewClientDialog triggerText="Get Started" />
									)}
									<form
										method="get"
										action={desktopDownload("mac")}
										target="_blank"
									>
										<Button
											type="submit"
											variant="contained"
											onClick={triggerGATracking("mac")}
											size="medium"
											title="Download free desktop application - available for Windows or Mac"
										>
											Download free desktop app
										</Button>
									</form>
								</Box>
							</div>
							<div className={styles.splitCont}>
								<Grid container spacing={4}>
									<Grid
										item
										xs={10}
										sm={4}
										className={styles.alignJustifyContent}
									>
										<Avatar className={styles.purple}>1</Avatar>

										<Typography
											variant="h6"
											component="h3"
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
											variant="h6"
											component="h3"
											className={styles.contentText}
											align="center"
										>
											Can you meet your regular financial commitments?{" "}
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
											variant="h6"
											component="h3"
											className={styles.contentText}
											align="center"
										>
											3 Does you have enough to spend on yourself and others?{" "}
										</Typography>
									</Grid>
									<Grid
										item
										xs={12}
										sm={4}
										className={styles.alignJustifyContent}
									>
										<Avatar className={styles.blue}>4</Avatar>

										<Typography
											variant="h6"
											component="h3"
											className={styles.contentText}
											align="center"
										>
											Are you improving your financial position year-on-year?{" "}
										</Typography>
									</Grid>
								</Grid>
							</div>
						</div>
					</Container>
				</Container>
				<Spacer space={5} />
				<Container>
					<Grid container spacing={3}>
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
								Tax professionals, business advisors and financial counsellors
								across the country are using the free Cash Flow Coaching kit to
								help small businesses improve the viability of their business.
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
					</Grid>
					<Spacer space={5} />
				</Container>
				<Container
					maxWidth={false}
					component="div"
					className={styles.containerGreyHeight}
				>
					<Container maxWidth="lg">
						<div className={styles.containerGrey}>
							<Grid container spacing={2}>
								<Grid
									item
									xs={10}
									sm={3}
									className={styles.alignJustifyContent}
								>
									<Avatar className={styles.green}>2</Avatar>

									<Typography
										variant="h6"
										component="h3"
										className={styles.contentText}
										align="center"
									>
										Can you meet your regular financial commitments?{" "}
									</Typography>
								</Grid>
								<Grid
									item
									xs={10}
									sm={3}
									className={styles.alignJustifyContent}
								>
									<Avatar className={styles.green}>2</Avatar>

									<Typography
										variant="h6"
										component="h3"
										className={styles.contentText}
										align="center"
									>
										Can you meet your regular financial commitments?{" "}
									</Typography>
								</Grid>
								<Grid
									item
									xs={10}
									sm={3}
									className={styles.alignJustifyContent}
								>
									<Avatar className={styles.green}>2</Avatar>

									<Typography
										variant="h6"
										component="h3"
										className={styles.contentText}
										align="center"
									>
										Can you meet your regular financial commitments?{" "}
									</Typography>
								</Grid>
								<Grid
									item
									xs={10}
									sm={3}
									className={styles.alignJustifyContent}
								>
									<Avatar className={styles.green}>2</Avatar>

									<Typography
										variant="h6"
										component="h3"
										className={styles.contentText}
										align="center"
									>
										Can you meet your regular financial commitments?{" "}
									</Typography>
								</Grid>
								<Grid
									item
									xs={10}
									sm={3}
									className={styles.alignJustifyContent}
								>
									<Avatar className={styles.green}>2</Avatar>

									<Typography
										variant="h6"
										component="h3"
										className={styles.contentText}
										align="center"
									>
										Can you meet your regular financial commitments?{" "}
									</Typography>
								</Grid>
							</Grid>
						</div>
					</Container>
				</Container>
				<Container
					component="div"
					className={styles.containerIndigo}
					maxWidth={false}
				>
					<Container maxWidth="lg">
						<h2>We value your privacy</h2>
						<Typography
							variant="body2"
							component="p"
							className={styles.footerText}
							align="left"
						>
							This website does not collect or store any personal information,
							including the name of your business, any financial records you
							input or upload, or any of the actions you are taking with your
							business.
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={styles.footerText}
							align="left"
						>
							The data you enter into the Cash Flow Coaching Kit will be stored
							on this device only. Exiting or clearing your browser cache will
							erase all unsaved client data.
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={styles.footerText}
							align="left"
						>
							We recommend regularly using the EXPORT DATA function from the
							Client List to avoid data loss. Please refer to the{" "}
							<a
								href="/docs/Terms and Conditions.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms &amp; Conditions
							</a>{" "}
							of use and our{" "}
							<a
								href="/docs/Data usage and privacy statement.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								Data usage and privacy statement
							</a>
							.
						</Typography>
					</Container>
				</Container>
			</Box>
		</>
	)
}

export default Homepage
