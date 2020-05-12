import findObjectIndexByValue from "../findObjectIndexByValue"

test("Able to find the correct index", function() {
  const obj = [{id: 1}, {id: 2}, {id: 3}]
  const idx = findObjectIndexByValue(obj, "id", 2)
  expect(idx).toBe(1)
})
