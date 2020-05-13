import { newTimestamp } from ".."

test("newTimestamp", function() {
  const time = newTimestamp()
  expect(typeof time).toEqual("number")
})
