import { Dispatch } from "react"
import { CFCStruct } from "../../data/_config/shape"

type QuestionValues = {
	one: number
	two: number
	three: number
	four: number | undefined
}

/**
 * State structure of the CFC Context
 *
 * @export
 * @interface ICFCState
 */
export interface ICFCState {
	duplicateError: boolean
	invalidDateError: boolean
	questionValues: QuestionValues
	dispatch: Dispatch<CFCReducerActions>
	leftCompare?: CFCStruct
	rightCompare?: CFCStruct
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
	ChangeQuestionValues = "change_question_values",
	ChangeCompare = "change_compare",
}

export type ChangeComparePayload = {
	left: CFCStruct
	right: CFCStruct
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
	| {
			type: CFCActionTypes.ChangeQuestionValues
			payload: ICFCState["questionValues"]
	  }
	| {
			type: CFCActionTypes.ChangeCompare
			payload: ChangeComparePayload
	  }
