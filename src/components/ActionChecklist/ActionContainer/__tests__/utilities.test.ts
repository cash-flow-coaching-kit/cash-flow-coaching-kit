import { actionTitleMapping } from "../_config/data"
import { actionItemKeyTitleMapping, staticIdentifier, allowNotes } from "../_config/utilities"
import { PossibleActionItems } from "../../../../state/action-checklist/shape"

describe("Unit tests for the ActionContainer utilities", () => {
  test("Correct title is returned when fetched", function() {
    const title = actionTitleMapping.cashInActions
    expect(actionItemKeyTitleMapping("cashInActions")).toEqual(title)
  })

  test("Static identifiers are correct", function() {
    const identifiers: PossibleActionItems[] = ["cashInActions", "cashOutActions"]
    expect(staticIdentifier()).toEqual(identifiers)
  })

  test("if notes are allowed", function() {
    const truthy = allowNotes("funding")
    const falsy = allowNotes("cashInActions")

    expect(falsy).toBeFalsy()
    expect(truthy).toBeTruthy()
  })
})
