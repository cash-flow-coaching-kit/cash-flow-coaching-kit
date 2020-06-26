import {
	BaseCFCStruct,
	ClientId,
	DatabaseId,
} from "../../../data/_config/shape"
import CFCUseCase from "../../../data/CFC/CFCLogic"
import { newTimestamp } from "../../../util/dates"

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
): Promise<DatabaseId> {
	const id = await CFCUseCase.create({
		...values,
		clientId: client,
		createdAt: newTimestamp(),
	})

	return id
}

export default onCreate
