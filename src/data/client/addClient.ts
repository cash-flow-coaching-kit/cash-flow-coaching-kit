import { Dispatch } from "react"
import {
	ClientActionTypes,
	IClientReducerAction,
	IBaseClient,
} from "../../state/client/client-outline"
import ClientDB from "./ClientDatabase"

/**
 * Method for adding a new client to the application
 *
 * @param {Dispatch<IClientReducerAction>} dispatch Dispatch method for the client state
 * @param {IBaseClient} client client to be added
 * @returns Promise<void>
 * TODO: return promise to be resovled from the form
 */
const addClient = async (
	dispatch: Dispatch<IClientReducerAction>,
	client: IBaseClient
): Promise<boolean> => {
	await ClientDB.transaction("rw", ClientDB.clients, async () => {
		const key = await ClientDB.clients.add({
			name: client.name,
		})
		const newclient: IBaseClient = {
			...client,
			id: key,
		}

		dispatch({
			type: ClientActionTypes.AddClient,
			payload: newclient,
		})

		dispatch({
			type: ClientActionTypes.ChangeCurrentClient,
			payload: newclient,
		})
	})

	return true
}

export default addClient
