import { IUpdateNotesPayload, IActionChecklistState, ActionChecklistActionTypes } from "../../shape";
import { newNotesItem } from "../../../../data/ActionChecklist/_config/utilities";
import updateNote from "../updateNote";
import { ActionChecklistReducer } from "../..";

describe('Change the state when updating a note', () => {
  let state: IActionChecklistState;
  let payload: IUpdateNotesPayload;
  const newNoteText = "has this updated?"

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
      ],
    }
    payload = {
      data: {
        ...newNotesItem(10, "funding"),
        notes: newNoteText,
      },
      id: 10
    }
  })

  it("should update the correct item", function() {
    const newState = updateNote(state, payload)
    expect(newState.notes[1].notes).toEqual(newNoteText)
    expect(newState.notes[1].actionContainer).toEqual("funding")

    expect(newState.notes[0].notes).not.toEqual(newNoteText)
  })

  it("should not be able to change the id", function() {
    const newState = updateNote(state, payload)
    expect(newState.notes[1].id).toEqual(payload.id)
  })

  it("should not mutate the arguements", function() {
    const newState = updateNote(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ActionChecklistReducer(state, {
      type: ActionChecklistActionTypes.UpdateNotes,
      payload
    })

    expect(newState.notes[1].notes).toEqual(newNoteText)
    expect(newState.notes[0].notes).not.toEqual(newNoteText)
  })
})
