import saveBlob from ".."

describe("Unit tests for saving a blob", function() {
  it("should download the blob", function() {
    let blob = new Blob(['{hello: "world"}'])
    saveBlob(blob, "file.json")
    expect(global.URL.createObjectURL).toHaveBeenCalled()
  })
})
