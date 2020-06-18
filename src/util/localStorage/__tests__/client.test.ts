import { setStorageClient, getStorageClient, removeStorageClient } from "../client"
import { remove } from "lodash-es"

describe("Unit tests for local storage actions on the client", () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  test("set client in storage", function() {
    setStorageClient(4)
    expect(getStorageClient()).toBe(4)
  })

  test("get the storage client", function() {
    expect(getStorageClient()).toBeUndefined()
  })

  test("can clear the storage", function() {
    setStorageClient(4)
    removeStorageClient()
    expect(getStorageClient()).toBeUndefined()
  })
})
