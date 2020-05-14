import addClient from "../addClient"
import ClientDB from "../ClientDatabase"
import ClientUseCase from "../ClientLogic"

describe("Test adding a client to the database/state", () => {
	afterAll(async () => {
    await ClientDB.clients.clear()
    ClientDB.close()
  })

	it("successfully adds items", async function () {
		const dispatch = jest.fn()
		const success = await addClient(dispatch, { name: "a name" })

		expect(success).toBeTruthy()

		const clients = await ClientUseCase.syncWithDatabase()
		expect(clients).toHaveLength(1)
	})
})
