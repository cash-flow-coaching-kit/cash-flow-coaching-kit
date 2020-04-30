import { Dispatch } from "react"

export interface IBaseClient {
	id?: number
	name: string
	createdAt?: number
}

export enum ClientActionTypes {
	AddClient = "add_client",
	RemoveClient = "remove_client",
	BulkAdd = "bulk_add",
	ChangeCurrentClient = "change_current_client",
	UpdateClientSynced = "change_client_syned",
}

export type IClientReducerAction =
	| { type: ClientActionTypes.AddClient; payload: IBaseClient }
	| { type: ClientActionTypes.RemoveClient; payload: number }
	| { type: ClientActionTypes.BulkAdd; payload: IBaseClient[] }
	| { type: ClientActionTypes.ChangeCurrentClient; payload: IBaseClient }
	| { type: ClientActionTypes.UpdateClientSynced; payload: boolean }

export interface IClientData {
	clients: IBaseClient[]
	currentClient?: IBaseClient
	clientSynced: boolean
}

export interface IClientState {
	state: IClientData
	dispatch: Dispatch<IClientReducerAction>
}
