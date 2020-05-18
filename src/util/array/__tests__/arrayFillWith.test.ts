import arrayFillWith from "../arrayFillWith"

test("can create and fill some arrays", function() {
  const expected = [false, false, false]
  const expected1 = [0, 0]

  const res = arrayFillWith(3, false)
  const res1 = arrayFillWith(2, 0)

  expect(res).toHaveLength(3)
  expect(res).toEqual(expected)

  expect(res1).toHaveLength(2)
  expect(res1).toEqual(expected1)
})
