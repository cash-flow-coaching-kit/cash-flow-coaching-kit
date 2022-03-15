import { CFCStruct } from "../../../data/_config/shape"
import { initialValues } from "../../Forms/CFC"
import { CanvasTuple } from "../__config/shape"
import { changeSelected } from "../__config/utilities"

describe("Unit tests when changing the selected items", () => {
  let items: CFCStruct[] = []
  let selected: CanvasTuple;
  let item1: CFCStruct = {
    ...initialValues,
    id: '1',
    clientId: '1',
    canvasStartDate: new Date(2020, 6, 3),
    canvasEndDate: new Date(2020, 6, 5)
  }
  let item2: CFCStruct = {
    ...initialValues,
    id: '2',
    clientId: '1',
    canvasStartDate: new Date(2020, 6, 10),
    canvasEndDate: new Date(2020, 6, 15)
  }
  let item3: CFCStruct = {
    ...initialValues,
    id: '3',
    clientId: '1',
    canvasStartDate: new Date(2020, 5, 31),
    canvasEndDate: new Date(2020, 6, 3)
  }

  beforeEach(() => {
    items = [
      item1,
      item2,
      item3
    ]

    selected = [items[0], items[1]]
  })

  test("item2 will be on the left side, item3 will be on the right side", function() {
    const newSelected = changeSelected(items, selected, 0, '3')

    expect(newSelected[0]).toEqual(item2)
    expect(newSelected[1]).toEqual(item3)
  })

  test("item3N -> left side, item1 -> right side", function() {
    const item3N = {
      ...item3,
      canvasStartDate: new Date(2020, 7, 1),
      canvasEndDate: new Date(2020, 7, 3),
    }
    items = [
      item1,
      item2,
      item3N
    ]

    const newSelected = changeSelected(items, selected, 1, '3')
    expect(newSelected[0]).toEqual(item3N)
    expect(newSelected[1]).toEqual(item1)
  })

  test("should return initial if id item can't be found", function() {
    const newSelected = changeSelected(items, selected, 0, '50')
    expect(newSelected).toEqual(selected)
  })

  test("should priorities later date to be on the left", function() {
    let newSelected = changeSelected(items, selected, 1, '3')
    expect(newSelected[0]).toEqual(item1)
    expect(newSelected[1]).toEqual(item3)

    const item3N = {
      ...item3,
      canvasStartDate: new Date(2020, 7, 1),
      canvasEndDate: new Date(2020, 7, 3),
    }
    items = [
      item1,
      item2,
      item3N
    ]

    newSelected = changeSelected(items, selected, 0, '3')
    expect(newSelected[0]).toEqual(item3N)
    expect(newSelected[1]).toEqual(item2)
  })
})
