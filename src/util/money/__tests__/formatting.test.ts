import { toFixed, toTwoDecimal, appendWith, addDollarSign, formatMoney, toString } from "../formatting"

describe("Unit tests for the formatting utilities", () => {
  test("toFixed", function() {
    let val = toFixed(2)(1.23456)
    expect(val).toEqual("1.23")

    val = toFixed(4)(1.23456)
    expect(val).toEqual("1.2346") // 5 rounds up
  })

  test("toTwoDecimal", function() {
    let value = "1.2345"
    expect(toTwoDecimal(value)).toEqual("1.23")
  })

  test("appendWith", function() {
    let val = "hello"
    expect(appendWith("$")(val)).toEqual("$" + val)
    expect(appendWith("h")(val)).toEqual(val)
  })

  test("addDollarSign", function() {
    let val = "123"
    expect(addDollarSign(val)).toEqual("$" + val)
  })

  test("formatMoney", function() {
    let val = 103.8912
    expect(formatMoney(val)).toEqual("$103.89")
  })

  test("toString", function() {
    expect(toString(100)).toEqual("100")
  })
})
