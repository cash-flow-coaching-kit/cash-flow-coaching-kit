import { newChecklistItem, newPriorityItem } from "../../../../data/ActionChecklist/_config/utilities";
import { IActionChecklistState, IAddNewActionItemPayload, ActionChecklistActionTypes } from "../../shape";
import addNewActionItem from "../addNewActionItem";
import lastInArray from "../../../../util/array/lastInArray";
import ActionChecklistReducer from "../../reducer";

describe("Change state when adding anew action item", () => {
  let state: IActionChecklistState;
  let payload: IAddNewActionItemPayload;

  beforeEach(function() {
    state = {
      dispatch: () => null,
      hideCompleted: false,
      databaseSyced: false,
      priority: [
        {...newPriorityItem(6, "cashOutActions"), id: 11, order: [4, 5]},
        {...newPriorityItem(5, "cashOutActions"), id: 10, order: [2, 3]},
        {...newPriorityItem(5, "funding"), id: 12},
      ],
      checklistCollection: [{...newChecklistItem(10, "planningBusiness")}],
      notes: [],
    }
    payload = {
      checklist: {
        id: 1,
        ...newChecklistItem(5, "cashOutActions")
      },
      priority: 10
    }
  })

  it("should add to the checklist collection", function() {
    const newState = addNewActionItem(state, payload)
    expect(newState.checklistCollection.length).toBeGreaterThan(1)
    expect(newState.checklistCollection[1]).toMatchObject(payload.checklist)
  })

  it("should update the correct priority order", function() {
    const newState = addNewActionItem(state, payload)
    expect(newState.priority[1].order).toEqual([2, 3, payload.checklist.id])
  })

  it("handles missing id accordingly", function() {
    delete payload.checklist.id
    const newState = addNewActionItem(state, payload)
    expect(lastInArray(newState.priority[1].order)).toBe(-1)
  })


  it("should not mutate the arguements", function() {
    const newState = addNewActionItem(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ActionChecklistReducer(state, {
      type: ActionChecklistActionTypes.AddNewActionItem,
      payload
    })

    expect(newState.checklistCollection[1]).toMatchObject(payload.checklist)
    expect(newState.priority[1].order).toEqual([2, 3, payload.checklist.id])
  })
})
