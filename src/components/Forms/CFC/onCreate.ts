import { BaseCFCStruct, ClientId } from "../../../data/_config/shape"
import CFCUseCase from "../../../data/CFC/CFCLogic"

/**
 * Creates a CFC and returns the CFC id
 *
 * @param {BaseCFCStruct} values
 * @param {ClientId} client
 * @returns {Promise<number>}
 */
async function onCreate(
	values: BaseCFCStruct,
	client: ClientId
): Promise<number> {
	const id = await CFCUseCase.create({
		...values,
		clientId: client,
	})

	return id
}

export default onCreate
