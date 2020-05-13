import { IClientState, ClientActionTypes } from "../../client-outline"
import { ClientDataStruct } from "../../../../data/_config/shape"
import bulkAdd from "../bulkAdd"
import { ClientReducer } from "../.."

describe("Change the state when adding a client", () => {
  let state: IClientState
  let payload: ClientDataStruct[]

  beforeEach(() => {
    state = {
      state: {
        clients: [],
        clientSynced: false,
      },
      dispatch: () => null,
    }
    payload = [{
      id: 1,
      name: "Jimmy"
    }, {
      id: 2,
      name: "John"
    }]
  })

  it("adds all the clients into state", function() {
    const newState = bulkAdd(state, payload)
    expect(newState.state.clients.length).toBe(2)
    expect(newState.state.clients[1].name).toEqual("John")
  })

  it("should not mutate the arguements", function() {
    const newState = bulkAdd(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ClientReducer(state, {
      type: ClientActionTypes.BulkAdd,
      payload
    })

    expect(newState.state.clients.length).toBe(2)
  })
})
