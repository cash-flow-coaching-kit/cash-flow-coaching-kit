import { ActionChecklistNotesId } from "../../../../data/_config/shape";
import { IActionChecklistState, ActionChecklistActionTypes } from "../../shape";
import { newNotesItem } from "../../../../data/ActionChecklist/_config/utilities";
import removeNote from "../removeNote";
import { ActionChecklistReducer } from "../..";

describe("Change the state when removing a note", () => {
  let state: IActionChecklistState;
  let payload: ActionChecklistNotesId;

  beforeEach(function() {
    state = {
      dispatch: () => null,
      hideCompleted: false,
      databaseSyced: false,
      priority: [],
      checklistCollection: [],
      notes: [
        {...newNotesItem(4, "funding"), id: 5},
        {...newNotesItem(4, "planningBusiness"), id: 10},
        {...newNotesItem(6, "managing"), id: 7},
      ],
    }
    payload = 10
  })

  it("should remove the correct checklist item", function() {
    const newState = removeNote(state, payload)
    expect(newState.notes.length).toBe(2)
    expect(newState.notes.find((i) => i.id === payload)).toBeUndefined()
  })

  it("should not mutate the arguements", function() {
    const newState = removeNote(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ActionChecklistReducer(state, {
      type: ActionChecklistActionTypes.RemoveNote,
      payload
    })

    expect(newState.notes.length).toBe(2)
    expect(newState.notes.find((i) => i.id === payload)).toBeUndefined()
  })
})
