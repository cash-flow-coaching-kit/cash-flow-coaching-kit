import { sum, minusBy, divideBy, pipe, add, numOrZero } from "../math"

describe("Unit tests for math functions", () => {
  test("Summing some numbers", function() {
    const nums = [1, 2, 3, 4]
    expect(nums.reduce(sum())).toBe(10)
  })

  test("minus 10", function() {
    const minus10 = minusBy(10)
    expect(minus10(100)).toBe(90)
  })

  test("minus -10", function() {
    const minus10 = minusBy(-10)
    expect(minus10(100)).toBe(110)
  })

  test("divide by 2", function() {
    const divideBy2 = divideBy(2)
    expect(divideBy2(10)).toBe(5)
  })

  test("add 100", function() {
    const add100 = add(100)
    expect(add100(100)).toBe(200)
  })

  test("pipe", function() {
    const minus4 = minusBy(4)
    const divideBy2 = divideBy(2)
    const sumArr = (arr: number[]): number => arr.reduce(sum())

    const pipeValue: number = pipe<number[], number, any[]>(
      sumArr,
      minus4,
      divideBy2
    )([1, 2, 3, 4])

    expect(pipeValue).toBe(3)
  })

  test("pipe inline", function() {
    const value = pipe<number, number, any[]>(
      add(10),
      minusBy(10),
      divideBy(2)
    )(10)

    expect(value).toBe(5)
  })

  test("num or zero", function() {
    expect(numOrZero(10)).toBe(10)
    expect(numOrZero(0)).toBe(0)
    expect(numOrZero("")).toBe(0)
    expect(numOrZero("10")).toBe(0)
    expect(numOrZero(true)).toBe(0)
    expect(numOrZero(false)).toBe(0)
    expect(numOrZero(NaN)).toBe(0)
    expect(numOrZero(undefined)).toBe(0)
  })
})
