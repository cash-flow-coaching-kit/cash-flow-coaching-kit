import { CFCStruct } from "../../../data/_config/shape"
import { initialValues } from "../../Forms/CFC"
import { reduceToOptions } from "../__config/utilities"

describe("Unit tests for reduceToOptions", () => {
  test("Can reduce the values into a options list", function() {
    const items: CFCStruct[] = [
      {...initialValues, id: 1, clientId: 1},
      {...initialValues, id: 2, clientId: 1},
      {...initialValues, id: undefined, clientId: 1},
    ]

    const result = items.reduce(reduceToOptions(), [])
    expect(result).toHaveLength(3)
    expect(result[0].value).toBe(1)
    expect(result[2].value).toBe(-1)
  })
})
