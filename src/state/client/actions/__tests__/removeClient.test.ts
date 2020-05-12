import { IClientState, ClientActionTypes } from "../../client-outline"
import { ClientId } from "../../../../data/_config/shape"
import removeClient from "../removeClient"
import filterById from "../../../../util/filters/ById"
import { ClientReducer } from "../.."

describe("Change state when removing a client", () => {
  let state: IClientState
  let payload: ClientId

  beforeEach(() => {
    state = {
      state: {
        clients: [{
          id: 1,
          name: "Jimmy"
        }, {
          id: 2,
          name: "John"
        }, {
          id: 5,
          name: "Joey"
        }],
        currentClient: {
          id: 2,
          name: "John"
        },
        clientSynced: false,
      },
      dispatch: () => null,
    }
    payload = 2
  })

  it("should remove the correct client from state", () => {
    const newState = removeClient(state, payload)
    expect(newState.state.clients.length).toBe(2)
    expect(newState.state.clients.find(filterById(payload))).toBeUndefined()
  })

  it("should replace the current client", function() {
    const newState = removeClient(state, payload)
    expect(newState.state.currentClient).toMatchObject(state.state.clients[0])
  })

  it("should set current client to undefined if last", function() {
    const newClients = state.state.clients.filter(filterById(payload))
    state.state.clients = newClients
    const newState = removeClient(state, payload)

    expect(newState.state.clients.length).toBe(0)
    expect(newState.state.currentClient).toBeUndefined()
  })

  it("should not mutate the arguements", function() {
    const newState = removeClient(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ClientReducer(state, {
      type: ClientActionTypes.RemoveClient,
      payload
    })

    expect(newState.state.clients.length).toBe(2)
    expect(newState.state.currentClient).toMatchObject(state.state.clients[0])
  })
})
