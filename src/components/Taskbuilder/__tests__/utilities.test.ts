import { checklistOptions } from "../__config/utilities"

describe("Unit tests for the Taskbuilder utilities", () => {
  test("Can find the options needed", function() {
    const option1 = checklistOptions("cashInActions")
    expect(option1).toEqual([])

    const option2 = checklistOptions("planningBusiness")
    expect(option2).not.toBeUndefined()
    expect(option2.length).toBeGreaterThan(0)
  })
})
