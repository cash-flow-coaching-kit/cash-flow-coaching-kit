import { prefillDatabase, clearDatabases, closeDatabases, exportClientConstants } from "../../export-client/__tests__/export-client.test"
import { constructExportPayload } from "../../export-client"
import ClientDB from "../../../data/client/ClientDatabase"
import HealthCheckDB from "../../../data/healthChecks/HealthCheckDatabase"
import ActionChecklistDB from "../../../data/ActionChecklist/ActionChecklistDatabase"
import CFCDB from "../../../data/CFC/CFCDatabase"
import ClientUseCase from "../../../data/client/ClientLogic"
import { ClientId } from "../../../data/_config/shape"
import ImportClient, { loadBlobAsJSON, validateJSONData } from ".."
import HealthCheckUseCase from "../../../data/healthChecks/HealthCheckLogic"
import ActionChecklistUseCase from "../../../data/ActionChecklist/ChecklistLogic"
import ActionPriorityUseCase from "../../../data/ActionChecklist/PriorityLogic"
import ActionNotesUseCase from "../../../data/ActionChecklist/NotesLogic"
import CFCUseCase from "../../../data/CFC/CFCLogic"
import { newChecklistItem, newPriorityItem } from "../../../data/ActionChecklist/_config/utilities"
import { initialValues } from "../../../components/Forms/CFC"

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
      expect(e.message).toEqual("Reading a file requires a valid file to be passed")
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

  async function clean_after_import() {
    // clears out the database to test importing of data
    await clearDatabases()
  }

  it("should import the client data", async function() {
    await ImportClient(blob)
    const allClients = await ClientUseCase.syncWithDatabase()
    expect(allClients).toHaveLength(1)

    await clean_after_import()
  })

  it("should import the health check data", async function() {
    await ImportClient(blob)
    const allHealthCheck = await HealthCheckUseCase.syncWithDatabase()
    expect(allHealthCheck).toHaveLength(exportClientConstants.healthCheckCount)

    await clean_after_import()
  })

  it("should import the action checklist data", async function() {
    await ImportClient(blob)
    const allActionChecklists = await ActionChecklistUseCase.syncWithDatabase()
    const allPriority = await ActionPriorityUseCase.syncWithDatabase()
    const allNotes = await ActionNotesUseCase.syncWithDatabase()

    expect(allActionChecklists).toHaveLength(exportClientConstants.checklistCount)
    expect(allPriority).toHaveLength(exportClientConstants.priorityCount)
    expect(allNotes).toHaveLength(exportClientConstants.noteCount)

    await clean_after_import()
  })

  it("should import the cfc data", async function() {
    await ImportClient(blob)
    expect(await CFCUseCase.syncWithDatabase()).toHaveLength(exportClientConstants.cfcCount)

    await clean_after_import()
  })

  it("shouldn't remove any existing data from the database", async function() {
    // Number of items added
    const hc = 3
    const c = 2
    const ac = 2
    const ap = 2
    const an = 0
    const cfc = 1

    //#region Fill with random data
    await HealthCheckUseCase.create({clientId: 50, answers: ["negative"]})
    await HealthCheckUseCase.create({clientId: 50, answers: ["negative"]})
    await HealthCheckUseCase.create({clientId: 50, answers: ["negative"]})

    await ClientUseCase.create({name: "jim"})
    await ClientUseCase.create({name: "jim"})

    await ActionChecklistUseCase.create(newChecklistItem(50, "cashInActions"))
    await ActionChecklistUseCase.create(newChecklistItem(50, "cashInActions"))

    await ActionPriorityUseCase.create(newPriorityItem(50, "cashInActions"))
    await ActionPriorityUseCase.create(newPriorityItem(54, "cashInActions"))

    await CFCUseCase.create({...initialValues, clientId: 40})
    //#endregion

    await ImportClient(blob)

    expect(await ClientUseCase.syncWithDatabase()).toHaveLength(1 + c)
    expect(await HealthCheckUseCase.syncWithDatabase()).toHaveLength(exportClientConstants.healthCheckCount + hc)
    expect(await ActionChecklistUseCase.syncWithDatabase()).toHaveLength(exportClientConstants.checklistCount + ac)
    expect(await ActionPriorityUseCase.syncWithDatabase()).toHaveLength(exportClientConstants.priorityCount + ap)
    expect(await ActionNotesUseCase.syncWithDatabase()).toHaveLength(exportClientConstants.noteCount + an)
    expect(await CFCUseCase.syncWithDatabase()).toHaveLength(exportClientConstants.cfcCount + cfc)

    await clean_after_import()
  })

  it("should not duplicate data in the database", async function() {
    await ImportClient(blob)
    await ImportClient(blob)
    await ImportClient(blob)
    await ImportClient(blob)
    await ImportClient(blob)

    expect(await ClientUseCase.syncWithDatabase()).toHaveLength(1)
    expect(await HealthCheckUseCase.syncWithDatabase()).toHaveLength(exportClientConstants.healthCheckCount)
    expect(await ActionChecklistUseCase.syncWithDatabase()).toHaveLength(exportClientConstants.checklistCount)
    expect(await ActionPriorityUseCase.syncWithDatabase()).toHaveLength(exportClientConstants.priorityCount)
    expect(await ActionNotesUseCase.syncWithDatabase()).toHaveLength(exportClientConstants.noteCount)
    expect(await CFCUseCase.syncWithDatabase()).toHaveLength(exportClientConstants.cfcCount)

    await clean_after_import()
  })

  describe("Handle import failures", function() {
    test("Passing an invalid blob", async function() {
      try { await ImportClient(undefined) }
      catch (e) {
        expect(e.message).toEqual("Reading a file requires a valid file to be passed")
      }
    })

    test("Passing a blob with invalid keys", async function() {
      const b = new Blob([JSON.stringify({nope: "", yep: ""})])
      try { await ImportClient(b) }
      catch (e) {
        expect(e.message).toEqual("Imported data doesn't follow the correct structure. Ensure you have selected the correct export file")
      }
    })

    test("Should return an array of false items", async function() {
      const b = new Blob([JSON.stringify({
        ClientDatabase: null,
        HealthCheckDatabase: null,
        ActionChecklistDatabase: null,
        CFCDatabase: null,
      })])
      const res = await ImportClient(b)
      expect(res).toEqual([false, false, false, false])
    })

    test("Should reject an invalid object", async function() {
      const b = new Blob([JSON.stringify({
        ClientDatabase: {},
        HealthCheckDatabase: null,
        ActionChecklistDatabase: null,
        CFCDatabase: null,
      })])
      try { await ImportClient(b) }
      catch (e) {
        expect(e.message).toEqual("Imported data doesn't follow the correct structure. Ensure you have selected the correct export file")
      }
    })

    test("Pass invalid structure to Dexie import", async function() {
      await prefillDatabase()
      let payload = await constructExportPayload(clientId)
      payload.ActionChecklistDatabase = null
      payload.CFCDatabase = null
      payload.HealthCheckDatabase = null
      payload.ClientDatabase.data.databaseName = "BoomError"
      const blob = new Blob([JSON.stringify(payload)])
      const res = await ImportClient(blob)

      expect(res[0] instanceof Error).toBeTruthy()

      await clean_after_import()
    })
  })
})
