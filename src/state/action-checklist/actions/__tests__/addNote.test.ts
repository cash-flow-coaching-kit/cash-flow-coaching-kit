import { ActionChecklistNotesStruct } from "../../../../data/_config/shape";
import { IActionChecklistState, ActionChecklistActionTypes } from "../../shape";
import { newNotesItem } from "../../../../data/ActionChecklist/_config/utilities";
import addNote from "../addNote";
import { ActionChecklistReducer } from "../..";

describe("Change the state when adding a note", () => {
  let state: IActionChecklistState;
  let payload: ActionChecklistNotesStruct;

  beforeEach(function() {
    state = {
      dispatch: () => null,
      hideCompleted: false,
      databaseSyced: false,
      priority: [],
      checklistCollection: [],
      notes: [
        {...newNotesItem(4, "funding")}
      ],
    }
    payload = {
      ...newNotesItem(10, "funding"),
      id: 10
    }
  })

  it("should add a note to the array", function() {
    const newState = addNote(state, payload)
    expect(newState.notes.length).toBe(2)
    expect(newState.notes[1]).toMatchObject(payload)
  })

  it("should not mutate the arguements", function() {
    const newState = addNote(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ActionChecklistReducer(state, {
      type: ActionChecklistActionTypes.AddNotes,
      payload
    })

    expect(newState.notes[1]).toMatchObject(payload)
  })
})
