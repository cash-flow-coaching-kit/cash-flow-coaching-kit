import { IClientState, ClientActionTypes } from "../../client-outline"
import { ClientDataStruct } from "../../../../data/_config/shape"
import addClient from "../addClient"
import ClientReducer from "../../client-reducer"
import updateClientSynced from "../updateClientSynced"

describe("Change the state when adding a client", () => {
  let state: IClientState
  let payload: boolean

  beforeEach(() => {
    state = {
      state: {
        clients: [],
        clientSynced: false,
      },
      dispatch: () => null,
    }
    payload = true
  })

  it("can add a client into state", function() {
    let newState = updateClientSynced(state, payload)
    expect(newState.state.clientSynced).toBeTruthy()

    newState = updateClientSynced(state, false)
    expect(newState.state.clientSynced).toBeFalsy()
  })

  it("should not mutate the arguements", function() {
    const newState = updateClientSynced(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ClientReducer(state, {
      type: ClientActionTypes.UpdateClientSynced,
      payload
    })

    expect(newState.state.clientSynced).toBeTruthy()
  })
})
