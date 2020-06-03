import { CFCStruct, ClientId } from "../../../data/_config/shape"
import CFCUseCase from "../../../data/CFC/CFCLogic"
import { SelectFieldOptions } from "../../SelectField/SelectField"
import { canvasDisplayTitle } from "../../CFC/__config/utilities"

type Client = ClientId | undefined

/**
 * Fetches the canvases for a specific client
 *
 * @param {Client} client
 * @returns {Promise<CFCStruct[]>}
 */
export async function getCanvasData(client: Client): Promise<CFCStruct[]> {
	if (!client) return []
	const data = await CFCUseCase.findByClient(client)
	return data
}

/**
 * Reduces a CFC object into options for the select field
 *
 * @returns {ReducerHOF<SelectFieldOptions, CFCStruct>}
 */
export function reduceToOptions(): ReducerHOF<SelectFieldOptions, CFCStruct> {
	return (acc, cur): SelectFieldOptions => {
		return acc.concat({
			value: cur.id || -1,
			label: canvasDisplayTitle(cur),
		})
	}
}
