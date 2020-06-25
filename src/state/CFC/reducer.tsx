import { Reducer } from "react"
import { ICFCState, CFCReducerActions, CFCActionTypes } from "./shape"
import setDuplicateError from "./actions/setDuplicateError"
import setInvalidDateError from "./actions/setInvalidDateError"
import setQuestionValues from "./actions/setQuestionValues"
import setCompareCanvases from "./actions/setCompareCanvases"

type ICFCReducer = Reducer<ICFCState, CFCReducerActions>

/**
 * Reducer used for the CFC state
 *
 * @param {ICFCState} state Current state
 * @param {CFCReducerActions} action action to perform
 * @returns ICFCState
 */
const CFCReducer: ICFCReducer = (
	state: ICFCState,
	action: CFCReducerActions
): ICFCState => {
	switch (action.type) {
		case CFCActionTypes.ChangeDuplicateError:
			return setDuplicateError(state, action.payload)
		case CFCActionTypes.ChangeInvalidDateError:
			return setInvalidDateError(state, action.payload)
		case CFCActionTypes.ChangeQuestionValues:
			return setQuestionValues(state, action.payload)
		case CFCActionTypes.ChangeCompare:
			return setCompareCanvases(state, action.payload)
		default:
			return state
	}
}

export default CFCReducer
