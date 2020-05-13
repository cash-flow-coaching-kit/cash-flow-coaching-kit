import { IClientState, ClientActionTypes } from "../../client-outline"
import { ClientDataStruct, ClientId } from "../../../../data/_config/shape"
import bulkAdd from "../bulkAdd"
import { ClientReducer } from "../.."
import changeCurrentClient from "../changeCurrentClient"

describe("Change the state when adding a client", () => {
  let state: IClientState
  let payload: ClientId
  const client: ClientDataStruct = {
    id: 1,
    name: "Jimmy"
  }

  beforeEach(() => {
    state = {
      state: {
        clients: [{...client}, {
          id: 2,
          name: "John"
        }],
        clientSynced: false,
      },
      dispatch: () => null,
    }
    payload = 1
  })

  it("adds all the clients into state", function() {
    const newState = changeCurrentClient(state, payload)
    expect(newState.state.currentClient).not.toBeUndefined()
    expect(newState.state.currentClient).toMatchObject(client)
  })

  it("should not mutate the arguements", function() {
    const newState = changeCurrentClient(state, payload)
    expect(state).toEqual(state)
    expect(payload).toEqual(payload)
  })

  test("the related reducer works as expected", function() {
    const newState = ClientReducer(state, {
      type: ClientActionTypes.ChangeCurrentClient,
      payload
    })

    expect(newState.state.currentClient).not.toBeUndefined()
    expect(newState.state.currentClient).toMatchObject(client)
  })
})
