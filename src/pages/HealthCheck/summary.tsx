import React, { ReactElement, useEffect, useState, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import {
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core"
import ListIcon from "@material-ui/icons/List"
import { PrivatePage, PageContainer } from "../../components/Layouts"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import ExpandableNav from "../../components/ExpandableNav/ExpandableNav"
import findHCById from "../../data/healthChecks/findHCById"
import { IBaseHealthCheck } from "../../data/healthChecks/HealthCheckDatabase"
import { PrivateRoutes } from "../../util/routes/routes"
import { ClientContext } from "../../state/client"
import { questions } from "../../components/HealthCheck/Questionnaire/config"
import {
	InvalidHC,
	SummaryTitle,
	QuestionSummaries,
} from "../../components/HealthCheck/Summary"

const QUESTIONS_OFFSET = 4

const HCSummary = (): ReactElement => {
	const {
		state: { currentClient },
	} = useContext(ClientContext)
	const { id } = useParams()
	const [healthCheck, setHealthCheck] = useState<IBaseHealthCheck | undefined>()
	const [fourQuestions, setFourQuestions] = useState<number[] | undefined>(
		undefined
	)
	const [tileAnswers, setTileAnswers] = useState<number[] | undefined>(
		undefined
	)

	useEffect(() => {
		if (id && currentClient) {
			;(async function getHC(): Promise<void> {
				if (typeof currentClient.id !== "undefined") {
					const hc: IBaseHealthCheck = await findHCById(
						parseInt(id, 10),
						currentClient.id
					)
					setHealthCheck(hc)
					setFourQuestions(hc.answers.slice(0, QUESTIONS_OFFSET))
					setTileAnswers(hc.answers.slice(QUESTIONS_OFFSET))
				}
			})()
		}
	}, [id, currentClient])

	return (
		<PrivatePage>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={9}>
						{healthCheck && tileAnswers ? (
							<>
								<SummaryTitle createdAt={healthCheck.createdAt} />
								<QuestionSummaries
									questions={questions.slice(QUESTIONS_OFFSET)}
									tileAnswers={tileAnswers}
								/>
							</>
						) : (
							<InvalidHC />
						)}
					</Grid>
					<Grid item xs={3}>
						<FourQuestions answers={fourQuestions} />
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
		</PrivatePage>
	)
}

export default HCSummary
