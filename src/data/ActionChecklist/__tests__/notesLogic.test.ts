import { ClientId } from "../../_config/shape"
import ActionChecklistDB from "../ActionChecklistDatabase"
import { newNotesItem } from "../_config/utilities"
import ActionNotesUseCase from "../NotesLogic"
import { PossibleActionItems } from "../../../state/action-checklist/shape"

describe("Unit tests for the Action checklist notes logic", () => {
  const clientId: ClientId = 5
  const container: PossibleActionItems = "cashInActions"
  let item = newNotesItem(clientId, container)

  beforeEach(async () => {
    await ActionChecklistDB.notes.clear()
  })

  afterAll(async () => {
    await ActionChecklistDB.notes.clear()
    ActionChecklistDB.close()
  })

  it("should create a new note if none exists", async function() {
    const id = await ActionNotesUseCase.put(item)
    expect(typeof id).toEqual("number")
    item.notes = "WOOO!"
    const updated = await ActionNotesUseCase.put(item)
    expect(typeof updated).toEqual("number")
    const fetchedItem = await ActionNotesUseCase.findById(id)
    expect(fetchedItem).not.toBeUndefined()
    expect(fetchedItem?.notes).toEqual(item.notes)
    const synced = await ActionNotesUseCase.syncWithDatabase()
    expect(synced).toHaveLength(1)
  })
})
