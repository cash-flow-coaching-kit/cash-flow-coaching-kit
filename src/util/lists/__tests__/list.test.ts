import { generateKey, constructKey } from "../key"

describe("Unit testing for lists utilities", () => {
  test("Able to construct a key", function() {
    const s = generateKey()
    expect(typeof s).toEqual("string")

    expect(constructKey("123", 1)).toEqual("123.1")
  })
})
