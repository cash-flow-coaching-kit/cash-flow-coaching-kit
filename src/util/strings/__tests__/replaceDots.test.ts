import replaceDots from "../replaceDots"

describe("Unit tests for replacing dots", () => {
  test("Can replace dots", function() {
    expect(replaceDots("213...1222.22....222")).toEqual("213122222222")
  })
})
