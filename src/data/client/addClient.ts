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

		dispatch({
			type: ClientActionTypes.AddClient,
			payload: {
				...client,
				id: key,
			},
		})
	})

	return true
}

export default addClient
