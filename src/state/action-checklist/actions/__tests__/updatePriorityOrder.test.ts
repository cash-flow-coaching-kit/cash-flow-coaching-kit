import { IActionChecklistState, IUpdateActionItemPayload, ActionChecklistActionTypes } from "../../shape";
import { newChecklistItem, newPriorityItem } from "../../../../data/ActionChecklist/_config/utilities";
import { ActionChecklistPriorityStruct } from "../../../../data/_config/shape";
import updatePriorityOrder from "../updatePriorityOrder";
import { ActionChecklistReducer } from "../..";

describe("Change the state of a priority items order", () => {
  let state: IActionChecklistState;
  let payload: ActionChecklistPriorityStruct;

  beforeEach(function() {
    state = {
      dispatch: () => null,
      hideCompleted: false,
      databaseSyced: false,
      priority: [
        {...newPriorityItem(10, "cashOutActions"), order: [1], id: 1},
        {...newPriorityItem(10, "cashOutActions"), order: [1], id: 2},
      ],
      checklistCollection: [],
      notes: [],
    }
    payload = {
      ...newPriorityItem(10, "cashOutActions"),
      order: [1, 2],
      id: 2
    }
  })

  it("should update the correct item", function() {
    const newState = updatePriorityOrder(state, payload)
    expect(newState.priority[1].order).toEqual([1, 2])
    expect(newState.priority[1]).toMatchObject(payload)

    expect(newState.priority[0].order).toEqual(state.priority[0].order)
  })

  it("should not mutate the arguements", function() {
    const newState = updatePriorityOrder(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ActionChecklistReducer(state, {
      type: ActionChecklistActionTypes.UpdatePriorityOrder,
      payload
    })

    expect(newState.priority[1].order).toEqual([1, 2])
    expect(newState.priority[0].order).toEqual(state.priority[0].order)
  })

  // This was added to get the coverage to 100% for the reducer
  // With TypeScript this will never be allowed
  test("Test reducer with invalid type and payload", function() {
    const newState = ActionChecklistReducer(state, {
      type: null,
      payload: null
    })

    expect(newState).toMatchObject(state)
  })
})
