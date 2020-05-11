import React, {
	ReactElement,
	useContext,
	useState,
	Fragment,
	useEffect,
} from "react"
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
import { ActionItemMapping } from "../components/ActionChecklist/_config/data"
import { ClientContext } from "../state/client"
import filterByClientId from "../util/filters/ByClientId"
import filterByActionContainer from "../util/filters/ByActionContainer"

/**
 * Action Checklist page component
 *
 * @returns ReactElement
 */
const ActionChecklist = (): ReactElement => {
	const { checklistCollection, priority } = useContext(ActionChecklistContext)
	const {
		state: { currentClient },
	} = useContext(ClientContext)
	const [key] = useState(generateKey())
	// TODO: Introduce a state machine
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (currentClient?.id) {
			setLoading(false)
		}
	}, [currentClient])

	/**
	 * Renders all the action containers based on
	 * current state data
	 *
	 * @returns ReactElement[]
	 */
	const renderActionContainers = (): ReactElement[] => {
		return (Object.keys(ActionItemMapping) as PossibleActionItems[]).map(
			(item, idx) => {
				if (currentClient?.id) {
					const data = checklistCollection
						.filter(filterByClientId(currentClient.id))
						.filter(filterByActionContainer(item))

					const containerPriority = priority
						.filter(filterByClientId(currentClient.id))
						.filter(filterByActionContainer(item))

					if (data.length > 0 && containerPriority.length > 0) {
						return (
							<ActionContainer
								key={constructKey(key, idx)}
								identfier={item}
								data={data}
								priority={containerPriority[0]}
								currentClient={currentClient.id}
							/>
						)
					}
				}

				return <Fragment key={constructKey(key, idx)} />
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
						<Box>{!loading && renderActionContainers()}</Box>
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
