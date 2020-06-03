import { reduceToOptions, canvasTypeOptions, canvasTimeFrameOptions, generateTitle } from "../__config/utilities"
import { CFCTimeFrame, CanvasType } from "../../../data/_config/shape"
import { toDate } from "date-fns"

describe("Unit tests for the CFC utility methods", () => {
  test("Reduce to options", function() {
    const opts = ["a", "b", "c"].reduce(reduceToOptions, [])
    expect(opts).toEqual([
      { value: "a", label: "A"},
      { value: "b", label: "B"},
      { value: "c", label: "C"},
    ])
  })

  test("canvasTypeOptions", function() {
    const typeOpts = canvasTypeOptions()
    expect(typeOpts).toHaveLength(4)
    expect(typeOpts[0]).toEqual({value: "review", label: "Review"})
  })

  test("canvasTimeFrameOptions", function() {
    const timeOpts = canvasTimeFrameOptions()
    expect(timeOpts).toHaveLength(7)
    expect(timeOpts[0]).toEqual({value: "weekly", label: "Weekly"})
  })

  test("generateTitle", function() {
    const timeFrame: CFCTimeFrame = "quaterly"
    const type: CanvasType = "plan"
    const start = toDate(new Date(2020, 6, 1))
    const end = toDate(new Date(2020, 7, 1))

    const expected = "Plan Quaterly 01/07/2020 to 01/08/2020"

    expect(generateTitle(type, timeFrame, start, end)).toEqual(expected)
  })
})
