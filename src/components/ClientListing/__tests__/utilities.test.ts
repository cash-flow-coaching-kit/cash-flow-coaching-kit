import { hasClients, isClientSelected } from "../_config/utilities"
import { defaultClientState } from "../../../state/client"

describe("Unit tests for ClientListing utilities", () => {
  test("if the client state has clients", () => {
    expect(hasClients(defaultClientState)).toBeFalsy()

    const newState = {...defaultClientState}
    newState.state.clients.push({id: 1, name: "jimmy"})
    expect(hasClients(newState)).toBeTruthy()
  })

  test("test if a client is selected", function() {
    expect(isClientSelected(undefined)).toBeFalsy()
    expect(isClientSelected({id: 1, name: "Jimmy"}, 1)).toBeTruthy()
  })
})
