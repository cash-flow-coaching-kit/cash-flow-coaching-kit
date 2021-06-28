import React, { ReactElement } from "react"
import {
	Typography,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Box,
	Divider,
} from "@material-ui/core"
import { Link } from "react-router-dom"
import ListIcon from "@material-ui/icons/List"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import ExpandableNav from "../../components/ExpandableNav"
import { PrivateRoutes } from "../../util/routes/routes"
import Questionnaire from "../../components/HealthCheck/Questionnaire/Questionnaire"
import Spacer from "../../components/Spacer"
import SectionTitle from "../../components/SectionTitle"
import HCQuestionnaireTips from "../../content/tips/HCQuestionnaireTips"

/**
 * Health check questionnaire page
 *
 * @returns ReactElement
 */
const HCQuestionnaire = (): ReactElement => (
	<>
		<PageContainer role="main">
			<Grid container spacing={3}>
				<Grid item xs={12} md={9}>
					<SectionTitle component="h1">Health Check</SectionTitle>
					<Spacer />
					<Box className="content-area">
						<Typography>
							Ten easy questions to learn more about the health of your
							business.
						</Typography>
						<Typography className="list-describer">
							This quick Health Check will help you:
						</Typography>
						<List component="ul" className="ul-list">
							<Typography component="li">
								assess your current knowledge of business cash flow
							</Typography>
							<Typography component="li">
								identify areas to improve your cash flow knowledge
							</Typography>
						</List>
						<Typography>
							Your results will show you key topics and activities to complete.
						</Typography>
						<Typography>
							As you make changes to your business, you can use the Health Check
							to review your progress.
						</Typography>
						<Typography>
							If you want to see your previous Health Checks, see ‘Saved Health
							Checks’ in the control panel.
						</Typography>
					</Box>
					<Spacer space={3} />
					<Divider />
					<Spacer />
					<Questionnaire />
				</Grid>
				<Grid item xs={12} md={3}>
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
								<ListItemText>Saved Health Checks</ListItemText>
							</ListItem>
						</List>
					</ExpandableNav>
				</Grid>
			</Grid>
		</PageContainer>

		<PageTip tip={HCQuestionnaireTips} />
	</>
)

export default HCQuestionnaire
