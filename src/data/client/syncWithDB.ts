import { Dispatch } from "react"
import ClientDB from "./ClientDatabase"
import {
	IClientReducerAction,
	ClientActionTypes,
} from "../../state/client/client-outline"

const syncClientsWithDb = async (
	dispatch: Dispatch<IClientReducerAction>
): Promise<void> => {
	await ClientDB.transaction("r", ClientDB.clients, async () => {
		const clients = await ClientDB.clients.toArray()

		dispatch({
			type: ClientActionTypes.BulkAdd,
			payload: clients,
		})

		if (clients.length > 0) {
			dispatch({
				type: ClientActionTypes.ChangeCurrentClient,
				payload: clients[0],
			})
		}
	})
}

export default syncClientsWithDb
