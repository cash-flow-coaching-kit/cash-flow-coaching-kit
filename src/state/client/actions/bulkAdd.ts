import { IClientState } from "../client-outline"
import { ClientDataStruct } from "../../../data/_config/shape"

const bulkAdd = (
	state: IClientState,
	payload: ClientDataStruct[]
): IClientState => ({
	...state,
	state: {
		...state.state,
		clients: payload,
	},
})

export default bulkAdd
