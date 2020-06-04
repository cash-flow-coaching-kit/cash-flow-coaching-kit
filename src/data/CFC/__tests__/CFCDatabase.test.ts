import CFCDB from "../CFCDatabase"
import Dexie from "dexie"
import CFCUseCase from "../CFCLogic"
import { ClientId, CFCStruct } from "../../_config/shape"
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

  test("finding possible matches", async function() {
    let items: CFCStruct[] = [
      {...initialValues, clientId},
      {...initialValues, clientId},
      {...initialValues, clientId, canvasType: "plan", canvasTimeFrame: "quaterly"},
    ]
    await CFCUseCase.bulkAdd(items)
    let possible = await CFCUseCase.findPossibleDuplicates("review", "quaterly", clientId)
    expect(possible).toHaveLength(2)

    possible = await CFCUseCase.findPossibleDuplicates("plan", "quaterly", clientId)
    expect(possible).toHaveLength(1)
  })
})
