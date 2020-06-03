import { CFCStruct, ClientId } from "../../../data/_config/shape"
import CFCUseCase from "../../../data/CFC/CFCLogic"

type Client = ClientId | undefined

/**
 * Fetches the canvases for a specific client
 *
 * @param {Client} client
 * @returns {Promise<CFCStruct[]>}
 */
async function getCanvasData(client: Client): Promise<CFCStruct[]> {
	if (!client) return []
	const data = await CFCUseCase.findByClient(client)
	return data
}

// eslint-disable-next-line import/prefer-default-export
export { getCanvasData }
