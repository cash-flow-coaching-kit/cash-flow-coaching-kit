import { Dispatch } from "react"

/**
 * Client data structure
 *
 * @export
 * @interface IBaseClient
 */
export interface IBaseClient {
	id?: number
	name: string
	createdAt?: number
}

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
}

/**
 * Defines the type:payload type pairing
 * aka; what the structure of the payload should be
 * given a certain type
 *
 * @exports
 * @type IClientReducerAction
 */
export type IClientReducerAction =
	| { type: ClientActionTypes.AddClient; payload: IBaseClient }
	| { type: ClientActionTypes.RemoveClient; payload: number }
	| { type: ClientActionTypes.BulkAdd; payload: IBaseClient[] }
	| { type: ClientActionTypes.ChangeCurrentClient; payload: IBaseClient }
	| { type: ClientActionTypes.UpdateClientSynced; payload: boolean }

/**
 * Data structure for the state object
 *
 * @export
 * @interface IClientData
 */
export interface IClientData {
	clients: IBaseClient[]
	currentClient?: IBaseClient
	clientSynced: boolean
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
