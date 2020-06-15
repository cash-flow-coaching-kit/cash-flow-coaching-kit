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
import { generateKey, constructKey } from "../../../util/lists/key"
import { ClientActionTypes } from "../../../state/client/client-outline"
import { IClientListProps } from "../_config/shape"
import { isClientSelected } from "../_config/utilities"
import { ClientDataStruct } from "../../../data/_config/shape"
import ExportClientButton from "./ExportClient"
import { SnackbarMsgData } from "../../SnackbarMsg/SnackbarMsg"
import SnackbarMsg from "../../SnackbarMsg"

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
	const [snackbar, setSnackbar] = useState<SnackbarMsgData>({
		open: false,
		msg: "",
	})

	function showSnackbar(
		msg: SnackbarMsgData["msg"],
		severity: SnackbarMsgData["severity"]
	): void {
		setSnackbar({ ...snackbar, msg, severity, open: true })
	}

	function handleClose(
		event: React.SyntheticEvent | React.MouseEvent,
		reason?: string
	): void {
		if (reason && reason === "clickaway") {
			return
		}

		setSnackbar({ ...snackbar, open: false })
	}

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
					<ListItem key={constructKey(key, idx)}>
						<ListItemIcon>
							<Tooltip title="Manage client">
								<Radio
									checked={isClientSelected(currentClient, client.id)}
									value={client.id}
									inputProps={{ "aria-label": client.name }}
									onChange={handleChange(client)}
									name="selected-client"
								/>
							</Tooltip>
						</ListItemIcon>
						<ListItemText primary={client.name} />
						<ListItemSecondaryAction>
							<ExportClientButton
								client={client.id || -1}
								showSnackbar={showSnackbar}
							/>
							<Tooltip title="Delete">
								<IconButton>
									<DeleteIcon />
								</IconButton>
							</Tooltip>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
			<SnackbarMsg
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...snackbar}
				onClose={handleClose}
			/>
		</>
	)
}

export default ClientList
