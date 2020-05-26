import { newChecklistItem } from "../../../data/ActionChecklist/_config/utilities"
import filterByActionContainer from "../ByActionContainer"
import filterByClientId from "../ByClientId"
import filterByEquals from "../ByEquals"
import filterById from "../ById"
import { CashFlow } from "../../../data/_config/shape"
import GSTApplicable from "../ByGSTApplicable"

describe("filtering methods", () => {
  let obj = [
    {...newChecklistItem(5, "cashInActions"), id: 5},
    {...newChecklistItem(6, "funding"), id: 6},
  ]

  test("Filter by action container", function() {
    const filtered = [{...obj[0]}]

    expect(obj.filter(filterByActionContainer("cashInActions"))).toEqual(filtered)
  })

  test("Filter by client id", function() {
    const filtered = [{...obj[1]}]
    expect(obj.filter(filterByClientId(6))).toEqual(filtered)
  })

  test("Filter by equals", function() {
    const arr = [1, 2, 3, 4]
    expect(arr.filter(filterByEquals(4))).toEqual([4])
  })

  test("Reject - Filter by equals", function() {
    const arr = [1, 2, 3, 4]
    expect(arr.filter(filterByEquals(4, true))).toEqual([1, 2, 3])
  })

  test("Filter by id", function() {
    const filtered = [{...obj[0]}]
    expect(obj.filter(filterById(5))).toEqual(filtered)
  })

  test("Reject - Filter by id", function() {
    const filtered = [{...obj[1]}]
    expect(obj.filter(filterById(5, true))).toEqual(filtered)
  })

  test("Filter by GST Applicable", function() {
    const arr: CashFlow[] = [
      {id: 1, description: "", amount: 0, gstApplicable: true},
      {id: 1, description: "", amount: 0, gstApplicable: false},
      {id: 1, description: "", amount: 0, gstApplicable: true},
      {id: 1, description: "", amount: 0, gstApplicable: true},
    ]

    expect(arr.filter(GSTApplicable())).toHaveLength(3)
  })

  test("Reject - Filter by GST Applicable", function() {
    const arr: CashFlow[] = [
      {id: 1, description: "", amount: 0, gstApplicable: true},
      {id: 1, description: "", amount: 0, gstApplicable: false},
      {id: 1, description: "", amount: 0, gstApplicable: true},
      {id: 1, description: "", amount: 0, gstApplicable: true},
    ]

    expect(arr.filter(GSTApplicable(true))).toHaveLength(1)
  })
})
