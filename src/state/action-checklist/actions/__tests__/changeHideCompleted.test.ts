import changeHideCompleted from "../changeHideCompleted"
import { defaultActionChecklistState } from "../../context"
import { ActionChecklistReducer } from "../.."
import { ActionChecklistActionTypes } from "../../shape"

describe("Changing hide completed state", () => {
  it("Changes to true", function() {
    expect(changeHideCompleted(defaultActionChecklistState, true).hideCompleted)
      .toBeTruthy()
  })
  it("Changes to false", function() {
    expect(changeHideCompleted(defaultActionChecklistState, false).hideCompleted)
      .toBeFalsy()
  })
  it("Should not mutate the passed in state", function() {
    const newState = changeHideCompleted(defaultActionChecklistState, true)
    expect(defaultActionChecklistState).toEqual(defaultActionChecklistState)
  })

  test("the related reducer works as expected", function() {
    const newState = ActionChecklistReducer(defaultActionChecklistState, {
      type: ActionChecklistActionTypes.ChangeHideCompleted,
      payload: true
    })

    expect(changeHideCompleted(defaultActionChecklistState, true).hideCompleted)
      .toBeTruthy()
  })
})
