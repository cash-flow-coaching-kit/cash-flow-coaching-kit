import concatStr from "../concatStr"

describe("Unit tests for concatStr", () => {
  test("should concat two strings", function() {
    const concatW = concatStr("W")

    expect(concatW("Hello")).toBe("HelloW")
  })
})
