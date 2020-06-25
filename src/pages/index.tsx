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
	List,
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
		paddingTop: theme.spacing(5),
	},
	buttonBox: {
		marginTop: theme.spacing(5),
		display: "flex",
		justifyContent: "center",
	},
	embed: {
		minHeight: "300px",
		border: "none",
	},
	containerIndigo: {
		backgroundColor: "#e8eaf6", // indigo50
		padding: theme.spacing(5),
		marginTop: theme.spacing(2),
	},
	containerGrey: {
		backgroundColor: "#f5f5f5",
		padding: theme.spacing(2),
		marginTop: theme.spacing(3),
	},
	contentText: {
		margin: theme.spacing(2, 0),
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
						Plan and improve your small business.
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
									Create an action checklist and track your progress.
								</Typography>
							</Grid>
						</Grid>
					</Container>
				</Container>
				<Container>
					<Box className={styles.buttonBox}>
						{hasClients() ? (
							<Button
								color="primary"
								variant="contained"
								component={RouterLink}
								to={PrivateRoutes.ClientList}
								size="large"
							>
								See client list
							</Button>
						) : (
							<NewClientDialog triggerText="Get Started" />
						)}
					</Box>
					<Spacer />
					<Grid container spacing={0}>
						<Grid item xs={12} sm={8}>
							<Box className="content-area">
								<Typography variant="h5">Using the Cash Flow Kit</Typography>
								<Typography>
									Planning your business will help you sustain or grow your
									business.
								</Typography>
								<Typography className="list-describer">
									You can use the kit to:
								</Typography>
								<List component="ul" className="ul-list">
									<Typography component="li">
										Check the health of your business
									</Typography>
									<Typography component="li">
										Learn about business management
									</Typography>
									<Typography component="li">Understand cash flow</Typography>
									<Typography component="li">
										Explore practical ways to improve cash flow
									</Typography>
									<Typography component="li">
										Plan and track improvements
									</Typography>
								</List>
								<Typography className="list-describer">
									To review, plan and improve your cash flow, you need to know
									your:
								</Typography>
								<List component="ul" className="ul-list">
									<Typography component="li">Opening balance</Typography>
									<Typography component="li">Revenue</Typography>
									<Typography component="li">Expenses</Typography>
								</List>
								<Typography>
									You can also import data from other tools and applications
								</Typography>
								<Typography>
									The kit does not save information between sessions. Use the
									export function regularly to save your progress.
								</Typography>
							</Box>
						</Grid>
					</Grid>
					<Grid container spacing={3} className={styles.grid} justify="center">
						{/* <Grid item xs={12} md={6}>
							<Card variant="outlined">
								<CardHeader title="Take a tour of the kit" />
								<CardMedia
									className={styles.embed}
									component="iframe"
									title="Take a tour of the kit"
									src="https://www.youtube.com/embed/vSoCk1sgV3M"
								/>
								<CardActions>
									<Button
										color="primary"
										href="/transcripts/Take-a-tour-of-the-kit.docx"
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
									src="https://www.youtube.com/embed/z64Bc5K2TKo"
								/>
								<CardActions>
									<Button
										color="primary"
										href="/transcripts/What-advisors-think-of-the-kit.docx"
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
							on this device only. Clearing your browser cache will erase all
							client data.
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={styles.contentText}
							align="center"
						>
							We recommend using the EXPORT function regularly to avoid data
							loss. Please refer to the{" "}
							<a
								href="/docs/Terms and Cond.docx"
								target="_blank"
								rel="noopener noreferrer"
							>
								Terms &amp; Conditions
							</a>{" "}
							of use and our Data usage and privacy statement.
						</Typography>
						<Typography
							variant="body2"
							component="p"
							className={styles.contentText}
							align="center"
						>
							If you have any questions about the kit, please use our feedback
							form.
						</Typography>
					</Container>
				</Container>
			</Box>
		</>
	)
}

export default Homepage
