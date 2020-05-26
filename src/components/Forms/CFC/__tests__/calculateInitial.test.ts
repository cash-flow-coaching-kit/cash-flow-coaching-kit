import calculateInitial from "../calculateInitial"
import initialValues from "../initialValues"

describe("Unit tests for the calculate initial file", function() {
  test("It calculates the values", function() {
    expect(calculateInitial(initialValues).gstOnSales).toBe(0)
    expect(calculateInitial(initialValues).closingBalance).toBe(0)
    expect(calculateInitial(initialValues).gstOnPurchases).toBe(0)
    expect(calculateInitial(initialValues).totalNetAssets).toBe(0)
    expect(calculateInitial(initialValues).cashSurplus).toBe(0)
    expect(calculateInitial(initialValues).availableToSpend).toBe(0)

    expect(calculateInitial({
      ...initialValues,
      openingBalance: 100,
      incomeTax: 10
    }).availableToSpend).toBe(90)
  })
})
