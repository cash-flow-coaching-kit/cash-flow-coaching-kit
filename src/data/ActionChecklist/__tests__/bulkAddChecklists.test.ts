import { ClientId, ActionChecklistId, ActionChecklistPriorityId, ActionChecklistStruct } from "../../_config/shape";
import { newChecklistItem, newPriorityItem } from "../_config/utilities";
import ActionChecklistDB from "../ActionChecklistDatabase";
import ActionChecklistUseCase from "../ChecklistLogic";
import ActionPriorityUseCase from "../PriorityLogic";
import {bulkAddChecklists} from "../_config/utilities";

describe("Bulk add checklist to the database", () => {
  const clientId: ClientId = 1
  let priorityId: ActionChecklistPriorityId;
  const items: ActionChecklistStruct[] = [
    {...newChecklistItem(clientId, "cashInActions")},
    {...newChecklistItem(clientId, "cashInActions")},
    {...newChecklistItem(clientId, "cashInActions")},
    {...newChecklistItem(clientId, "cashInActions")}
  ]

  beforeEach(async () => {
    await ActionChecklistDB.actionItems.clear()
    await ActionChecklistDB.priority.clear()

    priorityId = await ActionPriorityUseCase.create(newPriorityItem(clientId, "cashInActions"))
  })

  afterAll(async () => {
    await ActionChecklistDB.actionItems.clear()
    await ActionChecklistDB.priority.clear()
    ActionChecklistDB.close()
  })

  it("can properly add to the database", async function() {
    const [newItems, success] = await bulkAddChecklists(items, priorityId)
    const dbItems = await ActionChecklistUseCase.syncWithDatabase()
    const priority = await ActionPriorityUseCase.findById(priorityId)

    expect(success).toBeTruthy()
    expect(newItems).toHaveLength(4)
    expect(dbItems).toHaveLength(4)
    expect(priority).not.toBeUndefined()
    expect(priority?.order).toHaveLength(4)
  })

  it("can append to a existing priority item", async function() {
    const newPriorityId = await ActionPriorityUseCase.create({
      ...newPriorityItem(clientId, "cashInActions"),
      order: [100, 200]
    })

    await bulkAddChecklists(items, newPriorityId)
    const priority = await ActionPriorityUseCase.findById(newPriorityId)

    expect(priority).not.toBeUndefined()
    expect(priority?.order).toHaveLength(6)
  })

  it("should not replace existing checklist items", async function() {
    await ActionChecklistUseCase.create(newChecklistItem(3, "cashInActions"))
    await ActionChecklistUseCase.create(newChecklistItem(3, "cashInActions"))
    await ActionChecklistUseCase.create(newChecklistItem(3, "cashInActions"))
    await ActionChecklistUseCase.create(newChecklistItem(3, "cashInActions"))

    await bulkAddChecklists(items, priorityId)
    const dbItems = await ActionChecklistUseCase.syncWithDatabase()

    expect(dbItems).toHaveLength(8)
  })

  it("should return as not successfull", async function() {
    const [newitems, success] = await bulkAddChecklists(items, 100)

    expect(success).toBeFalsy()
    expect(newitems).toEqual(items)
  })
})
