import { IActionChecklistState } from "../shape"

/**
 * Change the state for the hide completed value
 *
 * @param {IActionChecklistState} state
 * @param {boolean} payload
 * @returns IActionChecklistState
 */
const changeHideCompleted = (
	state: IActionChecklistState,
	payload: boolean
): IActionChecklistState => {
	return {
		...state,
		hideCompleted: payload,
	}
}

export default changeHideCompleted
