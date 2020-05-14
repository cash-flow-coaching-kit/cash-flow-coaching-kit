import ClientUseCase from "../ClientLogic"
import ClientDB from "../ClientDatabase"

describe("Unit tests for the Client Logic layer", () => {
  afterAll(async () => {
    await ClientDB.clients.clear()
    ClientDB.close()
  })

  it("Can go through all the logic layer methods", async function() {
    // CREATE
    const id1 = await ClientUseCase.create({name: "chips"})
    const id2 = await ClientUseCase.create({name: "law and co"})
    const id3 = await ClientUseCase.create({name: "untitled"})

    expect(id1).not.toBeUndefined()
    expect(typeof id2).toEqual("number")

    // SYNC
    let items = await ClientUseCase.syncWithDatabase()
    expect(items).toHaveLength(3)

    // DELETE
    const count = await ClientUseCase.delete(id3)
    expect(count).toBe(1)

    // UPDATE
    const updated = await ClientUseCase.update(id2, {name: "law and me"})
    expect(updated).toBe(1)

    // FINDBYCLIENT
    expect.hasAssertions();
    try {
      await ClientUseCase.findByClient(1)
    } catch (e) {
      expect(e).not.toBeUndefined()
    }

    // BULK ADD
    const ids = await ClientUseCase.bulkAdd([
      {name: "more business"},
      {name: "out of business"}
    ])
    expect(ids).toHaveLength(2)

    // FIND BY ID
    let item = await ClientUseCase.findById(id2)
    expect(item?.name).toEqual("law and me")
  })
})
