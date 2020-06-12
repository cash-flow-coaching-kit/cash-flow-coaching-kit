import ClientDB from "../../../data/client/ClientDatabase"
import HealthCheckDB from "../../../data/healthChecks/HealthCheckDatabase"
import ActionChecklistDB from "../../../data/ActionChecklist/ActionChecklistDatabase"
import CFCDB from "../../../data/CFC/CFCDatabase"
import ClientUseCase from "../../../data/client/ClientLogic"
import HealthCheckUseCase from "../../../data/healthChecks/HealthCheckLogic"
import { ClientId } from "../../../data/_config/shape"
import { QuestionOptions } from "../../../components/HealthCheck/_config/shape"
import CFCUseCase from "../../../data/CFC/CFCLogic"
import { initialValues } from "../../../components/Forms/CFC"
import ActionChecklistUseCase from "../../../data/ActionChecklist/ChecklistLogic"
import { newChecklistItem } from "../../../data/ActionChecklist/_config/utilities"
import ActionPriorityUseCase from "../../../data/ActionChecklist/PriorityLogic"
import { PossibleActionItems } from "../../../state/action-checklist/shape"
import ActionNotesUseCase from "../../../data/ActionChecklist/NotesLogic"
import ExportClient, { constructExportPayload, getDataAsJSON, exportFilter } from ".."
import { DexieExportJsonStructure } from "dexie-export-import/dist/json-structure"

//#region Pre-filling, closing, clearing databases
type Contants = {
  clientId: ClientId,
  answers: QuestionOptions[]
  healthCheckCount: number
  cfcCount: number
  checklistCount: number,
  priorityCount: number,
  noteCount: number,
  checklistContainer: PossibleActionItems[]
}

const exportClientConstants: Contants = {
  clientId: 1,
  answers: ["positive", "negative"],
  healthCheckCount: 3,
  cfcCount: 5,
  checklistCount: 3,
  priorityCount: 2,
  noteCount: 1,
  checklistContainer: ["cashInActions", "funding"]
}

export async function prefillDatabase(): Promise<void> {
  const {answers, checklistContainer} = exportClientConstants

  //#region Filling client database
  // main client
  let c = await ClientUseCase.create({ name: "Jimmy" })
  exportClientConstants.clientId = c

  // filler clients
  let c1 = await ClientUseCase.create({ name: "Bobby" })
  let c2 = await ClientUseCase.create({ name: "Bill" })
  //#endregion

  //#region Filling health check database
  // Adding 3 health check items
  await HealthCheckUseCase.create({ clientId: c, answers })
  await HealthCheckUseCase.create({ clientId: c, answers })
  await HealthCheckUseCase.create({ clientId: c, answers })

  // Filler health check items
  await HealthCheckUseCase.create({ clientId: c1, answers })
  await HealthCheckUseCase.create({ clientId: c2, answers })
  await HealthCheckUseCase.create({ clientId: c2, answers })
  //#endregion

  //#region Filling Action checklist items
  // Filling client action checklist items
  let ac = await ActionChecklistUseCase.create(newChecklistItem(c, checklistContainer[0]))
  let ac1 = await ActionChecklistUseCase.create(newChecklistItem(c, checklistContainer[0]))
  let ac2 = await ActionChecklistUseCase.create(newChecklistItem(c, checklistContainer[1]))
  await ActionPriorityUseCase.create({ clientId: c, order: [ac, ac1], actionContainer: checklistContainer[0]})
  await ActionPriorityUseCase.create({ clientId: c, order: [ac2], actionContainer: checklistContainer[1]})
  await ActionNotesUseCase.create({clientId: c, notes: "", actionContainer: checklistContainer[1]})

  // Filler action checklist data
  let ac3 = await ActionChecklistUseCase.create(newChecklistItem(c2, "managing"))
  await ActionPriorityUseCase.create({clientId: c2, actionContainer: "managing", order: [ac3]})
  //#endregion

  //#region Filling CFC items
  // Adding 5 CFC items
  await CFCUseCase.create({...initialValues, clientId: c})
  await CFCUseCase.create({...initialValues, clientId: c})
  await CFCUseCase.create({...initialValues, clientId: c})
  await CFCUseCase.create({...initialValues, clientId: c})
  await CFCUseCase.create({...initialValues, clientId: c})

  // Adding filler CFC items
  await CFCUseCase.create({...initialValues, clientId: c1})
  await CFCUseCase.create({...initialValues, clientId: c1})
  await CFCUseCase.create({...initialValues, clientId: c1})
  await CFCUseCase.create({...initialValues, clientId: c2})
  await CFCUseCase.create({...initialValues, clientId: c2})
  //#endregion
}

export async function clearDatabases(): Promise<void> {
  // Client Database
  await ClientDB.clients.clear()

  // Health Check Database
  await HealthCheckDB.healthChecks.clear()

  // Action Checklist Database
  await ActionChecklistDB.notes.clear()
  await ActionChecklistDB.priority.clear()
  await ActionChecklistDB.actionItems.clear()

  // CFC Database
  await CFCDB.canvases.clear()
}

export async function closeDatabases(): Promise<void> {
  ClientDB.close()
  HealthCheckDB.close()
  ActionChecklistDB.close()
  CFCDB.close()
}
//#endregion

describe("Unit tests for export client data", function() {
  //#region Test setup
  beforeAll(async () => {
    await clearDatabases()
    await prefillDatabase()
  })
  //#endregion

  //#region Test teardown
  afterAll(async () => {
    await clearDatabases()
    await closeDatabases()
  })
  //#endregion

  it("should fill the data properly", async function() {
    const {clientId, healthCheckCount, checklistCount, priorityCount, noteCount, cfcCount} = exportClientConstants

    expect(await ClientUseCase.findById(clientId)).not.toBeUndefined()
    expect(await HealthCheckUseCase.findByClient(clientId)).toHaveLength(healthCheckCount)
    expect(await ActionChecklistUseCase.findByClient(clientId)).toHaveLength(checklistCount)
    expect(await ActionPriorityUseCase.findByClient(clientId)).toHaveLength(priorityCount)
    expect(await ActionNotesUseCase.findByClient(clientId)).toHaveLength(noteCount)
    expect(await CFCUseCase.findByClient(clientId)).toHaveLength(cfcCount)
  })

  test("filtering out client results", function() {
    const filterFn = exportFilter(1)
    const clients = [{id: 1}, {id: 2}, {id: 3}]
    const clients_res = clients.map((c) => filterFn("clients", c))
    expect(clients_res).toEqual([true, false, false])

    const other = [{clientId: 1}, {clientId: 2}, {id: 1}]
    const other_res = other.map((o) => filterFn("other", o))
    expect(other_res).toEqual([true, false, false])
  })

  function assert_client_results(json: DexieExportJsonStructure): void {
    const { clientId } = exportClientConstants

    expect(json).not.toBeUndefined()
    expect(json.data.databaseName).toEqual("ClientDatabase")
    expect(json.data.data[0].rows).toHaveLength(1)
    expect(json.data.data[0].rows[0].id).toEqual(clientId)
  }

  it("should pull out the appropriate client data as json", async function() {
    const { clientId } = exportClientConstants
    const json: DexieExportJsonStructure = await getDataAsJSON(ClientDB, clientId)

    assert_client_results(json)
  })

  function assert_health_check_results(json: DexieExportJsonStructure): void {
    const { clientId, healthCheckCount } = exportClientConstants

    expect(json).not.toBeUndefined()
    expect(json.data.databaseName).toEqual("HealthCheckDatabase")
    expect(json.data.data).toHaveLength(1) // relates to the number of tables
    expect(json.data.data[0].rows).toHaveLength(healthCheckCount)
    expect(json.data.data[0].rows[0].clientId).toEqual(clientId)
  }

  it("should pull out the appropriate health check data as json", async function() {
    const { clientId } = exportClientConstants
    const json: DexieExportJsonStructure = await getDataAsJSON(HealthCheckDB, clientId)

    assert_health_check_results(json)
  })

  function assert_checklist_results(json: DexieExportJsonStructure): void {
    const { checklistCount, priorityCount, noteCount } = exportClientConstants

    expect(json).not.toBeUndefined()
    expect(json.data.databaseName).toEqual("ActionChecklistDatabase")
    expect(json.data.data).toHaveLength(3) // relates to the number of tables
    expect(json.data.data[0].rows).toHaveLength(checklistCount)
    expect(json.data.data[1].rows).toHaveLength(priorityCount)
    expect(json.data.data[2].rows).toHaveLength(noteCount)
  }

  it("should pull out the appropriate action checklist data as json", async function() {
    const { clientId, checklistCount, priorityCount, noteCount } = exportClientConstants
    const json: DexieExportJsonStructure = await getDataAsJSON(ActionChecklistDB, clientId)

    assert_checklist_results(json)
  })

  function assert_cfc_results(json: DexieExportJsonStructure): void {
    const { cfcCount } = exportClientConstants

    expect(json).not.toBeUndefined()
    expect(json.data.databaseName).toEqual("CFCDatabase")
    expect(json.data.data).toHaveLength(1) // relates to the number of tables
    expect(json.data.data[0].rows).toHaveLength(cfcCount)
  }

  it("should pull out the appropriate cfc data as json", async function() {
    const { clientId, cfcCount } = exportClientConstants
    const json: DexieExportJsonStructure = await getDataAsJSON(CFCDB, clientId)

    assert_cfc_results(json)
  })

  it("should construct the export json", async function() {
    const result = await constructExportPayload(exportClientConstants.clientId)
    expect(Object.keys(result)).toEqual(["ClientDatabase", "HealthCheckDatabase", "ActionChecklistDatabase", "CFCDatabase"])

    assert_client_results(result.ClientDatabase)
    assert_health_check_results(result.HealthCheckDatabase)
    assert_checklist_results(result.ActionChecklistDatabase)
    assert_cfc_results(result.CFCDatabase)
  })

  it("should be able to export the client data", async function() {
    const res = await ExportClient(exportClientConstants.clientId)
    expect(res).toBeTruthy()
  })

  it("should throw an error for a uncreated client", async function() {
    expect.hasAssertions();
    try {
      await ExportClient(100)
    } catch (e) {
      expect(e.message).toEqual("Requested client could not be found")
    }
  })
})
