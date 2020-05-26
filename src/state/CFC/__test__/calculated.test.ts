import { calcTotalNetAssets, calcCashFlowGSTTotal, calcCashFlowNonGSTTotal, calcCashFlowTotal, calcCashFlowGST, calcCashSurplus, calcAvailableToSpend, calcClosingBalance, getKeyValue } from "../accumulators"
import { initialValues } from "../../../components/Forms/CFC"
import { CashFlow, BaseCFCStruct } from "../../../data/_config/shape"

describe("Unit tests for calculated values", function() {
  let cashFlowItem: CashFlow;
  let values: BaseCFCStruct;

  beforeEach(() => {
    cashFlowItem = {
      id: 1,
      amount: 100,
      description: "",
      gstApplicable: true
    }
    values = initialValues
  })

  afterEach(() => {
    values.cashInItems = []
    values.cashOutItems = []
  })

  test("calculate total net assets", function() {
    expect(calcTotalNetAssets(initialValues)).toBe(0)
    let copy = initialValues
    copy.stock = 100
    copy.creditors = 500
    copy.debtors = 50
    copy.assets = 9
    copy.loans = 34
    expect(calcTotalNetAssets(copy)).toBe(-375)
  })

  test("Calculate totals for a cash flow", function() {
    let data = values
    data.cashInItems.push(cashFlowItem)
    expect(calcCashFlowGSTTotal(data.cashInItems)).toBe(91)

    data.cashInItems.push({...cashFlowItem, amount: 70})
    expect(calcCashFlowGSTTotal(data.cashInItems)).toBe(155)

    data.cashInItems[0].gstApplicable = false
    expect(calcCashFlowGSTTotal(data.cashInItems)).toBe(64)
    expect(calcCashFlowNonGSTTotal(data.cashInItems)).toBe(100)

    expect(calcCashFlowTotal(data.cashInItems)).toBe(164)
  })

  test("Calculate GST for cash flow list", function() {
    const data = values
    data.cashInItems.push(cashFlowItem)
    expect(calcCashFlowGST(data.cashInItems)).toBe(9)

    data.cashInItems.push({...cashFlowItem, amount: 70})
    expect(calcCashFlowGST(data.cashInItems)).toBe(15)

    data.cashInItems[0].gstApplicable = false
    expect(calcCashFlowGST(data.cashInItems)).toBe(6)
  })

  test("Calculate Cash Surplus", function() {
    const data = values
    data.cashOutItems.push({...cashFlowItem, amount: 12})
    data.cashInItems.push(cashFlowItem)

    expect(calcCashSurplus(data)).toBe(80)
  })

  test("Calculate available to spend", function() {
    const data = values
    data.cashOutItems.push({...cashFlowItem, amount: 12})
    data.cashInItems.push(cashFlowItem)
    data.openingBalance = 100
    data.incomeTax = 20

    expect(calcAvailableToSpend(data)).toBe(160)
  })

  test("Calculate closing balance", function() {
    const data = values
    data.cashOutItems.push({...cashFlowItem, amount: 12})
    data.cashInItems.push(cashFlowItem)
    data.openingBalance = 100
    data.incomeTax = 20
    data.cashToOwner = 160

    expect(calcClosingBalance(data)).toBe(0)
  })

  test("Get key values", function() {
    const data = values
    data.cashInItems.push({...cashFlowItem, amount: 12})
    data.cashInItems.push(cashFlowItem)

    const vals = data.cashInItems.reduce(getKeyValue("amount"), [])

    expect(vals).toEqual([12,100])
  })
})
