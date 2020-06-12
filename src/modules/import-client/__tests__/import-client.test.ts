import { prefillDatabase, clearDatabases, closeDatabases } from "../../export-client/__tests__/export-client.test"
import { constructExportPayload } from "../../export-client"
import ClientDB from "../../../data/client/ClientDatabase"
import HealthCheckDB from "../../../data/healthChecks/HealthCheckDatabase"
import ActionChecklistDB from "../../../data/ActionChecklist/ActionChecklistDatabase"
import CFCDB from "../../../data/CFC/CFCDatabase"
import ClientUseCase from "../../../data/client/ClientLogic"
import { ClientId } from "../../../data/_config/shape"
import ImportClient, { loadBlobAsJSON, validateJSONData } from ".."

describe("Unit tests for importing client data", () => {
  let blob: Blob
  let clientId: ClientId

  //#region Setup tests
  beforeAll(async () => {
    // opens all the dbs
    await ClientDB.open()
    await HealthCheckDB.open()
    await ActionChecklistDB.open()
    await CFCDB.open()

    // clears and prefills the database
    await clearDatabases()
    await prefillDatabase()
    const all = await ClientUseCase.syncWithDatabase()
    clientId = all[0].id || 1

    // creates the blob used for testing
    let payload = await constructExportPayload(clientId)
    blob = new Blob([JSON.stringify(payload)], {
      type: "application/json",
    })

    // clears out the database to test importing of data
    await clearDatabases()
  })
  //#endregion

  //#region Teardown
  afterAll(async () => {
    await clearDatabases()
    await closeDatabases()
  })
  //#endregion

  it("should load a blob to json", async function() {
    const data = await loadBlobAsJSON(blob)
    expect(Object.keys(data)).toHaveLength(4)
  })

  it("should reject a invalid blob being passed", async function() {
    try { await loadBlobAsJSON(undefined) }
    catch (e) {
      expect(e.message).toEqual("Unable to process file, ensure you have uploaded the correct file.")
    }
  })

  it("should validate the json data to be a exported file", async function() {
    const data = await loadBlobAsJSON(blob)
    expect(validateJSONData(data)).toBeTruthy()
  })

  describe("JSON data Validation fails", function() {
    test("Not enough keys", function() {
      expect(validateJSONData({"key": 1})).toBeFalsy()
    })

    test("Not the correct keys", function() {
      const data = {ClientDatabase: "", HealthCheckDatabase: "", nope: "", yep: ""}
      expect(validateJSONData(data)).toBeFalsy()
    })

    test("Invalid format name", function() {
      const format = {formatName: "dexie"}
      const data = {
        ClientDatabase: format,
        HealthCheckDatabase: format,
        ActionChecklistDatabase: format,
        CFCDatabase: {formatName: "boi"},
      }
      expect(validateJSONData(data)).toBeFalsy()
    })
  })

  it("should import the client data", async function() {
    await ImportClient(blob)
    const allClients = await ClientUseCase.syncWithDatabase()
    expect(allClients).toHaveLength(1)
  })

  it("should import the health check data", async function() {})

  it("should import the action checklist data", async function() {})

  it("should import the cfc data", async function() {})

  it("shouldn't remove any existing data from the database", async function() {
    // TODO: Add random data to test

    // TODO: Clear the database
  })
})
