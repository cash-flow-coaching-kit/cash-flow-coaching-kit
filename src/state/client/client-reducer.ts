/* eslint-disable no-unreachable */
import { Reducer } from "react"
import {
	IClientState,
	IClientReducerAction,
	ClientActionTypes,
} from "./client-outline"
import {
	addClient,
	bulkAdd,
	changeCurrentClient,
	updateClientSynced,
	removeClient,
} from "./actions"

/**
 * Reducer used for the client state
 *
 * @param {IClientState} state Current state
 * @param {IClientReducerAction} action action to perform
 * @returns IClientState
 */
const ClientReducer: Reducer<IClientState, IClientReducerAction> = (
	state: IClientState,
	action: IClientReducerAction
): IClientState => {
	switch (action.type) {
		case ClientActionTypes.AddClient: {
			return addClient(state, action.payload)
		}
		case ClientActionTypes.RemoveClient: {
			return removeClient(state, action.payload)
		}
		case ClientActionTypes.BulkAdd: {
			return bulkAdd(state, action.payload)
		}
		case ClientActionTypes.ChangeCurrentClient: {
			return changeCurrentClient(state, action.payload)
		}
		case ClientActionTypes.UpdateClientSynced: {
			return updateClientSynced(state, action.payload)
		}
		default: {
			return state
		}
	}
}

export default ClientReducer
