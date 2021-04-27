import React, { ReactElement, useContext } from "react"
import { Link as RouterLink } from "react-router-dom"
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
import ImportClient from "../components/ClientListing/_partials/ImportClient"
import TakeATour from "../components/TakeATour"

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
		justifyContent: "center",
		"& .MuiButton-root + .MuiButton-root": {
			marginLeft: theme.spacing(1),
		},
	},
	embed: {
		minHeight: "300px",
		border: "none",
	},
	containerIndigo: {
		backgroundColor: "#e8eaf6", // indigo50
		padding: theme.spacing(5),
		marginTop: theme.spacing(8),
	},
	containerGrey: {
		backgroundColor: "#f5f5f5",
		padding: theme.spacing(2),
		marginTop: theme.spacing(3),
	},
	contentText: {
		margin: theme.spacing(2, 0),
		width: "100%",
	},
	aboutText: {
		textAlign: "center",
		marginBottom: 24,
	},
	alignJustifyContent: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "nowrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		margin: theme.spacing(2, 0),
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

	return (
		<>
			<PublicNavbar hasClients={hasClients()} />
			<Box role="main">
				<Container className={styles.container}>
					<Typography
						align="center"
						component="h1"
						className={styles.MainHeading}
					>
						Cash Flow Coaching Kit
					</Typography>
					<Typography align="center" component="p" variant="h5">
						Understand and improve small business cash flow
					</Typography>
				</Container>
				<Container
					maxWidth={false}
					component="div"
					className={styles.containerGrey}
				>
					<Container component="div" maxWidth="lg">
						<Grid container spacing={3}>
							<Grid item xs={12} sm={4} className={styles.alignJustifyContent}>
								<Avatar className={styles.purple}>1</Avatar>
								<Typography
									component="h2"
									variant="h5"
									className={styles.SectionTitle}
								>
									Discover
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
									align="center"
								>
									Learn about cash flow management.
								</Typography>
							</Grid>
							<Grid item xs={12} sm={4} className={styles.alignJustifyContent}>
								<Avatar className={styles.green}>2</Avatar>
								<Typography
									component="h2"
									variant="h5"
									className={styles.SectionTitle}
								>
									Apply
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
									align="center"
								>
									Understand your current cash flow and plan improvements.
								</Typography>
							</Grid>
							<Grid item xs={12} sm={4} className={styles.alignJustifyContent}>
								<Avatar className={styles.blue}>3</Avatar>
								<Typography
									component="h2"
									variant="h5"
									className={styles.SectionTitle}
								>
									Plan &amp; Action
								</Typography>
								<Typography
									variant="body1"
									component="p"
									className={styles.contentText}
									align="center"
								>
									Create an Action Checklist and track your progress.
								</Typography>
							</Grid>
						</Grid>
					</Container>
				</Container>
				<Spacer space={5} />
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12}>
							<Typography className={styles.aboutText}>
								The Cash Flow Coaching Kit is a coaching resource for tax
								professionals and business advisors to help their small business
								clients manage their cash flow.
							</Typography>
							<Typography className={styles.aboutText}>
								Small businesses are encouraged to seek the assistance of a
								trusted advisor about ways to better manage cash flow and use
								the Cash Flow Coaching Kit.
							</Typography>
							<Typography className={styles.aboutText}>
								GET STARTED to add a new client
							</Typography>
							<Typography className={styles.aboutText}>
								IMPORT DATA to view data from a previous session
							</Typography>
						</Grid>
					</Grid>
					<Spacer space={5} />
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
					<Grid container spacing={3} className={styles.grid}>
						<Grid item xs={12} md={6}>
							<TakeATour />
						</Grid>
						{/* <Grid item xs={12} md={6}>
							<Card variant="outlined">
								<CardHeader title="Take a tour of the kit" />
								<CardMedia
									className={styles.embed}
									component="iframe"
									title="Take a tour of the kit"
									src="https://www.youtube.com/embed/vSoCk1sgV3M?rel=0&modestbranding=1"
								/>
								<CardActions>
									<Button
										color="primary"
										href="/transcripts/Take-a-tour-of-the-kit.docx"
										aria-label="Download transcript: Take a tour of the kit"
										target="_blank" rel="noopener noreferrer"
									>
										Download Transcript
									</Button>
								</CardActions>
							</Card>
						</Grid> */}
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
										href="/transcripts/What-advisors-think-of-the-kit.docx"
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
				</Container>
				<Container
					component="div"
					className={styles.containerIndigo}
					maxWidth={false}
				>
					<Container maxWidth="lg">
						<Typography
							variant="body2"
							component="p"
							className={styles.contentText}
							align="center"
						>
							This website does not collect or store any personal information,
							including the name of your business, any financial records you
							input or upload, or any of the actions you are taking with your
							business.
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={styles.contentText}
							align="center"
						>
							The data you enter into the Cash Flow Coaching Kit will be stored
							on this device only. Exiting or clearing your browser cache will
							erase all unsaved client data.
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={styles.contentText}
							align="center"
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
							of use and our Data usage and privacy statement.
						</Typography>
					</Container>
				</Container>
			</Box>
		</>
	)
}

export default Homepage
