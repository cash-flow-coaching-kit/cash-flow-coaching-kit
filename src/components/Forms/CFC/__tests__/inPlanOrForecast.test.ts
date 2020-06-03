import inPlanOrForecast from "../inPlanOrForecast"

describe("Unit test for inPlanOrForecast", () => {
  test("Not in plan or forecast", function() {
    expect(inPlanOrForecast("review")).toBeFalsy()
  })

  test("In plan or forecast", function() {
    expect(inPlanOrForecast("plan")).toBeTruthy()
  })
})
