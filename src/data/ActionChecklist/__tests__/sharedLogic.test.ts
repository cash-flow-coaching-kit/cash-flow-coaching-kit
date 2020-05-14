import { ClientId, ActionChecklistId } from "../../_config/shape";
import { newChecklistItem, newPriorityItem } from "../_config/utilities";
import ActionChecklistDB from "../ActionChecklistDatabase";
import ActionChecklistUseCase from "../ChecklistLogic";
import ActionPriorityUseCase from "../PriorityLogic";

describe("Test db logic that is shared among Action checklist items", function() {
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

  it("should be able to find items by a container & client", async function() {
    await ActionChecklistUseCase.create(newChecklistItem(5, "planningBusiness"))
    await ActionPriorityUseCase.create(newPriorityItem(6, "funding"))

    const items = await ActionChecklistUseCase.findByClientAndContainer("planningBusiness", clientId)
    expect(items).toHaveLength(1)
    expect(items[0].actionContainer).toEqual("planningBusiness")

    const pItems = await ActionPriorityUseCase.findByClientAndContainer("funding", 6)
    expect(pItems).toHaveLength(1)
    expect(pItems[0].actionContainer).toEqual("funding")
  })
})
