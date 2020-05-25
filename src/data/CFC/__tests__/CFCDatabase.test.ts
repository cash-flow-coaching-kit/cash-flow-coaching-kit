import CFCDB from "../CFCDatabase"
import Dexie from "dexie"
import CFCUseCase from "../CFCLogic"

describe("Unit tests for CFC database", () => {
  test("test instance type", function() {
    expect(CFCDB).toBeInstanceOf(Dexie)
    expect(typeof CFCDB.canvases).not.toBeUndefined()
  })

  test("Use case can do something", async function() {
    const count = await CFCUseCase.syncWithDatabase()
    expect(count).toHaveLength(0)
  })
})
