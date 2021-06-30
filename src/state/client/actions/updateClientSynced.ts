import { IClientState } from "../client-outline"

const updateClientSynced = (
	state: IClientState,
	payload: boolean
): IClientState => ({
	...state,
	state: {
		...state.state,
		clientSynced: payload,
	},
})

export default updateClientSynced
