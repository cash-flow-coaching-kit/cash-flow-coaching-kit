import React, { ReactElement, useEffect, useState, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import {
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Button,
	makeStyles,
	Typography,
} from "@material-ui/core"
import ListIcon from "@material-ui/icons/List"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import AddIcon from "@material-ui/icons/Add"
import { PageContainer } from "../../components/Layouts"
import ExpandableNav from "../../components/ExpandableNav"
import { PrivateRoutes, routeVarReplacement } from "../../util/routes/routes"
import QuestionSummaries from "../../components/HealthCheck/Summary"
import { QuestionOptions } from "../../components/HealthCheck/_config/shape"
import { questions } from "../../components/HealthCheck/_config/data"
import {
	SummaryTitle,
	InvalidHC,
} from "../../components/HealthCheck/Summary/_partials"
import { HealthCheckDataStruct } from "../../data/_config/shape"
import HealthCheckUseCase from "../../data/healthChecks/HealthCheckLogic"
import useCurrentClient from "../../state/client/useCurrentClient"
import useHasInternet from "../../context/useHasInternet"
import HealthCheckPDF, {
	HealthCheckQuestionSet,
} from "../../components/PDF/HealthCheckPDF"
import { ClientContext } from "../../state/client"
import { ClientActionTypes } from "../../state/client/client-outline"
import Spacer from "../../components/Spacer"
import { setToggleOfflineContent } from "./../../util/helper"


const useStyles = makeStyles((theme) => ({
	summaryActions: {
		marginTop: theme.spacing(3),
	},
	actionRow: {
		display: "flex",
		justifyContent: "flex-end",
		"& a + a": {
			marginLeft: theme.spacing(1),
		},
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			"& a + a": {
				marginLeft: theme.spacing(0),
				marginTop: theme.spacing(1),
			},
		},
	},
}))

// Set flag for web or desktop mode
let isDesktop = false

const userAgent = navigator.userAgent.toLowerCase()
if (userAgent.indexOf(" electron/") > -1) {
	isDesktop = true
}

/**
 * Health check summary page
 *
 * @returns ReactElement
 */
const HCSummary = (): ReactElement => {
	const [currentClient] = useCurrentClient()
	const isOnline = useHasInternet()
	const { dispatch } = useContext(ClientContext)
	const { id } = useParams()
	const [healthCheck, setHealthCheck] = useState<
		HealthCheckDataStruct | undefined
	>()
	const [tileAnswers, setTileAnswers] = useState<QuestionOptions[] | undefined>(
		undefined
	)
	const styles = useStyles()

	useEffect(() => {
		if (id && currentClient) {
			dispatch({
				type: ClientActionTypes.UpdateLastViewedHC,
				payload: id,
			})
			;(async function getHC(): Promise<void> {
				if (typeof currentClient.id !== "undefined") {
					// Fetches the health checks for the client and sets state values
					const hc:
						| HealthCheckDataStruct
						| undefined = await HealthCheckUseCase.findByClientId(
						id,
						currentClient.id
					)
					if (hc) {
						setHealthCheck(hc)
						setTileAnswers(hc.answers)
					}
				}
			})()
		}
	}, [id, currentClient, dispatch])

	const pdfMakeBlobPromise = (
		pdf: pdfMake.TCreatedPdf,
		filename: string
	): Promise<{ blob: Blob; filename: string }> => {
		return new Promise((resolve) => {
			pdf.getBlob((b: Blob) => resolve({ blob: b, filename }))
		})
	}

	const printPDF = async () => {
		const data: HealthCheckQuestionSet = {}

		questions.forEach((q, idx) => {
			const { question } = q
			const answer = healthCheck?.answers[idx] || "positive"
			const text = q.options[answer]
			// eslint-disable-next-line
			data[idx] = { question, answer, text }
		})
		const pdf = await HealthCheckPDF(currentClient?.name ?? "Client", data)
		const blob = await pdfMakeBlobPromise(pdf, "HealthCheck.pdf")
		saveAs(blob.blob, `HealthCheck.pdf`)
	}

	return (
		<>
			<PageContainer role="main">
				<Grid container spacing={3}>
					<Grid item xs={12} md={8} lg={9}>
						{healthCheck && tileAnswers ? (
							<>
								<SummaryTitle createdAt={healthCheck.createdAt} />
								<QuestionSummaries
									questions={questions}
									tileAnswers={tileAnswers}
								/>
								<Grid
									container
									spacing={0}
									justify="flex-end"
									className={styles.summaryActions}
								>
									<Grid item xs={12} className={styles.actionRow}>
										<Button component={Link} to={PrivateRoutes.DiscoverTopics}>
											Go to Discover Topics
										</Button>
										<Button
											color="primary"
											variant="contained"
											component={Link}
											to={PrivateRoutes.CFC}
										>
											Add Cash Flow Canvas
										</Button>
									</Grid>
								</Grid>
								<Spacer space={4} />
								<Typography>
									Cash flow is a key business challenge that may affect small
									business owners’ mental health and wellbeing.{" "}
									<a
										href={setToggleOfflineContent(
											"https://www.ato.gov.au/smallbizmentalhealth",
											isOnline
										)}
										target="_blank"
										title={
											isDesktop
												? "Internet access is required for full functionality."
												: "Support is available if you need assistance."
										}
										rel="noopener noreferrer"
									>
										Support is available
									</a>{" "}
									if you need assistance.
								</Typography>
							</>
						) : (
							<InvalidHC />
						)}
					</Grid>
					<Grid item xs={12} md={4} lg={3}>
						<ExpandableNav>
							<List component="nav" disablePadding>
								<ListItem
									button
									component={Link}
									to={routeVarReplacement(PrivateRoutes.HealthCheckQuiz, [
										[":id?", ""],
									])}
								>
									<ListItemIcon>
										<AddIcon />
									</ListItemIcon>
									<ListItemText>Start a new Health Check</ListItemText>
								</ListItem>
								<ListItem
									button
									component={Link}
									to={PrivateRoutes.HealthCheckList}
								>
									<ListItemIcon>
										<ListIcon />
									</ListItemIcon>
									<ListItemText>Saved Health Checks</ListItemText>
								</ListItem>
								<ListItem
									button
									style={{ cursor: "pointer" }}
								>
									<ListItemIcon>
										<PictureAsPdfIcon />
									</ListItemIcon>
									<ListItemText onClick={printPDF}>
										Download Generated PDF
									</ListItemText>
								</ListItem>
							</List>
						</ExpandableNav>
					</Grid>
				</Grid>
			</PageContainer>
		</>
	)
}

export default HCSummary
