import { Dispatch } from "react"
import {
	IClientReducerAction,
	ClientActionTypes,
} from "../../state/client/client-outline"
import ClientUseCase from "./ClientLogic"

/**
 * Syncs the client state with the db
 *
 * @param {Dispatch<IClientReducerAction>} dispatch Dispatch method for the client state
 * @returns Promise<void>
 * TODO: return promise to be resovled from the form
 */
const syncClientsWithDb = async (
	dispatch: Dispatch<IClientReducerAction>
): Promise<void> => {
	const clients = await ClientUseCase.syncWithDatabase()

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

	dispatch({
		type: ClientActionTypes.UpdateClientSynced,
		payload: true,
	})
}

export default syncClientsWithDb
