import React, { ReactElement, useState } from "react"
import {
	List,
	ListItem,
	ListItemIcon,
	Radio,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import PublishIcon from "@material-ui/icons/Publish"
import { generateKey, constructKey } from "../../../util/key"
import {
	ClientActionTypes,
	IBaseClient,
} from "../../../state/client/client-outline"
import { IClientListProps } from "../_config/shape"
import { isClientSelected } from "../_config/utilities"

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
	const handleChange = (client: IBaseClient): void => {
		dispatch({
			type: ClientActionTypes.ChangeCurrentClient,
			payload: client,
		})
	}

	return (
		<List>
			{clients.map((client, idx) => (
				<ListItem key={constructKey(key, idx)}>
					<ListItemIcon>
						<Radio
							checked={isClientSelected(currentClient, client.id)}
							value={client.id}
							inputProps={{ "aria-label": client.name }}
							onChange={(): void => {
								handleChange(client)
							}}
							name="selected-client"
						/>
					</ListItemIcon>
					<ListItemText primary={client.name} />
					<ListItemSecondaryAction>
						<IconButton>
							<PublishIcon />
						</IconButton>
						<IconButton>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	)
}

export default ClientList
