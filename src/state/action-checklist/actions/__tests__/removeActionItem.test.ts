import { IRemoveActionItemPayload, IActionChecklistState, ActionChecklistActionTypes } from "../../shape";
import { newPriorityItem, newChecklistItem } from "../../../../data/ActionChecklist/_config/utilities";
import removeActionItem from "../removeActionItem";
import { ActionChecklistReducer } from "../..";
import filterById from "../../../../util/filters/ById";

describe("Change the state when removing a action item", () => {
  let state: IActionChecklistState;
  let payload: IRemoveActionItemPayload;

  beforeEach(function() {
    state = {
      dispatch: () => null,
      hideCompleted: false,
      databaseSyced: false,
      priority: [
        {...newPriorityItem(10, "cashOutActions"), order: [1, 2, 5], id: 1},
        {...newPriorityItem(12, "cashOutActions"), order: [1, 5, 10], id: 2},
        {...newPriorityItem(10, "funding"), order: [1, 5, 10], id: 3},
        {...newPriorityItem(10, "managing"), order: [5], id: 4},
      ],
      checklistCollection: [
        {...newChecklistItem(12, "cashOutActions"), id: 3},
        {...newChecklistItem(10, "cashOutActions"), id: 5},
        {...newChecklistItem(12, "funding"), id: 7},
      ],
      notes: [],
    }
    payload = {
      targetId: 5,
      priorityId: 2
    }
  })

  it("should remove the correct checklist item", function() {
    const newState = removeActionItem(state, payload)
    expect(newState.checklistCollection.length).toBe(2)
    expect(newState.checklistCollection.find((i) => i.id === payload.targetId))
      .toBeUndefined()
  })

  it("should remove the id from priority", function() {
    const newState = removeActionItem(state, payload)
    expect(newState.priority.length).toBe(4)
    expect(newState.priority[1].order).toEqual([1, 10])
    expect(newState.priority[0]).toMatchObject(state.priority[0])
  })

  it("should remove the priority item if there is no order", function() {
    payload.priorityId = 4
    const newState = removeActionItem(state, payload)
    expect(newState.priority).toHaveLength(3)
    expect(newState.priority.find(filterById(4))).toBeUndefined()
  })

  it("should not mutate the arguements", function() {
    const newState = removeActionItem(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ActionChecklistReducer(state, {
      type: ActionChecklistActionTypes.RemoveActionItem,
      payload
    })

    expect(newState.checklistCollection.find((i) => i.id === payload.targetId))
      .toBeUndefined()
    expect(newState.priority[1].order).toEqual([1, 10])
  })
})
