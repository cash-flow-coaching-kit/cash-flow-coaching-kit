import React, { ReactElement, useState } from "react"
import {
	List,
	ListItem,
	ListItemIcon,
	Radio,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Tooltip,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import PublishIcon from "@material-ui/icons/Publish"
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
	const handleChange = (client: ClientDataStruct): void => {
		if (client?.id) {
			dispatch({
				type: ClientActionTypes.ChangeCurrentClient,
				payload: client.id,
			})
		}
	}

	return (
		<List>
			{clients.map((client, idx) => (
				<ListItem key={constructKey(key, idx)}>
					<ListItemIcon>
						<Tooltip title="Manage client">
							<Radio
								checked={isClientSelected(currentClient, client.id)}
								value={client.id}
								inputProps={{ "aria-label": client.name }}
								onChange={(): void => {
									handleChange(client)
								}}
								name="selected-client"
							/>
						</Tooltip>
					</ListItemIcon>
					<ListItemText primary={client.name} />
					<ListItemSecondaryAction>
						<Tooltip title="Export data">
							<IconButton>
								<PublishIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title="Delete">
							<IconButton>
								<DeleteIcon />
							</IconButton>
						</Tooltip>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	)
}

export default ClientList
