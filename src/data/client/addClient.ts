import { Dispatch } from "react"
import {
	ClientActionTypes,
	IClientReducerAction,
	IBaseClient,
} from "../../state/client/client-outline"
import ClientDB from "./ClientDatabase"

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
