import upperFirst from "../upperCaseFirst"

describe("Unit tests for uppercase first", () => {
  test("can uppercase the first character", function() {
    expect(upperFirst("hello")).toEqual("Hello")
  })
})
