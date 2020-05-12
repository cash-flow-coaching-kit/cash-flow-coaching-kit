import { PossibleActionItems } from "../../../state/action-checklist/shape"
import { ActionItemMapping } from "../_config/data"

describe("Unit tests for the ActionChecklist data definition", () => {
  test("Can get the correct value", function() {
    const val: PossibleActionItems = "funding"
    expect(ActionItemMapping[val]).toEqual(val)
  })
})
