import { IActionChecklistState, IUpdateDatabaseSyncPayload, ActionChecklistActionTypes } from "../../shape"
import updateDatabaseSync from "../updateDatabaseSync"
import { newNotesItem, newPriorityItem, newChecklistItem } from "../../../../data/ActionChecklist/_config/utilities";
import { ActionChecklistReducer } from "../..";

describe("Change the state on a database sync", () => {
  let state: IActionChecklistState;
  let payload: IUpdateDatabaseSyncPayload;

  let oldNotes = newNotesItem(10, "recordKeeping")
  let newNotes = newNotesItem(5, "cashInActions")

  let oldPriority = newPriorityItem(50, "cashOutActions")
  let newPriority = newPriorityItem(5, "managing")

  let oldChecklists = newChecklistItem(0, "funding")
  let newChecklists = newChecklistItem(5, "planningCommitments")

  beforeEach(function() {
    state = {
      dispatch: () => null,
      hideCompleted: false,
      databaseSyced: false,
      priority: [{...oldPriority}],
      checklistCollection: [{...oldChecklists}],
      notes: [{...oldNotes}],
    }
    payload = {
      notes: [{...newNotes}],
      priority: [{...newPriority}],
      data: [{...newChecklists}]
    }
  })

  it("should change the database synced value", function() {
    const newState = updateDatabaseSync(state, payload)
    expect(newState.databaseSyced).toBeTruthy()
  })

  it("should replace the notes", function() {
    const newState = updateDatabaseSync(state, payload)
    expect(newState.notes.length).toBeGreaterThan(0)
    expect(newState.notes[0]).toMatchObject(newNotes)
  })

  it("should replace the priority", function() {
    const newState = updateDatabaseSync(state, payload)
    expect(newState.priority.length).toBeGreaterThan(0)
    expect(newState.priority[0]).toMatchObject(newPriority)
  })

  it("should replace the checklists", function() {
    const newState = updateDatabaseSync(state, payload)
    expect(newState.checklistCollection.length).toBeGreaterThan(0)
    expect(newState.checklistCollection[0]).toMatchObject(newChecklists)
  })

  it("should not mutate the passed in arguements", function() {
    const newState = updateDatabaseSync(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ActionChecklistReducer(state, {
      type: ActionChecklistActionTypes.UpdateDatabaseSync,
      payload
    })

    expect(newState.databaseSyced).toBeTruthy()
    expect(newState.notes.length).toBeGreaterThan(0)
    expect(newState.priority.length).toBeGreaterThan(0)
    expect(newState.checklistCollection.length).toBeGreaterThan(0)
  })
})
