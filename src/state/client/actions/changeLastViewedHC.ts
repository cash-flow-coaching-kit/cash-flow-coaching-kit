import { IClientState, LastViewedHC } from "../client-outline"

const changeLastViewedHC = (
	state: IClientState,
	payload: LastViewedHC
): IClientState => {
	return {
		...state,
		state: {
			...state.state,
			lastViewedHC: payload,
		},
	}
}

export default changeLastViewedHC
