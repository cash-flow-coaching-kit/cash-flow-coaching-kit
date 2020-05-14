import ClientDB from "../ClientDatabase"
import ClientUseCase from "../ClientLogic"
import syncClientsWithDb from "../syncWithDB"

describe("Test syncing the client database/state", () => {
	afterAll(async () => {
    await ClientDB.clients.clear()
    ClientDB.close()
  })

	it("successfully syncs items", async function () {
		const dispatch = jest.fn()
		await syncClientsWithDb(dispatch)

    await ClientUseCase.create({name: "my name jeff"})

    await syncClientsWithDb(dispatch)
	})
})
