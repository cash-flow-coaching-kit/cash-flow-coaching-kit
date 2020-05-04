import { createContext } from "react"
import { IClientState } from "./client-outline"

/**
 * Defines a default structure for the client state
 *
 */
export const defaultClientState: IClientState = {
	state: {
		clients: [],
		clientSynced: false,
	},
	dispatch: () => null,
}

// defines the client context
const ClientContext = createContext(defaultClientState)

export default ClientContext
