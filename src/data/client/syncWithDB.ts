import { Dispatch } from "react"
import {
	IClientReducerAction,
	ClientActionTypes,
} from "../../state/client/client-outline"
import ClientUseCase from "./ClientLogic"
import {
	getStorageClient,
	emptyClientValue,
} from "../../util/localStorage/client"
import filterById from "../../util/filters/ById"

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

	const currentStorageClient = getStorageClient()

	if (!currentStorageClient || currentStorageClient === emptyClientValue) {
		if (clients[0]?.id) {
			dispatch({
				type: ClientActionTypes.ChangeCurrentClient,
				payload: clients[0].id,
			})
		}
	} else {
		const filtered = clients.filter(filterById(currentStorageClient))
		if (filtered[0]?.id) {
			dispatch({
				type: ClientActionTypes.ChangeCurrentClient,
				payload: filtered[0].id,
			})
		}
	}

	dispatch({
		type: ClientActionTypes.UpdateClientSynced,
		payload: true,
	})
}

export default syncClientsWithDb
