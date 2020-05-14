import { Dispatch } from "react"
import {
	ClientActionTypes,
	IClientReducerAction,
} from "../../state/client/client-outline"
import { ClientDataStruct } from "../_config/shape"
import ClientUseCase from "./ClientLogic"

/**
 * Method for adding a new client to the application
 *
 * @param {Dispatch<IClientReducerAction>} dispatch Dispatch method for the client state
 * @param {IBaseClient} client client to be added
 * @returns Promise<void>
 */
const addClient = async (
	dispatch: Dispatch<IClientReducerAction>,
	client: ClientDataStruct
): Promise<boolean> => {
	const key = await ClientUseCase.create({
		name: client.name,
	})

	const newclient: ClientDataStruct = {
		...client,
		id: key,
	}

	dispatch({
		type: ClientActionTypes.AddClient,
		payload: newclient,
	})

	dispatch({
		type: ClientActionTypes.ChangeCurrentClient,
		// Defined on line 26
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		payload: newclient.id!,
	})

	return true
}

export default addClient
