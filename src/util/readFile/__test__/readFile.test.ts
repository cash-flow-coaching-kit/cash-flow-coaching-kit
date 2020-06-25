import readFile from ".."

describe("Unit tests for reading a blob as text", () => {
  it("should retrive the text from a blob", async function() {
    const blob = new Blob(["hello world"])
    const text = await readFile(blob)
    expect(text).toEqual("hello world")
  })

  it("should throw an error reading the file", async function() {
    expect.hasAssertions()
    try {
      await readFile(undefined)
    } catch (e) {
      expect(e).not.toBeUndefined()
    }
  })
})
