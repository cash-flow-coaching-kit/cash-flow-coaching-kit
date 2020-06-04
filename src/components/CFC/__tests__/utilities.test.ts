import { reduceToOptions, canvasTypeOptions, canvasTimeFrameOptions, generateTitle, canvasDisplayTitle, identifyIfDuplicate } from "../__config/utilities"
import { CFCTimeFrame, CanvasType, CFCStruct, CFCPanelSlice } from "../../../data/_config/shape"
import { toDate } from "date-fns"
import { initialValues } from "../../Forms/CFC"

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

  test("generateTitle - invalid dates", function() {
    const timeFrame: CFCTimeFrame = "quaterly"
    const type: CanvasType = "plan"

    const expected = "Please provide a valid date"

    expect(generateTitle(type, timeFrame, undefined, undefined)).toEqual(expected)
  })

  test("canvasDisplayTitle", function() {
    let data = {
      ...initialValues,
      canvasStartDate: toDate(new Date(2020, 6, 1)),
      canvasEndDate: toDate(new Date(2020, 7, 1)),
    }
    const expected = "Review Quaterly 01/07/2020 to 01/08/2020"

    expect(canvasDisplayTitle(data)).toBe(expected)

    data = {
      ...data,
      canvasTitle: "Hello world"
    }
    expect(canvasDisplayTitle(data)).toEqual("Hello world")
  })

  test("Duplication check", function() {
    let start = new Date(2020, 6, 1)
    let end = new Date(2020, 6, 2)
    let dupStart = new Date(2020, 5, 1)
    let dupEnd = new Date(2020, 5, 2)
    let dupTitle = "HAHAHAHAHAHA"

    let item: CFCStruct = {...initialValues, clientId: 1, canvasStartDate: start, canvasEndDate: end}
    let slice: CFCPanelSlice = {
      canvasEndDate: item.canvasEndDate,
      canvasStartDate: item.canvasStartDate,
      canvasTitle: item.canvasTitle,
      canvasTimeFrame: item.canvasTimeFrame,
      canvasType: item.canvasType
    }

    expect(identifyIfDuplicate([], slice)).toBeFalsy()

    let dups: CFCStruct[] = [
      {...initialValues, clientId: 1, canvasStartDate: dupStart, canvasEndDate: dupEnd},
      {...initialValues, clientId: 1, canvasStartDate: dupStart, canvasEndDate: dupEnd},
      {...initialValues, clientId: 1, canvasStartDate: dupStart, canvasEndDate: dupEnd},
    ]

    expect(identifyIfDuplicate(dups, slice)).toBeFalsy()

    dups = [
      ...dups,
      item
    ]

    expect(identifyIfDuplicate(dups, slice)).toEqual(item)

    dups = [
      {...initialValues, clientId: 1, canvasStartDate: start, canvasEndDate: end, canvasTitle: dupTitle},
      ...dups,
      item
    ]

    expect(identifyIfDuplicate(dups, {...slice, canvasTitle: dupTitle})).toEqual(dups[0])
    expect(identifyIfDuplicate(dups, {...slice, canvasTitle: "LOLOLOLOL"})).toBeFalsy()
  })
})
