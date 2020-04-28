import { Dispatch } from "react"

export interface IBaseClient {
	id?: number
	name: string
}

export enum ClientActionTypes {
	AddClient = "add_client",
	RemoveClient = "remove_client",
	BulkAdd = "bulk_add",
	ChangeCurrentClient = "change_current_client",
}

export type IClientReducerAction =
	| { type: ClientActionTypes.AddClient; payload: IBaseClient }
	| { type: ClientActionTypes.RemoveClient; payload: number }
	| { type: ClientActionTypes.BulkAdd; payload: IBaseClient[] }
	| { type: ClientActionTypes.ChangeCurrentClient; payload: IBaseClient }

export interface IClientData {
	clients: IBaseClient[]
	currentClient?: IBaseClient
}

export interface IClientState {
	state: IClientData
	dispatch: Dispatch<IClientReducerAction>
}
