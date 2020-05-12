require("fake-indexeddb/auto");

import Dexie from "dexie";
import ClientDB from "../ClientDatabase";

describe("Unit tests for client database", () => {
  test("test instance type", function() {
    expect(ClientDB).toBeInstanceOf(Dexie)
    expect(typeof ClientDB.clients).not.toBeUndefined()
  })
})
