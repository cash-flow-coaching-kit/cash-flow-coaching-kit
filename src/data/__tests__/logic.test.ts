import { ClientId, ActionChecklistId } from "../_config/shape";
import { newChecklistItem } from "../ActionChecklist/_config/utilities";
import ActionChecklistDB from "../ActionChecklist/ActionChecklistDatabase";
import ActionChecklistUseCase from "../ActionChecklist/ChecklistLogic";

describe("Unit tests for the LogicLayer class", () => {
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

  it("should be able to add an item to the db", async function() {
    const id = await ActionChecklistUseCase.create(item)
    expect(id).not.toBeUndefined()
    expect(typeof id).toEqual("number")
  })

  it("should be able to delete an item", async function() {
    const count = await ActionChecklistUseCase.delete(createdId)
    expect(count).toBe(1)
  })

  it("should be able to find an item by the id", async function() {
    const fetchedItem = await ActionChecklistUseCase.findById(createdId)

    expect(fetchedItem).not.toBeUndefined()
    expect(fetchedItem?.clientId).toBe(clientId)
  })

  it("should be able to updated an item", async function() {
    const text = "hello world"
    const updated = await ActionChecklistUseCase.update(createdId, {
      ...item,
      description: text,
    })

    expect(updated).toBe(1)
    const updatedItem = await ActionChecklistUseCase.findById(createdId)
    expect(updatedItem?.description).toEqual(text)
  })

  it("should be able to pull in all the data", async function() {
    const data = await ActionChecklistUseCase.syncWithDatabase()

    expect(data).toHaveLength(1)
    expect(data[0].id).toBe(createdId)
  })

  it("should be able to find by the client id", async function() {
    const fetchedItem = await ActionChecklistUseCase.findByClient(clientId)

    expect(fetchedItem).toHaveLength(1)
    expect(fetchedItem[0]).toMatchObject({
      ...item,
      id: createdId
    })
  })

  it("should be able to bulk add items", async function() {
    const newItems = [
      newChecklistItem(2, "cashInActions"),
      newChecklistItem(5, "funding"),
      newChecklistItem(5, "cashOutActions")
    ]

    const keys = await ActionChecklistUseCase.bulkAdd(newItems)
    expect(keys).toHaveLength(3)
  })
})
