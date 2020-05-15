import { checklistOptions, createNameField, stringNameMatches, determineChecked, inChecklists, constructSelectedItems } from "../__config/utilities"
import { ActionChecklistStruct } from "../../../data/_config/shape"
import { newChecklistItem } from "../../../data/ActionChecklist/_config/utilities"
import arrayFillWith from "../../../util/array/arrayFillWith"

describe("Unit tests for the Taskbuilder utilities", () => {
  test("Can find the options needed", function() {
    const option1 = checklistOptions("cashInActions")
    expect(option1).toEqual([])

    const option2 = checklistOptions("planningBusiness")
    expect(option2).not.toBeUndefined()
    expect(option2.length).toBeGreaterThan(0)
  })

  test("Can generate a correct name", function() {
    const str = "Hello world."
    const str1 = "Something123!.. yippy"
    expect(createNameField(str)).toEqual("hello_world_")
    expect(createNameField(str1)).toEqual("something123____yippy")
  })

  test("Strings match with name", function() {
    const str = "Hello world."
    const name = "hello_world_"

    expect(stringNameMatches(str, name)).toBeTruthy()
  })

  test("Can determine the checked value", function() {
    const data: ActionChecklistStruct[] = [
      {...newChecklistItem(5, "cashInActions"), description: "Hello world"},
      {...newChecklistItem(5, "cashInActions"), description: "What is this"},
      {...newChecklistItem(5, "cashInActions"), description: "I dont know..."},
    ]
    const labels = [
      "What is this",
      "Nope son",
      "Hello world"
    ]

    expect(determineChecked(labels, data)).toEqual([true, false, true])
    expect(determineChecked(labels, [])).toEqual(arrayFillWith(labels.length, false))
    expect(determineChecked(["Not in list"], data)).toEqual([false])
  })

  test("Check if in checklists array", function() {
    const data: ActionChecklistStruct[] = [
      {...newChecklistItem(5, "cashInActions"), description: "Hello world"},
      {...newChecklistItem(5, "cashInActions"), description: "What is this"},
      {...newChecklistItem(5, "cashInActions"), description: "I dont know..."},
    ]

    expect(inChecklists("Hello world", data)).toBeTruthy()
    expect(inChecklists("Nope", data)).toBeFalsy()
  })

  test("Constructs the items correctly", function() {
    const labels = [
      "What is this",
      "Nope son",
      "Hello world"
    ]
    const answers = [true, false, false]
    const items: ActionChecklistStruct[] = labels.reduce(constructSelectedItems(answers, 1, "cashInActions"), [])

    expect(items).toHaveLength(1)
    expect(items[0].completed).toBeFalsy()
    expect(items[0].clientId).toBe(1)
  })
})
