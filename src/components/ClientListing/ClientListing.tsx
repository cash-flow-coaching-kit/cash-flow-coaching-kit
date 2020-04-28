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

const useCLStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(2),
	},
}))

const ClientList = (): ReactElement => {
	const {
		state: { clients, currentClient },
		dispatch,
	} = useContext(ClientContext)
	const [key] = useState(generateKey())

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		dispatch({
			type: ClientActionTypes.ChangeCurrentClient,
			payload:
				clients.find(
					(c) => c.id && c.id === parseInt(event.target.value, 10)
				) || clients[0],
		})
	}

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
