import { newChecklistItem } from "../_config/utilities"
import ActionChecklistUseCase from "../ChecklistLogic"
import { ActionChecklistId, ClientId } from "../../_config/shape";
import ActionChecklistDB from "../ActionChecklistDatabase";

describe("Unit tests for the Action Checklist Logic class", () => {
  const clientId: ClientId = 1
  const item = newChecklistItem(clientId, "planningBusiness")
  let createdId: ActionChecklistId;

  beforeEach(async () => {
    await ActionChecklistDB.actionItems.clear()
    await ActionChecklistDB.priority.clear()
    await ActionChecklistDB.notes.clear()

    createdId = await ActionChecklistUseCase.create(item)
  })

  afterAll(async () => {
    await ActionChecklistDB.actionItems.clear()
    await ActionChecklistDB.priority.clear()
    await ActionChecklistDB.notes.clear()
    ActionChecklistDB.close()
  })

  it("should be able to bulk update items", async function() {
    const nText = "hahahahahahahahahahahha"
    const nID = await ActionChecklistUseCase.create(newChecklistItem(5, "managing"))
    const fetched = await ActionChecklistUseCase.findById(nID)
    const createdFetched = await ActionChecklistUseCase.findById(createdId)

    if (fetched && createdFetched) {
      const updated = await ActionChecklistUseCase.bulkUpdate([
        {...fetched, description: nText},
        {...createdFetched, completed: true }
      ])

      expect(updated).toBe(createdId)

      const uFetched = await ActionChecklistUseCase.findById(nID)
      expect(uFetched?.description).toEqual(nText)
    }
  })
})
