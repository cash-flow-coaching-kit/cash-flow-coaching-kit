import initialValues from "../initialValues";
import CFCDB from "../../../../data/CFC/CFCDatabase";
import { ClientId } from "../../../../data/_config/shape";
import CFCUseCase from "../../../../data/CFC/CFCLogic";
import onCreate from "../onCreate";

describe("Unit tests for the create method", function() {
  const clientId: ClientId = 1
  const item = {...initialValues}

  beforeEach(async () => {
    await CFCDB.canvases.clear()
  })

  afterAll(async () => {
    await CFCDB.canvases.clear()
    CFCDB.close()
  })

  test("it creates", async function() {
    const id = await onCreate(item, clientId)
    expect(typeof id).toEqual("number")
    const items = await CFCUseCase.syncWithDatabase()
    expect(items).toHaveLength(1)
  })
})
