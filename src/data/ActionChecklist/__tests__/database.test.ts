import ActionChecklistDB from "../ActionChecklistDatabase";
import ActionChecklistUseCase from "../ChecklistLogic";
import { newChecklistItem } from "../_config/utilities";
import Dexie from "dexie";

describe("Unit tests for action checklist database", () => {
  test("test instance type", function() {
    expect(ActionChecklistDB).toBeInstanceOf(Dexie)
    expect(typeof ActionChecklistDB.actionItems).not.toBeUndefined()
    expect(typeof ActionChecklistDB.priority).not.toBeUndefined()
    expect(typeof ActionChecklistDB.notes).not.toBeUndefined()
  })

  test("Use case can do something", async function() {
    const id = await ActionChecklistUseCase.create(newChecklistItem(1, "cashInActions"))
    expect(id).toBeGreaterThan(0)
    const count = await ActionChecklistUseCase.delete(id)
    expect(count).toBe(1)
  })
})
