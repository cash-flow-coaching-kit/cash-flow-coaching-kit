import { ICFCState, CFCActionTypes } from "../shape"
import { defaultCFCState } from "../context"
import CFCReducer from "../reducer"
import setInvalidDateError from "../actions/setInvalidDateError"

describe("Change the state for the invalid date error", () => {
  let state: ICFCState

  beforeEach(() => {
    state = {...defaultCFCState}
  })

  it("can change the value to true", function() {
    let newState = setInvalidDateError(state, true)
    expect(newState.invalidDateError).toBeTruthy()
  })

  it("should not mutate the arguments", function() {
    let payload = true
    let newState = setInvalidDateError(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = CFCReducer(state, {
      type: CFCActionTypes.ChangeInvalidDateError,
      payload: true
    })

    expect(newState.invalidDateError).toBeTruthy()
  })
})
