import { ICFCState } from "../shape"

/**
 * Changes the `copyCanvasActive` value in the state
 *
 * @export
 * @param {ICFCState} state
 * @param {ICFCState["copyCanvasActive"]} payload
 * @returns {ICFCState}
 */
export default function setCopyCanvasActive(
	state: ICFCState,
	payload: ICFCState["copyCanvasActive"]
): ICFCState {
	return {
		...state,
		copyCanvasActive: payload,
	}
}
