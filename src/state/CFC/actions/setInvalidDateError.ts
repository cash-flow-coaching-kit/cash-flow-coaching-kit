import { ICFCState } from "../shape"

/**
 * Changes the `invalidDateError` value in the state
 *
 * @export
 * @param {ICFCState} state
 * @param {ICFCState["invalidDateError"]} payload
 * @returns {ICFCState}
 */
export default function setInvalidDateError(
	state: ICFCState,
	payload: ICFCState["invalidDateError"]
): ICFCState {
	return {
		...state,
		invalidDateError: payload,
	}
}
