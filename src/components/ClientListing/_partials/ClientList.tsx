import React, { ReactElement, useState, MouseEvent, useContext } from "react"
import {
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Tooltip,
} from "@material-ui/core"
import { clone } from "lodash-es"
import VisibilityIcon from "@material-ui/icons/Visibility"
import { generateKey, constructKey } from "../../../util/lists/key"
import { ClientActionTypes } from "../../../state/client/client-outline"
import { IClientListProps } from "../_config/shape"
import { isClientSelected, deleteClientRelatedData } from "../_config/utilities"
import { ClientDataStruct, ClientId } from "../../../data/_config/shape"
import IconDeleteButtonwDialog from "../../IconDeleteButton/IconDeleteButtonwDialog"
import syncClientsWithDb from "../../../data/client/syncWithDB"
import {
	removeStorageClient,
	emptyClientValue,
} from "../../../util/localStorage/client"
import ActionChecklistUseCase from "../../../data/ActionChecklist/ChecklistLogic"
import ActionPriorityUseCase from "../../../data/ActionChecklist/PriorityLogic"
import ActionNotesUseCase from "../../../data/ActionChecklist/NotesLogic"
import { ActionChecklistContext } from "../../../state/action-checklist"
import { ActionChecklistActionTypes } from "../../../state/action-checklist/shape"

/**
 * Renders a list of current clients with the ability to change
 * which client is being edited
 *
 * @returns ReactElement
 */
const ClientList = ({
	store: {
		state: { clients, currentClient },
		dispatch,
	},
	showSnackbar,
}: IClientListProps): ReactElement => {
	const [key] = useState(generateKey())
	const { dispatch: ACDispatch } = useContext(ActionChecklistContext)

	/**
	 * Changes the current client selected for editing
	 *
	 * @param {ChangeEvent<HTMLInputElement>} event Event created by the radio change
	 * @returns void
	 */
	const handleChange = (client: ClientDataStruct) => (): void => {
		if (client?.id) {
			dispatch({
				type: ClientActionTypes.ChangeCurrentClient,
				payload: client.id,
			})

			showSnackbar(`You are now managing ${client.name}`, "success")
		}
	}

	/**
	 * Deletes all the clients data
	 *
	 * @param {ClientId|undefined} client
	 * @returns Promise<void>
	 */
	const handleDelete = (client: ClientId | undefined) => async (
		e: MouseEvent<HTMLButtonElement>
	): Promise<void> => {
		e.preventDefault()
		if (client) {
			const clientsCopy = clone(clients)
			// Deletes the client data across the various databases
			const databaseDataDeleted = await deleteClientRelatedData(client)

			if (databaseDataDeleted instanceof Error) {
				showSnackbar(databaseDataDeleted.message, "error")
				return
			}

			// Update current client if it is being deleted
			if (client === currentClient?.id || clientsCopy.length === 1) {
				removeStorageClient()
				dispatch({
					type: ClientActionTypes.ChangeCurrentClient,
					payload: emptyClientValue,
				})
			}

			// Update client context store
			await syncClientsWithDb(dispatch)

			// ---
			// Update action checklist context store
			const checklists = await ActionChecklistUseCase.syncWithDatabase()
			const priority = await ActionPriorityUseCase.syncWithDatabase()
			const notes = await ActionNotesUseCase.syncWithDatabase()

			ACDispatch({
				type: ActionChecklistActionTypes.UpdateDatabaseSync,
				payload: {
					data: checklists,
					priority,
					notes,
				},
			})

			showSnackbar("Client data has been deleted", "success")
		}
	}

	return (
		<>
			<List>
				{clients.map((client, idx) => (
					<ListItem key={constructKey(key, idx)} className="list-item-padded">
						<ListItemText
							className="truncate list-item"
							primary={client.name}
						/>
						<ListItemSecondaryAction>
							{!isClientSelected(currentClient, client.id) && (
								<Tooltip title="Manage client">
									<IconButton onClick={handleChange(client)}>
										<VisibilityIcon />
										<span className="MuiTypography-srOnly">Manage client</span>
									</IconButton>
								</Tooltip>
							)}
							<IconDeleteButtonwDialog onClick={handleDelete(client.id)} />
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default ClientList
