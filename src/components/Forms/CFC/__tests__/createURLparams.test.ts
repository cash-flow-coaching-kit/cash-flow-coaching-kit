import { BaseCFCStruct, CanvasType, CFCTimeFrame } from "../../../../data/_config/shape"
import { initialValues } from ".."
import { getTime } from "date-fns"
import createURLParams from "../createURLParams"

describe("Unit tests for creating url params", () => {
  let start = new Date(2020, 8, 1)
  let end = new Date(2020, 8, 5)
  let type: CanvasType = "forecast"
  let timeframe: CFCTimeFrame = "monthly"
  let vals: BaseCFCStruct = {
    ...initialValues,
    canvasStartDate: start,
    canvasEndDate: end,
    canvasType: type,
    canvasTimeFrame: timeframe
  }

  test("Can create URL params - no custom title", function() {
    const expected = `title=&useCustom=0&type=${type}&timeframe=${timeframe}&startDate=${getTime(start).toString()}&endDate=${getTime(end).toString()}`

    expect(createURLParams(vals, false)).toEqual(expected)
  })

  test("Can create URL params - custom title", function() {
    const expected = `title=hello&useCustom=1&type=${type}&timeframe=${timeframe}&startDate=${getTime(start).toString()}&endDate=${getTime(end).toString()}`

    expect(createURLParams({...vals, canvasTitle: "hello"}, true)).toEqual(expected)
  })
})
