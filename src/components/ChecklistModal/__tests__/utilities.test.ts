import { createNewFormItem } from "../__config/utilities"

describe("Unit tests for the ChecklistModal utilities", () => {
  test("Able to create a new empty form item", function() {
    const item = createNewFormItem()
    expect(item.description).toEqual("")
    expect(item.reviewBy).toBeInstanceOf(Date)
  })
})
