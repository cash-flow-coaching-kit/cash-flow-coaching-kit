import ClientDB from "../ClientDatabase"
import ClientUseCase from "../ClientLogic"
import syncClientsWithDb from "../syncWithDB"
import { setStorageClient, getStorageClient, removeStorageClient } from "../../../util/localStorage/client"

describe("Test syncing the client database/state", () => {
  const dispatch = jest.fn()

  beforeAll(async () => {
    await ClientDB.clients.clear()
  })

  afterEach(async () => {
    await ClientDB.clients.clear()
  })

  afterAll(async () => {
    await ClientDB.clients.clear()
    ClientDB.close()
  })

	it("successfully syncs items", async function () {
		await syncClientsWithDb(dispatch)

    await ClientUseCase.create({name: "my name jeff"})

    await syncClientsWithDb(dispatch)
  })

  it("syncs with the localstorage client", async function() {
    let id = await ClientUseCase.create({ name: "Jim" })
    await ClientUseCase.create({ name: "Jim" })
    await ClientUseCase.create({ name: "Jim" })
    setStorageClient(id)

    await syncClientsWithDb(dispatch)
    expect(getStorageClient()).toBe(id)
  })

  it("syncs with the localstorage client - invalid", async function() {
    await ClientUseCase.create({ name: "Jim" })
    await ClientUseCase.create({ name: "Jim" })
    await ClientUseCase.create({ name: "Jim" })
    setStorageClient(90)

    await syncClientsWithDb(dispatch)
    expect(getStorageClient()).toBe(90)
  })
})
