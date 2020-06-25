import React, { ReactElement, useState } from "react"
import {
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Tooltip,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import VisibilityIcon from "@material-ui/icons/Visibility"
import { generateKey, constructKey } from "../../../util/lists/key"
import { ClientActionTypes } from "../../../state/client/client-outline"
import { IClientListProps } from "../_config/shape"
import { isClientSelected } from "../_config/utilities"
import { ClientDataStruct } from "../../../data/_config/shape"

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
}: IClientListProps): ReactElement => {
	const [key] = useState(generateKey())

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
		}
	}

	return (
		<>
			<List>
				{clients.map((client, idx) => (
					<ListItem key={constructKey(key, idx)} className="list-item-padded">
						<ListItemText primary={client.name} />
						<ListItemSecondaryAction>
							{!isClientSelected(currentClient, client.id) && (
								<Tooltip title="Manage client">
									<IconButton
										onClick={(): void => {
											handleChange(client)
										}}
									>
										<VisibilityIcon />
										<span className="MuiTypography-srOnly">Manage client</span>
									</IconButton>
								</Tooltip>
							)}
							<Tooltip title="Delete">
								<IconButton>
									<DeleteIcon />
									<span className="MuiTypography-srOnly">
										Delete client data
									</span>
								</IconButton>
							</Tooltip>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default ClientList
