/* eslint-disable no-unreachable */
import { Reducer } from "react"
import {
	IClientState,
	IClientReducerAction,
	ClientActionTypes,
} from "./client-outline"
import findObjectIndexByValue from "../../util/findObjectIndexByValue"

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
				console.error(`client ${id} exists`)
				return state
			}

			return {
				...state,
				state: {
					clients: [...state.state.clients, action.payload],
				},
			}
		}
		case ClientActionTypes.RemoveClient: {
			return state
		}
		case ClientActionTypes.BulkAdd: {
			const { payload } = action
			return {
				...state,
				state: {
					clients: [...payload],
				},
			}
		}
		case ClientActionTypes.ChangeCurrentClient: {
			const newstate = { ...state }
			newstate.state.currentClient = action.payload
			return {
				...newstate,
			}
		}
		default: {
			throw new Error(`Unsupported action type: ${JSON.stringify(action)}`)
		}
	}
}

export default ClientReducer
