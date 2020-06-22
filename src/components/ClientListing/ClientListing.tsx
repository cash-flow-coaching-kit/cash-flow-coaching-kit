import React, { useContext, ReactElement, useEffect } from "react"
import {
	Box,
	Card,
	Divider,
	CardContent,
	Button,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import { useMachine } from "@xstate/react"
import GetAppIcon from "@material-ui/icons/GetApp"
import { ClientContext } from "../../state/client"
import { NewClientDialog } from "../../content/dialog"
import { useCLStyles } from "./_config/styles"
import { NoClients, ClientList, ImportClient } from "./_partials"
import { IClientState } from "../../state/client/client-outline"
import ClientListingMachine from "./_config/machine"
import Loading from "../Loading"
import SectionTitle from "../SectionTitle"
import Spacer from "../Spacer"

/**
 * Component to render the whole Client Listing component
 * with section title, controls and the Client List
 *
 * @returns ReactElement
 */
const ClientListing = (): ReactElement => {
	const clientStore: IClientState = useContext(ClientContext)
	const {
		state: { clientSynced, clients, currentClient },
	} = clientStore
	const [state, send] = useMachine(ClientListingMachine)
	const styles = useCLStyles()

	// Change the state of the component once clients are synced
	useEffect(() => {
		if (clientSynced) {
			if (clients.length > 0) {
				send("HAS_DATA")
			} else {
				send("IS_EMPTY")
			}
		}
	}, [clientSynced, clients, send])

	/**
	 * Renders components based on the component state
	 *
	 * @returns ReactElement
	 */
	const renderWithMachine = (type: "list" | "current"): ReactElement => {
		switch (state.value) {
			case "data":
				if (type === "list") {
					return <ClientList store={clientStore} />
				}

				if (type === "current") {
					return (
						<>
							<List>
								<ListItem>
									<ListItemText>{currentClient?.name}</ListItemText>
								</ListItem>
							</List>
							<Divider />
							<CardContent className={styles.actions}>
								<Button variant="outlined" startIcon={<GetAppIcon />}>
									Export data
								</Button>
							</CardContent>
						</>
					)
				}

				return <></>
			case "empty":
				return <NoClients />
			case "loading":
			default:
				return <Loading />
		}
	}

	return (
		<Box>
			<SectionTitle>Current Client</SectionTitle>
			<Card>{renderWithMachine("current")}</Card>
			<Spacer space={4} />
			<SectionTitle>Client List</SectionTitle>
			<Card>
				{renderWithMachine("list")}
				<Divider />
				<CardContent className={styles.actions}>
					<ImportClient />
					<NewClientDialog
						triggerText="Add new client"
						startIcon={<AddIcon />}
						className={styles.button}
						size="medium"
					/>
				</CardContent>
			</Card>
		</Box>
	)
}

export default ClientListing
