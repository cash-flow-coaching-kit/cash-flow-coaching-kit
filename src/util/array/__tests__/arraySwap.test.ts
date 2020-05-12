import arraySwap from "../arraySwap"

test("array swap method switches items", function() {
  const arr = [1, 2, 3, 4]
  const newArr = arraySwap(arr, 1, 3, arr[1])
  expect(newArr).toEqual([1, 3, 4, 2])
})
