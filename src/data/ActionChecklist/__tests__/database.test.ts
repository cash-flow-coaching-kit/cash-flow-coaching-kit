require("fake-indexeddb/auto");

import ActionChecklistDB from "../ActionChecklistDatabase";
import Dexie from "dexie";

describe("Unit tests for action checklist database", () => {
  test("test instance type", function() {
    expect(ActionChecklistDB).toBeInstanceOf(Dexie)
    expect(typeof ActionChecklistDB.actionItems).not.toBeUndefined()
    expect(typeof ActionChecklistDB.priority).not.toBeUndefined()
    expect(typeof ActionChecklistDB.notes).not.toBeUndefined()
  })
})
