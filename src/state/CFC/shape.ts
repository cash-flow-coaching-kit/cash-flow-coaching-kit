import { Dispatch } from "react"

/**
 * State structure of the CFC Context
 *
 * @export
 * @interface ICFCState
 */
export interface ICFCState {
	duplicateError: boolean
	invalidDateError: boolean
	dispatch: Dispatch<CFCReducerActions>
}

/**
 * Available action types
 *
 * @export
 * @enum {number}
 */
export enum CFCActionTypes {
	ChangeDuplicateError = "change_duplicate_error",
	ChangeInvalidDateError = "change_invalid_date_error",
}

/**
 * Defines the type:payload type pairing
 * aka; what the structure of the payload should be
 * given a certain type
 *
 * @export
 * @type {CFCReducerActions}
 */
export type CFCReducerActions =
	| {
			type: CFCActionTypes.ChangeDuplicateError
			payload: ICFCState["duplicateError"]
	  }
	| {
			type: CFCActionTypes.ChangeInvalidDateError
			payload: ICFCState["invalidDateError"]
	  }
