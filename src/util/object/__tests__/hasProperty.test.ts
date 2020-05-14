import hasProperty from "../hasProperty"

describe("Unit tests for the hasProperty utility", () => {
  const obj = {name: "hello"}
  test("object has a property", function() {
    expect(hasProperty(obj, "name")).toBeTruthy()
  })

  test("object does not have property", function() {
    expect(hasProperty(obj, "id"))
  })
})
