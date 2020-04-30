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
import { PrivatePage, PageContainer } from "../../components/Layouts"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import Questionnaire from "../../components/HealthCheck/Questionnaire/Questionnaire"
import PageTip from "../../components/PageTip"
import ExpandableNav from "../../components/ExpandableNav/ExpandableNav"
import { PrivateRoutes } from "../../util/routes/routes"
import NewQuestionnaire from "../../components/HealthCheck/Questionnaire/NewQuestionnaire"

const HCQuestionnaire = (): ReactElement => {
	return (
		<PrivatePage>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={9}>
						<Typography variant="h5" align="center">
							Ten easy questions to learn more about the health of your business
						</Typography>
						<NewQuestionnaire />
					</Grid>
					<Grid item xs={3}>
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
		</PrivatePage>
	)
}

export default HCQuestionnaire
