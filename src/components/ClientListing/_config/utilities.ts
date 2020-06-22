import { IClientState } from "../../../state/client/client-outline"
import { ClientDataStruct, ClientId } from "../../../data/_config/shape"
import ClientUseCase from "../../../data/client/ClientLogic"
import HealthCheckUseCase from "../../../data/healthChecks/HealthCheckLogic"
import ActionChecklistUseCase from "../../../data/ActionChecklist/ChecklistLogic"
import ActionPriorityUseCase from "../../../data/ActionChecklist/PriorityLogic"
import ActionNotesUseCase from "../../../data/ActionChecklist/NotesLogic"
import CFCUseCase from "../../../data/CFC/CFCLogic"

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

export const deleteClientRelatedData = async (
	client: ClientId
): Promise<boolean | Error> => {
	try {
		// delete client data from ClientDB
		await ClientUseCase.delete(client)
		// delete client data from HealthCheckDB
		await HealthCheckUseCase.deleteByClient(client)
		// delete client data from ActionChecklistDB
		await ActionChecklistUseCase.deleteByClient(client)
		await ActionPriorityUseCase.deleteByClient(client)
		await ActionNotesUseCase.deleteByClient(client)
		// delete client data from CFCDB
		await CFCUseCase.deleteByClient(client)

		return true
	} catch (e) {
		return e
	}
}
