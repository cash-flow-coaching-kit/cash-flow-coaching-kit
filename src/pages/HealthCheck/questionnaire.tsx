import React, { ReactElement } from "react"
import {
	Typography,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core"
import { Link } from "react-router-dom"
import ListIcon from "@material-ui/icons/List"
import { PageContainer } from "../../components/Layouts"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import PageTip from "../../components/PageTip"
import ExpandableNav from "../../components/ExpandableNav"
import { PrivateRoutes } from "../../util/routes/routes"
import Questionnaire from "../../components/HealthCheck/Questionnaire/Questionnaire"

/**
 * Health check questionnaire page
 *
 * @returns ReactElement
 */
const HCQuestionnaire = (): ReactElement => {
	return (
		<>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={12} md={9}>
						<Typography variant="h5" align="center">
							Ten easy questions to learn more about the health of your business
						</Typography>
						<Questionnaire />
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
