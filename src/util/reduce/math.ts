/* eslint-disable @typescript-eslint/no-explicit-any */
function numOrZero(val: any): number {
	const num = parseInt(val, 10)
	// eslint-disable-next-line no-restricted-globals
	if (typeof num === "number" && !isNaN(num)) return num
	return 0
}

/**
 * A reducer method to sum an array of numbers
 *
 * @returns {ReducerHOF<number, number>}
 */
function sum(): ReducerHOF<number, number> {
	return (acc, cur): number => numOrZero(acc) + numOrZero(cur)
}

/**
 * A HOF to add a specific value
 *
 * @param {number} val
 * @returns {MathHOF}
 */
function add(val: number): MathHOF {
	return (x): number => {
		return numOrZero(x) + numOrZero(val)
	}
}

/**
 * A HOF to minus a specific value
 *
 * @param {number} val
 * @returns {MathHOF}
 */
function minusBy(val: number): MathHOF {
	return (x): number => {
		return numOrZero(x) - numOrZero(val)
	}
}

/**
 * A HOF to divide by a specific value
 *
 * @param {number} val
 * @returns {MathHOF}
 */
function divideBy(val: number): MathHOF {
	return (x): number => {
		return numOrZero(val) === 0 ? 0 : numOrZero(x) / numOrZero(val)
	}
}

/**
 * FP pipe method, takes a list of functions and outputs a single value
 *
 * @param fns
 */
const pipe = <Input extends any, Output extends any, Fns extends any[]>(
	// eslint-disable-next-line
	...fns: Fns
) => (x: Input): Output => fns.reduce((v, f) => f(v), x)

export { sum, minusBy, divideBy, pipe, add, numOrZero }
