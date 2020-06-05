import { IClientState } from "../client-outline"
import { ClientId } from "../../../data/_config/shape"
import filterById from "../../../util/filters/ById"
import {
	setStorageClient,
	emptyClientValue,
} from "../../../util/localStorage/client"

const changeCurrentClient = (
	state: IClientState,
	payload: ClientId
): IClientState => {
	const client = state.state.clients.find(filterById(payload))
	setStorageClient(client?.id || emptyClientValue)

	return {
		...state,
		state: {
			...state.state,
			currentClient: client,
		},
	}
}

export default changeCurrentClient
