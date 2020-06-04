import { ICFCState } from "../shape"

/**
 * Changes the `duplicateError` value in the state
 *
 * @export
 * @param {ICFCState} state
 * @param {ICFCState["duplicateError"]} payload
 * @returns {ICFCState}
 */
export default function setDuplicateError(
	state: ICFCState,
	payload: ICFCState["duplicateError"]
): ICFCState {
	return {
		...state,
		duplicateError: payload,
	}
}
