import { initialValues } from "../../Forms/CFC"
import { CFCStruct } from "../../../data/_config/shape"
import CFCDB from "../../../data/CFC/CFCDatabase"
import CFCUseCase from "../../../data/CFC/CFCLogic"
import { getCanvasData } from "../__config/utilities"

describe("Unit test for the getCanvasData function", () => {
  beforeEach(async () => {
    const items: CFCStruct[] = [
      {...initialValues, clientId: '1'},
      {...initialValues, clientId: '1'},
      {...initialValues, clientId: '2'}
    ]

    await CFCDB.canvases.clear()
    await CFCUseCase.bulkAdd(items)
  })

  afterAll(async () => {
    await CFCDB.canvases.clear()
    CFCDB.close()
  })

  it("should be able to find all client data", async function() {
    const data = await getCanvasData('1')
    expect(data).toHaveLength(2)
  })

  it("should return a empty array if client is undefined", async function() {
    const data = await getCanvasData(undefined)
    expect(data).toHaveLength(0)
  })
})
