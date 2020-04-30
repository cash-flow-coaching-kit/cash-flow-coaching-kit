import { createContext } from "react"
import { IClientState } from "./client-outline"

export const defaultClientState: IClientState = {
	state: {
		clients: [],
		clientSynced: false,
	},
	dispatch: () => null,
}

const ClientContext = createContext(defaultClientState)

export default ClientContext
