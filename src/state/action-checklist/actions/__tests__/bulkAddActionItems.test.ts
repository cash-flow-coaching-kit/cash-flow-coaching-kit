import { IActionChecklistState, IBulkAddActionItemsPayload, ActionChecklistActionTypes } from "../../shape"
import { newPriorityItem, newChecklistItem } from "../../../../data/ActionChecklist/_config/utilities"
import bulkAddActionItem from "../bulkAddActionItems"
import { ActionChecklistReducer } from "../.."
import filterById from "../../../../util/filters/ById"

describe("Change the state when adding a bulk of action items", () => {
  let state: IActionChecklistState
  let payload: IBulkAddActionItemsPayload

  beforeEach(function() {
    state = {
      dispatch: () => null,
      hideCompleted: false,
      databaseSyced: false,
      priority: [
        {...newPriorityItem('6', "cashOutActions"), id: '11', order: ['4', '5']},
        {...newPriorityItem('5', "cashOutActions"), id: '10', order: ['2', '3']},
        {...newPriorityItem('5', "funding"), id: '12'},
      ],
      checklistCollection: [{...newChecklistItem('10', "planningBusiness")}],
      notes: [],
    }
    payload = {
      priorityId: '10',
      items: [
        {...newChecklistItem('5', "cashInActions"), id: '6'},
        {...newChecklistItem('5', "cashInActions"), id: '7'},
        {...newChecklistItem('5', "cashInActions"), id: '8'},
      ]
    }
  })

  it("should add all the items to the checklist without overriding existing", function() {
    const newState = bulkAddActionItem(state, payload)

    expect(newState.checklistCollection.length).toBe(4)
    expect(newState.checklistCollection[0].actionContainer).toEqual("planningBusiness")
    expect(newState.checklistCollection).toEqual([...state.checklistCollection, ...payload.items])
  })

  it("should update the priority order correctly", function() {
    const newState = bulkAddActionItem(state, payload)

    expect(newState.priority[1].order.length).toBe(5)
    expect(newState.priority[1].order).toEqual([2, 3, 6, 7, 8])
    expect(newState.priority[0].order).toEqual(state.priority[0].order)
  })

  it("should create a priority order if there isn't one", function() {
    payload.priorityId = '13'
    const newState = bulkAddActionItem(state, payload)

    expect(newState.priority.length).toBe(4)
    expect(newState.priority.find(filterById('13'))).not.toBeUndefined()
    expect(newState.priority[3].order).toEqual([6, 7, 8])
  })

  it("should ignore undefined ids in the order", function() {
    payload.items[0].id = undefined
    const newState = bulkAddActionItem(state, payload)

    expect(newState.priority[1].order.length).toBe(4)
    expect(newState.priority[1].order).toEqual([2, 3, 7, 8])
  })

  it("should not mutate the arguements", function() {
    const newState = bulkAddActionItem(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ActionChecklistReducer(state, {
      type: ActionChecklistActionTypes.BulkAddActionItems,
      payload
    })

    expect(newState.checklistCollection.length).toBe(4)
    expect(newState.priority[1].order.length).toBe(5)
  })
})
