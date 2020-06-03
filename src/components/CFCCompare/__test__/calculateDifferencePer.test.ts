import { calculateDifferencePer } from "../__config/utilities"

test("Can calulate the difference", function() {
  expect(calculateDifferencePer(100, 0)).toEqual("100.00%")
  expect(calculateDifferencePer(0, 100)).toEqual("0%")
})
