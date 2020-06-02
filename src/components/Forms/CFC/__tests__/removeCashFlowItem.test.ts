import { CashFlow } from "../../../../data/_config/shape"
import createCashFlowItem from "../../../../state/CFC/createCashFlow"
import removeCashflowItem from "../removeCashFlowItem"

test("Properly removes or resets cashflow items", function() {
  const item1 = createCashFlowItem()
  const item2 = {
    ...createCashFlowItem(),
    id: 91273947,
    description: "Hello world!"
  }
  const items: CashFlow[] = [
    item1,
    item2
  ]

  let removed = removeCashflowItem(item1.id, items)
  expect(removed).toHaveLength(1)

  removed = removeCashflowItem(item2.id, removed)
  expect(removed).toHaveLength(1)
  expect(removed[0].description).toEqual("")
})
