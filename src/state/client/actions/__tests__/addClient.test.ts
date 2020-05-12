import { IClientState, ClientActionTypes } from "../../client-outline"
import { ClientDataStruct } from "../../../../data/_config/shape"
import addClient from "../addClient"
import ClientReducer from "../../client-reducer"

describe("Change the state when adding a client", () => {
  let state: IClientState
  let payload: ClientDataStruct

  beforeEach(() => {
    state = {
      state: {
        clients: [],
        clientSynced: false,
      },
      dispatch: () => null,
    }
    payload = {
      id: 1,
      name: "Jimmy"
    }
  })

  it("can add a client into state", function() {
    const newState = addClient(state, payload)
    expect(newState.state.clients.length).toBeGreaterThan(0)
    expect(newState.state.clients[0]).toMatchObject(payload)
  })

  it("should not mutate the arguements", function() {
    const newState = addClient(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ClientReducer(state, {
      type: ClientActionTypes.AddClient,
      payload
    })

    expect(newState.state.clients[0]).toMatchObject(payload)
  })

  // This was added to get the coverage to 100% for the reducer
  // With TypeScript this will never be allowed
  test("Test reducer with invalid type and payload", function() {
    const newState = ClientReducer(state, {
      type: null,
      payload: null
    })

    expect(newState).toMatchObject(state)
  })
})
