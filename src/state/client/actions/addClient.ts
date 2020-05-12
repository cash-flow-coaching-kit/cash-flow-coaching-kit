import { IClientState } from "../client-outline"
import { ClientDataStruct } from "../../../data/_config/shape"

const addClient = (
	state: IClientState,
	payload: ClientDataStruct
): IClientState => {
	const newClients = state.state.clients.concat(payload)
	return {
		...state,
		state: {
			...state.state,
			clients: newClients,
		},
	}
}

export default addClient
