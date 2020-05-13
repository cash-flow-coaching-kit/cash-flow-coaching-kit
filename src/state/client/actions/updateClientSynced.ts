import { IClientState } from "../client-outline"

const updateClientSynced = (
	state: IClientState,
	payload: boolean
): IClientState => {
	return {
		...state,
		state: {
			...state.state,
			clientSynced: payload,
		},
	}
}

export default updateClientSynced
