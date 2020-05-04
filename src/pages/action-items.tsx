import React, { ReactElement } from "react"
import {
	Grid,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Box,
} from "@material-ui/core"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { PrivatePage, PageContainer } from "../components/Layouts"
import SectionTitle from "../components/SectionTitle"
import FourQuestions from "../components/HealthCheck/FourQuestions"
import ExpandableNav from "../components/ExpandableNav"
import { ActionHeader } from "../components/ActionChecklist"
import PageTip from "../components/PageTip"

const ActionChecklist = (): ReactElement => {
	return (
		<PrivatePage>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={9}>
						<SectionTitle>Action Items</SectionTitle>
						<ActionHeader />
						<Box>
							<ExpandableNav title="Cash IN actions">Hello</ExpandableNav>
							<ExpandableNav title="Cash OUT actions">Hello</ExpandableNav>
						</Box>
					</Grid>
					<Grid item xs={3}>
						<FourQuestions />
						<ExpandableNav>
							<List component="nav" disablePadding>
								<ListItem button>
									<ListItemIcon>
										<PictureAsPdfIcon />
									</ListItemIcon>
									<ListItemText>Generate PDF</ListItemText>
								</ListItem>
							</List>
						</ExpandableNav>
					</Grid>
				</Grid>
			</PageContainer>

			<PageTip tip="ActionChecklistTip" />
		</PrivatePage>
	)
}

export default ActionChecklist
