import React, { useContext, ReactElement, useState, ChangeEvent } from "react"
import {
	Box,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Card,
	Divider,
	Button,
	CardContent,
	makeStyles,
	Typography,
	ListItemIcon,
	Radio,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import GetAppIcon from "@material-ui/icons/GetApp"
import AddIcon from "@material-ui/icons/Add"
import PublishIcon from "@material-ui/icons/Publish"
import { Link } from "react-router-dom"
import { ClientContext } from "../../state/client"
import { generateKey, constructKey } from "../../util/key"
import { SectionTitle } from "../Content"
import { PublicRoutes } from "../../util/routes/routes"
import { ClientActionTypes } from "../../state/client/client-outline"
import { NewClientDialog } from "../../content/dialog"

// Client listing styles
const useCLStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(2),
	},
}))

// TODO: Pass clients and current clients to component
/**
 * Renders a list of current clients with the ability to change
 * which client is being edited
 *
 * @returns ReactElement
 */
const ClientList = (): ReactElement => {
	const {
		state: { clients, currentClient },
		dispatch,
	} = useContext(ClientContext)
	const [key] = useState(generateKey())

	/**
	 * Changes the current client selected for editing
	 *
	 * @param {ChangeEvent<HTMLInputElement>} event Event created by the radio change
	 * @returns void
	 */
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		// TODO: Pass the client to the method instead of performing a find
		dispatch({
			type: ClientActionTypes.ChangeCurrentClient,
			payload:
				clients.find(
					(c) => c.id && c.id === parseInt(event.target.value, 10)
				) || clients[0],
		})
	}

	/**
	 * Check if the rendering client is the current client
	 *
	 * @param {number} id client id to compare against the current client
	 * @returns boolean
	 */
	const checkChecked = (id = -1): boolean => {
		if (currentClient && currentClient.id === id) {
			return true
		}

		return false
	}

	return (
		<List>
			{clients.map((client, idx) => (
				<ListItem key={constructKey(key, idx)}>
					<ListItemIcon>
						<Radio
							checked={checkChecked(client.id)}
							value={client.id}
							inputProps={{ "aria-label": client.name }}
							onChange={handleChange}
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

/**
 * Component to render the whole Client Listing component
 * with section title, controls and the Client List
 *
 * @returns ReactElement
 */
const ClientListing = (): ReactElement => {
	const {
		state: { clients },
	} = useContext(ClientContext)
	const styles = useCLStyles()

	return (
		<Box>
			<SectionTitle>Client List</SectionTitle>
			<Card>
				<CardContent>
					<NewClientDialog
						triggerText="Add new client"
						startIcon={<AddIcon />}
						className={styles.button}
						size="medium"
					/>
					<Button variant="outlined" startIcon={<GetAppIcon />}>
						Import
					</Button>
				</CardContent>
				<Divider />
				{clients.length === 0 ? (
					<CardContent>
						<Typography variant="h6">No clients found</Typography>
						<Typography>
							You are able to import previously exported clients or go{" "}
							<Link to={PublicRoutes.Home}>Home</Link> to read additional
							information
						</Typography>
					</CardContent>
				) : (
					<ClientList />
				)}
			</Card>
		</Box>
	)
}

export default ClientListing
