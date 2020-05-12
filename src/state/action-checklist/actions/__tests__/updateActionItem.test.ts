import { IUpdateActionItemPayload, IActionChecklistState, ActionChecklistActionTypes } from "../../shape";
import { newChecklistItem } from "../../../../data/ActionChecklist/_config/utilities";
import { updateActionItem } from "..";
import { ActionChecklistReducer } from "../..";

describe('Change the state when updating a action item', () => {
  let state: IActionChecklistState;
  let payload: IUpdateActionItemPayload;
  const newDescription = "updated description"

  beforeEach(function() {
    state = {
      dispatch: () => null,
      hideCompleted: false,
      databaseSyced: false,
      priority: [],
      checklistCollection: [
        {...newChecklistItem(10, "planningBusiness"), id: 5},
        {...newChecklistItem(10, "cashOutActions"), id: 10}
      ],
      notes: [],
    }
    payload = {
      data: {
        id: 5,
        ...newChecklistItem(5, "cashOutActions"),
        description: newDescription,
        completed: true
      },
      id: 10
    }
  })

  it("should update the correct item", function() {
    const newState = updateActionItem(state, payload)
    expect(newState.checklistCollection[1].description).toEqual(newDescription)
    expect(newState.checklistCollection[1].completed).toBeTruthy()
    expect(newState.checklistCollection[1].actionContainer).toEqual("cashOutActions")

    expect(newState.checklistCollection[0].description).not.toEqual(newDescription)
  })

  it("should not be able to change the id", function() {
    const newState = updateActionItem(state, payload)
    expect(newState.checklistCollection[1].id).toEqual(payload.id)
  })

  it("should not mutate the arguements", function() {
    const newState = updateActionItem(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ActionChecklistReducer(state, {
      type: ActionChecklistActionTypes.UpdateActionItem,
      payload
    })

    expect(newState.checklistCollection[1].description).toEqual(newDescription)
    expect(newState.checklistCollection[1].completed).toBeTruthy()
  })
})
