import { Dispatch } from "react"
import {
	ClientDataStruct,
	ClientId,
	HealthCheckId,
} from "../../data/_config/shape"

/**
 * Actions that can be performed for state changes
 *
 * @export
 * @enum {number}
 */
export enum ClientActionTypes {
	AddClient = "add_client",
	RemoveClient = "remove_client",
	BulkAdd = "bulk_add",
	ChangeCurrentClient = "change_current_client",
	UpdateClientSynced = "change_client_syned",
	UpdateLastViewedHC = "change_last_viewed_hc",
}

export type LastViewedHC = HealthCheckId | null

/**
 * Defines the type:payload type pairing
 * aka; what the structure of the payload should be
 * given a certain type
 *
 * @exports
 * @type IClientReducerAction
 */
export type IClientReducerAction =
	| { type: ClientActionTypes.AddClient; payload: ClientDataStruct }
	| { type: ClientActionTypes.RemoveClient; payload: ClientId }
	| { type: ClientActionTypes.BulkAdd; payload: ClientDataStruct[] }
	| { type: ClientActionTypes.ChangeCurrentClient; payload: ClientId }
	| { type: ClientActionTypes.UpdateClientSynced; payload: boolean }
	| {
			type: ClientActionTypes.UpdateLastViewedHC
			payload: LastViewedHC
	  }

/**
 * Data structure for the state object
 *
 * @export
 * @interface IClientData
 */
export interface IClientData {
	clients: ClientDataStruct[]
	currentClient?: ClientDataStruct
	clientSynced: boolean
	lastViewedHC: LastViewedHC
}

/**
 * Strcuture for the client context
 *
 * @export
 * @interface IClientState
 */
export interface IClientState {
	state: IClientData
	dispatch: Dispatch<IClientReducerAction>
}
