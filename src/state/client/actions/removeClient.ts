import { IClientState } from "../client-outline"
import { ClientId } from "../../../data/_config/shape"
import filterById from "../../../util/filters/ById"
import hasProperty from "../../../util/object/hasProperty"
import {
	setStorageClient,
	emptyClientValue,
	removeStorageClient,
} from "../../../util/localStorage/client"

const removeClient = (state: IClientState, payload: ClientId): IClientState => {
	const clients = state.state.clients.filter(filterById(payload, true))
	const currentClient =
		!hasProperty(state.state.currentClient, "id") ||
		state.state.currentClient?.id === payload
			? clients[0]
			: state.state.currentClient

	setStorageClient(currentClient?.id || emptyClientValue)

	if (clients.length === 0) {
		removeStorageClient()
	}

	return {
		...state,
		state: {
			...state.state,
			currentClient,
			clients,
		},
	}
}

export default removeClient
