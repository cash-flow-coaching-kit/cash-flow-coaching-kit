import { HealthCheckId, ClientId } from "../../_config/shape"
import HealthCheckDB from "../HealthCheckDatabase"
import HealthCheckUseCase from "../HealthCheckLogic"

describe("Unit tests for the Health Check Logic layer", () => {
  let createdId: HealthCheckId
  const clientId: ClientId = 10

  beforeEach(async () => {
    await HealthCheckDB.healthChecks.clear()

    createdId = await HealthCheckUseCase.create({
      answers: ["negative"],
      clientId: clientId
    })
  })

  afterAll(async () => {
    await HealthCheckDB.healthChecks.clear()
    HealthCheckDB.close()
  })

  it("Can find results based on id and client id", async function() {
    const item = await HealthCheckUseCase.findByClientId(createdId, clientId)

    expect(item).not.toBeUndefined()
  })

  it("Can find a clients health checks", async function() {
    const check = await HealthCheckUseCase.findClientHealthChecks(clientId)

    expect(check).toHaveLength(1)
  })
})
