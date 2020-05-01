/* eslint-disable no-unreachable */
import { Reducer } from "react"
import {
	IClientState,
	IClientReducerAction,
	ClientActionTypes,
} from "./client-outline"
import findObjectIndexByValue from "../../util/findObjectIndexByValue"

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
			const {
				state: { clients },
			} = state
			const {
				payload: { id },
			} = action

			if (findObjectIndexByValue(clients, "id", id) !== -1) {
				return { ...state }
			}

			const newstate = { ...state }
			newstate.state.clients = [...state.state.clients, action.payload]
			return { ...newstate }
		}
		case ClientActionTypes.RemoveClient: {
			return state
		}
		case ClientActionTypes.BulkAdd: {
			const { payload } = action
			const newstate = { ...state }
			newstate.state.clients = [...payload]
			return { ...newstate }
		}
		case ClientActionTypes.ChangeCurrentClient: {
			const newstate = { ...state }
			newstate.state.currentClient = action.payload
			return {
				...newstate,
			}
		}
		case ClientActionTypes.UpdateClientSynced: {
			const newstate = { ...state }
			newstate.state.clientSynced = action.payload
			return { ...newstate }
		}
		default: {
			throw new Error(`Unsupported action type: ${JSON.stringify(action)}`)
		}
	}
}

export default ClientReducer
