import { ICFCState, CFCActionTypes } from "../shape"
import { defaultCFCState } from "../context"
import setDuplicateError from "../actions/setDuplicateError"
import CFCReducer from "../reducer"

describe("Change the state for the duplicate error", () => {
  let state: ICFCState

  beforeEach(() => {
    state = {...defaultCFCState}
  })

  it("can change the value to true", function() {
    let newState = setDuplicateError(state, true)
    expect(newState.duplicateError).toBeTruthy()
  })

  it("should not mutate the arguments", function() {
    let payload = true
    let newState = setDuplicateError(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = CFCReducer(state, {
      type: CFCActionTypes.ChangeDuplicateError,
      payload: true
    })

    expect(newState.duplicateError).toBeTruthy()
  })
})
