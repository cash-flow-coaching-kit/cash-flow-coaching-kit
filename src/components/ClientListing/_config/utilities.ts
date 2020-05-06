import { IClientState } from "../../../state/client/client-outline"
import { ClientDataStruct } from "../../../data/_config/shape"

/**
 * Checks if the store contains any clients
 *
 * @param {IClientState} store
 * @returns boolean
 */
export const hasClients = ({ state: { clients } }: IClientState): boolean => {
	return clients.length !== 0
}

/**
 * Checks if the current client is selected
 *
 * @param {ClientDataStruct|undefined} currentClient currently selected client
 * @param {number} id client id to compare to the current client
 * @returns {boolean}
 */
export const isClientSelected = (
	currentClient: ClientDataStruct | undefined,
	id = -1
): boolean => {
	return (currentClient && currentClient.id === id) || false
}
