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
	Typography,
	Divider,
} from "@material-ui/core"
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { useMachine } from "@xstate/react"
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
import filterByActionContainer from "../util/filters/ByActionContainer"
import { ActionChecklistMachine } from "../data/ActionChecklist/_config/machine"
import Loading from "../components/Loading"
import Spacer from "../components/Spacer"
import ActionChecklistPDF from "../components/PDF/ActionChecklistPDF"
import servePDF from "../components/PDF/servePDF"
import ActionChecklistUseCase from "../data/ActionChecklist/ChecklistLogic"
import ActionNotesUseCase from "../data/ActionChecklist/NotesLogic"

/**
 * Action Checklist page component
 *
 * @returns ReactElement
 */
const ActionChecklist = (): ReactElement => {
	const [state, send] = useMachine(ActionChecklistMachine)
	const { checklistCollection, priority, databaseSyced, notes } = useContext(
		ActionChecklistContext
	)
	const {
		state: { currentClient },
	} = useContext(ClientContext)
	const [key] = useState(generateKey())

	useEffect(() => {
		if (currentClient?.id && databaseSyced) {
			send("HAS_CONTENT")
		}
	}, [currentClient, databaseSyced, send])

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
					const data = checklistCollection.filter(filterByActionContainer(item))
					const prior = priority.filter(filterByActionContainer(item))
					const note = notes.filter(filterByActionContainer(item))

					if (data.length > 0 && prior.length > 0) {
						return (
							<ActionContainer
								key={constructKey(key, idx)}
								identfier={item}
								data={data}
								priority={prior[0]}
								notes={note[0] || null}
								currentClient={currentClient.id}
							/>
						)
					}
				}

				return <Fragment key={constructKey(key, idx)} />
			}
		)
	}

	const renderActionChecklist = (): ReactElement => {
		switch (state.value) {
			case "content":
				return <>{renderActionContainers()}</>
			case "loading":
			default:
				return <Loading />
		}
	}

	const printPDF = async (): Promise<void> => {
		if (currentClient?.id) {
			const clientId = currentClient.id
			const pdfChecklists = await ActionChecklistUseCase.findByClient(clientId)
			const pdfNotes = await ActionNotesUseCase.findByClient(clientId)

			const pdf = await ActionChecklistPDF(
				currentClient?.name ?? "Client",
				pdfChecklists,
				pdfNotes
			)
			servePDF(pdf)
		}
	}

	return (
		<>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item xs={12} md={9}>
						<SectionTitle component="h1">Action Checklist</SectionTitle>
						<Box className="content-area">
							<Typography>
								Your checklist has all the actions you selected in previous
								parts of the Cash Flow Coaching Kit.
							</Typography>
							<Typography>
								Use the checklist to track, prioritise and review your actions.
							</Typography>
						</Box>
						<Spacer />
						<Divider />
						<Spacer />
						<ActionHeader />
						<Box>{renderActionChecklist()}</Box>
					</Grid>
					<Grid item xs={12} md={3}>
						<FourQuestions />
						<ExpandableNav>
							<List component="nav" disablePadding>
								<ListItem button>
									<ListItemIcon>
										<PictureAsPdfIcon />
									</ListItemIcon>
									<ListItemText onClick={printPDF}>Generate PDF</ListItemText>
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
