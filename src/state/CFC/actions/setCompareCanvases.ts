import { ICFCState, ChangeComparePayload } from "../shape"

/**
 * Change the canvases to compare
 *
 * @export
 * @param {ICFCState} state
 * @param {ChangeComparePayload} payload
 * @returns {ICFCState}
 */
export default function setCompareCanvases(
	state: ICFCState,
	payload: ChangeComparePayload
): ICFCState {
	return {
		...state,
		leftCompare: payload.left,
		rightCompare: payload.right,
	}
}
