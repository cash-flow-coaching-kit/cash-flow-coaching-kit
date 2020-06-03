import CFCDB from "../CFCDatabase"
import Dexie from "dexie"
import CFCUseCase from "../CFCLogic"
import { ClientId } from "../../_config/shape"
import { initialValues } from "../../../components/Forms/CFC"

describe("Unit tests for CFC database", () => {
  const clientId: ClientId = 1
  const item = {...initialValues, clientId}

  beforeEach(async () => {
    await CFCDB.canvases.clear()
  })

  afterAll(async () => {
    await CFCDB.canvases.clear()
    CFCDB.close()
  })

  test("test instance type", function() {
    expect(CFCDB).toBeInstanceOf(Dexie)
    expect(typeof CFCDB.canvases).not.toBeUndefined()
  })

  test("Use case can do something", async function() {
    const count = await CFCUseCase.syncWithDatabase()
    expect(count).toHaveLength(0)
  })

  test("Can count the values", async function() {
    let count = await CFCUseCase.countClientRecords(clientId)
    expect(count).toBe(0)
    await CFCUseCase.create(item)
    count = await CFCUseCase.countClientRecords(clientId)
    expect(count).toBe(1)
  })
})
