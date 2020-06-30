import React, { useContext, ReactElement, useEffect, useState } from "react"
import {
	Box,
	Card,
	Divider,
	CardContent,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core"

import AddIcon from "@material-ui/icons/Add"
import { useMachine } from "@xstate/react"
import { ClientContext } from "../../state/client"
import { NewClientDialog } from "../../content/dialog"
import { useCLStyles } from "./_config/styles"
import { NoClients, ClientList, ImportClient } from "./_partials"
import { IClientState } from "../../state/client/client-outline"
import ClientListingMachine from "./_config/machine"
import Loading from "../Loading"
import SectionTitle from "../SectionTitle"
import SnackbarMsg, { SnackbarMsgData } from "../SnackbarMsg/SnackbarMsg"
import Spacer from "../Spacer"
import ExportClientButton from "./_partials/ExportClient"

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
					return <ClientList store={clientStore} showSnackbar={showSnackbar} />
				}

				if (type === "current") {
					return (
						<>
							<List>
								<ListItem>
									<ListItemText className="truncate list-item">
										{currentClient?.name}
									</ListItemText>
								</ListItem>
							</List>
							<Divider />
							{currentClient?.id && (
								<>
									<CardContent className={styles.actions}>
										<ExportClientButton
											client={currentClient.id}
											showSnackbar={showSnackbar}
										/>
									</CardContent>
									<SnackbarMsg
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...snackbar}
										onClose={handleClose}
									/>
								</>
							)}
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
		<>
			<Box>
				<SectionTitle component="h2">Current client</SectionTitle>
				<Card>{renderWithMachine("current")}</Card>
				<Spacer space={4} />
				<SectionTitle component="h2">Client list</SectionTitle>
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
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<SnackbarMsg {...snackbar} onClose={handleClose} />
		</>
	)
}

export default ClientListing
