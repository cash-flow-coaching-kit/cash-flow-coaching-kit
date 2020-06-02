import { BaseCFCStruct, ClientId } from "../../../data/_config/shape"
import CFCUseCase from "../../../data/CFC/CFCLogic"

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
