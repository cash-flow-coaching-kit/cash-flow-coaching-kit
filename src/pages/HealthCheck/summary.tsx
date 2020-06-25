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
import { ClientContext } from "../../state/client"
import { ClientActionTypes } from "../../state/client/client-outline"
import Spacer from "../../components/Spacer"

const useStyles = makeStyles((theme) => ({
	summaryActions: {
		marginTop: theme.spacing(3),
	},
	actionRow: {
		display: "flex",
		justifyContent: "flex-end",
	},
}))

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
						parseInt(id, 10),
						currentClient.id
					)
					if (hc) {
						setHealthCheck(hc)
						setTileAnswers(hc.answers)
					}
				}
			})()
		}
	}, [id, currentClient])

	return (
		<>
			<PageContainer>
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
									business owners’ mental health and wellbeing. A range of{" "}
									<a
										href="https://www.ato.gov.au/General/Financial-difficulties-and-serious-hardship/small-business-owners-experiencing-mental-health-issues/health-and-wellbeing-organisations/"
										target="_blank"
										rel="noopener noreferrer"
									>
										resources are available
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
							</List>
						</ExpandableNav>
					</Grid>
				</Grid>
			</PageContainer>
		</>
	)
}

export default HCSummary
