require("fake-indexeddb/auto");

import Dexie from "dexie";
import HealthCheckDB from "../HealthCheckDatabase";

describe("Unit tests for client database", () => {
  test("test instance type", function() {
    expect(HealthCheckDB).toBeInstanceOf(Dexie)
    expect(typeof HealthCheckDB.healthChecks).not.toBeUndefined()
  })
})
