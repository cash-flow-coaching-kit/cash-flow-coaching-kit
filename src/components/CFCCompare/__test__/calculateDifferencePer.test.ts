import { calculateDifferencePer } from "../__config/utilities"

test("Can calulate the difference", function() {
  expect(calculateDifferencePer(100, 0)).toEqual("N/A")
  expect(calculateDifferencePer(40, 23)).toEqual("73.91%")
  expect(calculateDifferencePer(0, 100)).toEqual("-100%")
})
