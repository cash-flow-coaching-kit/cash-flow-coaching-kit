import { ICFCState, CFCActionTypes } from "../shape"
import { defaultCFCState } from "../context"
import CFCReducer from "../reducer"
import setInvalidDateError from "../actions/setInvalidDateError"
import setQuestionValues from "../actions/setQuestionValues"

describe("Change the state for the question values", () => {
  let state: ICFCState
  let payload: ICFCState["questionValues"]

  beforeEach(() => {
    state = {...defaultCFCState}
    payload  = {
      one: 10,
      two: 500,
      three: 0,
      four: undefined
    }
  })

  it("can change the question values", function() {
    let newState = setQuestionValues(state, payload)
    expect(newState.questionValues.one).toBe(10)
    expect(newState.questionValues.four).toBe(undefined)

    newState = setQuestionValues(state, {...payload, four: 400})
    expect(newState.questionValues.four).toBe(400)
  })

  it("should not mutate the arguments", function() {
    let newState = setQuestionValues(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = CFCReducer(state, {
      type: CFCActionTypes.ChangeQuestionValues,
      payload
    })

    expect(newState.questionValues.two).toEqual(500)
  })
})
