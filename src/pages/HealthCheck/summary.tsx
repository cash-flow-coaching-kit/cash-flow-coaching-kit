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
} from "@material-ui/core"
import ListIcon from "@material-ui/icons/List"
import AddIcon from "@material-ui/icons/Add"
import { PageContainer } from "../../components/Layouts"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
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
import { ClientContext } from "../../state/client"
import { ClientActionTypes } from "../../state/client/client-outline"

const useStyles = makeStyles((theme) => ({
	summaryActions: {
		marginTop: theme.spacing(3),
	},
}))

const QUESTIONS_OFFSET = 4

/**
 * Health check summary page
 *
 * @returns ReactElement
 */
const HCSummary = (): ReactElement => {
	const [currentClient] = useCurrentClient()
	const { dispatch } = useContext(ClientContext)
	const { id } = useParams()
	const [healthCheck, setHealthCheck] = useState<
		HealthCheckDataStruct | undefined
	>()
	const [fourQuestions, setFourQuestions] = useState<
		QuestionOptions[] | undefined
	>(undefined)
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
						setFourQuestions(hc.answers.slice(0, QUESTIONS_OFFSET))
						setTileAnswers(hc.answers.slice(QUESTIONS_OFFSET))
					}
				}
			})()
		}
	}, [id, currentClient, dispatch])

	return (
		<>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={12} md={8} lg={9}>
						{healthCheck && tileAnswers ? (
							<>
								<SummaryTitle createdAt={healthCheck.createdAt} />
								<QuestionSummaries
									questions={questions.slice(QUESTIONS_OFFSET)}
									tileAnswers={tileAnswers}
								/>
								<Grid
									container
									spacing={0}
									justify="space-between"
									className={styles.summaryActions}
								>
									<Grid item xs={12} sm={6}>
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
							</>
						) : (
							<InvalidHC />
						)}
					</Grid>
					<Grid item xs={12} md={4} lg={3}>
						<FourQuestions answers={fourQuestions || []} />
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
									<ListItemText>List of Health Checks</ListItemText>
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
