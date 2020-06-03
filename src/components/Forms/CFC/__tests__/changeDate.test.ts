import changeDate from "../changeDate"
import initialValues from "../initialValues"
import { addDays } from "date-fns"
import { BaseCFCStruct } from "../../../../data/_config/shape"

describe("Unit tests for changing the date value", () => {
  let start = new Date(2020, 8, 1)
  let end = new Date(2020, 8, 5)
  let vals: BaseCFCStruct = {
    ...initialValues,
    canvasStartDate: new Date(2020, 1, 1),
    canvasEndDate: new Date(2020, 1, 2),
  }

  test("Updates the date value to canvasStartDate", function() {
    const data = changeDate("canvasStartDate", start, {...vals})
    expect(data.canvasStartDate).toEqual(start)
  })

  test("Updates the date value to canvasEndDate", function() {
    const data = changeDate("canvasEndDate", end, {...vals})
    expect(data.canvasEndDate).toEqual(end)
  })

  test("Syncs the end date with the start date", function() {
    start = addDays(start, 20)
    const data = changeDate("canvasStartDate", start, {...vals})
    expect(data.canvasStartDate).toEqual(start)
    expect(data.canvasEndDate).toEqual(start)
  })
})
