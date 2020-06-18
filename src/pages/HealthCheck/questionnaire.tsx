import React, { ReactElement, useEffect, useState, useContext } from "react"
import {
	Typography,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core"
import { Link, useParams } from "react-router-dom"
import ListIcon from "@material-ui/icons/List"
import { PageContainer } from "../../components/Layouts"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import PageTip from "../../components/PageTip"
import ExpandableNav from "../../components/ExpandableNav"
import { PrivateRoutes } from "../../util/routes/routes"
import Questionnaire from "../../components/HealthCheck/Questionnaire/Questionnaire"
import { QuestionOptions } from "../../components/HealthCheck/_config/shape"
import Loading from "../../components/Loading"
import { ClientContext } from "../../state/client"
import HealthCheckUseCase from "../../data/healthChecks/HealthCheckLogic"

/**
 * Health check questionnaire page
 *
 * @returns ReactElement
 */
const HCQuestionnaire = (): ReactElement => {
	const {
		state: { currentClient },
	} = useContext(ClientContext)
	const { id } = useParams()
	const [answers, setAnswers] = useState<QuestionOptions[]>([])
	const [loading, setLoading] = useState<boolean>(typeof id !== "undefined")

	useEffect(() => {
		if (typeof currentClient !== "undefined") {
			;(async function fetchHC(): Promise<void> {
				if (id && typeof currentClient.id !== "undefined") {
					const hc = await HealthCheckUseCase.findByClientId(
						parseInt(id, 10),
						currentClient.id
					)
					setAnswers(hc ? hc.answers : [])
					setLoading(false)
				} else {
					setAnswers([])
				}
			})()
		}
	}, [id, currentClient])

	return (
		<>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={12} md={9}>
						<Typography variant="h5" align="center">
							Ten easy questions to learn more about the health of your business
						</Typography>
						{loading ? (
							<Loading />
						) : (
							<Questionnaire
								previousAnswers={answers}
								dbID={typeof id !== "undefined" ? parseInt(id, 10) : undefined}
							/>
						)}
					</Grid>
					<Grid item xs={12} md={3}>
						<FourQuestions />
						<ExpandableNav>
							<List component="nav" disablePadding>
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

			<PageTip tip="HCQuestionnaire" />
		</>
	)
}

export default HCQuestionnaire
