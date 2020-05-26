import { calculateGST, removeGST } from "../gst"

describe("Unit test for the GST functions", function() {
  test("Calculate GST", function() {
    const gst = calculateGST(100)
    expect(gst).toBeGreaterThan(9)
  })

  test("Remove GST", function() {
    const removed = removeGST(100)
    expect(removed).toBe(91)
  })
})
