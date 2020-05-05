import React, { ReactElement, useContext, useState, Fragment } from "react"
import {
	Grid,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Box,
} from "@material-ui/core"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { PageContainer } from "../components/Layouts"
import SectionTitle from "../components/SectionTitle"
import FourQuestions from "../components/HealthCheck/FourQuestions"
import ExpandableNav from "../components/ExpandableNav"
import { ActionHeader, ActionContainer } from "../components/ActionChecklist"
import PageTip from "../components/PageTip"
import { ActionChecklistContext } from "../state/action-checklist"
import { generateKey, constructKey } from "../util/lists/key"
import { PossibleActionItems } from "../state/action-checklist/shape"

/**
 * Action Checklist page component
 *
 * @returns ReactElement
 */
const ActionChecklist = (): ReactElement => {
	const { actionItems } = useContext(ActionChecklistContext)
	const [key] = useState(generateKey())

	/**
	 * Renders all the action containers based on
	 * current state data
	 *
	 * @returns ReactElement[]
	 */
	const renderActionContainers = (): ReactElement[] => {
		return (Object.keys(actionItems) as PossibleActionItems[]).map(
			(id, idx): ReactElement => {
				const item = actionItems[id]
				return item ? (
					<ActionContainer
						key={constructKey(key, idx)}
						identfier={id}
						data={item}
					/>
				) : (
					<Fragment key={constructKey(key, idx)} />
				)
			}
		)
	}

	return (
		<>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={9}>
						<SectionTitle>Action Items</SectionTitle>
						<ActionHeader />
						<Box>{renderActionContainers()}</Box>
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
		</>
	)
}

export default ActionChecklist
