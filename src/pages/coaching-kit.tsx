import React, { ReactElement } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
	Typography,
	Grid,
	Card,
	CardActions,
	CardContent,
	Container,
	CardMedia,
	makeStyles,
	Avatar,
	Box,
	CardActionArea,
	useTheme,
} from "@material-ui/core"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { PrivateRoutes, routeVarReplacement } from "../util/routes/routes"
import PageTip from "../components/PageTip"
import CoachingKitTips from "../content/tips/CoachingKitTips"

const Arrow = (): ReactElement => {
	const theme = useTheme()
	return (
		<Avatar
			style={{
				backgroundColor: theme.palette.primary.main,
				boxShadow: theme.shadows["3"],
			}}
		>
			<ArrowForwardIcon />
		</Avatar>
	)
}
const useCKStyles = makeStyles((theme) => ({
	MainHeading: {
		paddingTop: theme.spacing(0),
		marginBottom: theme.spacing(2),
		fontSize: "32px",
		fontWeight: "normal",
	},
	SectionTitle: {
		paddingTop: theme.spacing(1),
		fontSize: "28px",
		fontWeight: "normal",
	},
	container: {
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(5),
	},
	containerGrey: {
		backgroundColor: "#f5f5f5",
		padding: theme.spacing(2),
		marginTop: theme.spacing(3),
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
	alignJustifyContent: {
		display: "flex",
		flexDirection: "column",
		flexWrap: "nowrap",
		justifyContent: "center",
		alignItems: "flex-start",
		alignContent: "start",
		margin: theme.spacing(2, 0),
	},
	contentText: {
		margin: theme.spacing(1, 0),
		width: "50%",
		marginBottom: "20px",
	},
	cardActions: {
		justifyContent: "flex-end",
	},
	square: {
		width: "420px",
		height: "323px",
		marginRight: "40px",
		marginTop: "20px",
		marginLeft: "10px",
	},
	sectionWhite: {
		width: "100%",
	},
	sectionGrey: {
		width: "100%",
		backgroundColor: "#f5f5f5",
	},
	sectionGreyBottom: {
		width: "100%",
		backgroundColor: "#f5f5f5",
		paddingBottom: "100px",
	},
	SectionTitleNoPad: {
		padding: "0px",
		marginTop: "0px",
		marginBottom: "0px",
		fontSize: "28px",
		fontFamily: "Roboto, Helvetica",
		fontWeight: "normal",
	},
	addLeg: {
		marginLeft: "30px",
	},
}))

const CoachingKit = (): ReactElement => {
	const styles = useCKStyles()

	return (
		<>
			{" "}
			<Box role="main">
				<Container maxWidth="lg" className={styles.container}>
					<Typography
						component="h1"
						align="left"
						className={styles.MainHeading}
					>
						Cash Flow Coaching Kit
					</Typography>

					<Grid container spacing={0}>
						<Typography className="contentText" align="left">
							Use the tools in the coaching phases: Discover, Apply and Plan &
							Action to help small businesses understand cash flow and identify
							areas to improve.
						</Typography>
					</Grid>
				</Container>
				<div className={styles.sectionGrey}>
					<Container maxWidth="lg" className={styles.container} component="div">
						<Grid item className={styles.alignJustifyContent}>
							<h2 className={styles.SectionTitleNoPad}>Discover</h2>
							<Typography
								variant="body1"
								component="p"
								className="contentText"
								align="left"
							>
								Learn about cash flow management.
							</Typography>
						</Grid>
						<div className={styles.addLeg}>
							<Grid container spacing={3} direction="row">
								<div className={styles.square}>
									<Card>
										<CardActionArea
											component={RouterLink}
											to={routeVarReplacement(PrivateRoutes.HealthCheckQuiz, [
												[":id?", ""],
											])}
										>
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
											<CardActions className={styles.cardActions}>
												<Arrow />
											</CardActions>
										</CardActionArea>
									</Card>
								</div>
								<div className={styles.square}>
									<Card>
										<CardActionArea
											component={RouterLink}
											to={PrivateRoutes.DiscoverTopics}
										>
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
											<CardActions className={styles.cardActions}>
												<Arrow />
											</CardActions>
										</CardActionArea>
									</Card>
								</div>
							</Grid>
						</div>
					</Container>
				</div>

				<div className={styles.sectionWhite}>
					<Container maxWidth="lg" className={styles.container} component="div">
						<Grid item className={styles.alignJustifyContent}>
							<h2 className={styles.SectionTitleNoPad}>Apply</h2>
							<Typography
								variant="body1"
								component="p"
								className="contentText"
								align="left"
							>
								Understand your current cash flow and plan improvements.
							</Typography>
						</Grid>
						<div className={styles.addLeg}>
							<Grid container spacing={3} direction="row">
								<div className={styles.square}>
									<Card>
										<CardActionArea
											component={RouterLink}
											to={PrivateRoutes.CFC}
										>
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
											<CardActions className={styles.cardActions}>
												<Arrow />
											</CardActions>
										</CardActionArea>
									</Card>
								</div>
								<div className={styles.square}>
									<Card>
										<CardActionArea
											component={RouterLink}
											to={PrivateRoutes.ChangeLevers}
										>
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
											<CardActions className={styles.cardActions}>
												<Arrow />
											</CardActions>
										</CardActionArea>
									</Card>
								</div>
							</Grid>
						</div>
					</Container>
				</div>
				<div className={styles.sectionGreyBottom}>
					<Container maxWidth="lg" className={styles.container} component="div">
						<Grid item className={styles.alignJustifyContent}>
							<h2 className={styles.SectionTitleNoPad}>Plan &amp; Action</h2>{" "}
							<Typography
								variant="body1"
								component="p"
								className="contentText"
								align="left"
							>
								Create a list of actions and deadlines to help you track your
								cash flow improvements.
							</Typography>
						</Grid>
						<div className={styles.addLeg}>
							<Grid container spacing={3} direction="row">
								<div className={styles.square}>
									<Card>
										<CardActionArea
											component={RouterLink}
											to={PrivateRoutes.ActionChecklist}
										>
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
											<CardActions className={styles.cardActions}>
												<Arrow />
											</CardActions>
										</CardActionArea>
									</Card>
								</div>
							</Grid>
						</div>
					</Container>
				</div>
				<PageTip tip={CoachingKitTips} />
			</Box>
		</>
	)
}

export default CoachingKit
