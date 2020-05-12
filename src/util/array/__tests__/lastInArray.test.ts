import lastInArray from "../lastInArray"

describe("Last in array works", () => {
  it("should find the last item", () => {
    expect(lastInArray([1, 2, 3])).toBe(3)
  })
})
