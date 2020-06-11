import { ICFCState } from "../shape"

/**
 * Change the question values state value
 *
 * @export
 * @param {ICFCState} state
 * @param {ICFCState["questionValues"]} payload
 * @returns {ICFCState}
 */
export default function setQuestionValues(
	state: ICFCState,
	payload: ICFCState["questionValues"]
): ICFCState {
	return {
		...state,
		questionValues: payload,
	}
}
