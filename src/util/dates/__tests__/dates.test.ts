import { newTimestamp, syncEndDate } from ".."
import { addDays } from "date-fns"

test("newTimestamp", function() {
  const time = newTimestamp()
  expect(typeof time).toEqual("number")
})

test("should sync end date", function() {
  let start = new Date()
  const end = addDays(new Date(), 5)

  expect(syncEndDate(start, end)).toBeFalsy()

  start = addDays(start, 10)
  expect(syncEndDate(start, end)).toBeTruthy()
})
