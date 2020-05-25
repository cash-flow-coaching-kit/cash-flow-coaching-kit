/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * A reducer method to sum an array of numbers
 *
 * @returns {ReducerHOF<number, number>}
 */
function sum(): ReducerHOF<number, number> {
	return (acc, cur): number => acc + cur
}

/**
 * A HOF to add a specific value
 *
 * @param {number} val
 * @returns {MathHOF}
 */
function add(val: number): MathHOF {
	return (x): number => {
		return x + val
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
		return x - val
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
		return x / val
	}
}

/**
 * FP pipe method, takes a list of functions and outputs a single value
 *
 * @param fns
 */
const pipe = <Input extends any, Output extends any, Fns extends any[]>(
	// eslint-disable-next-line fp/no-rest-parameters
	...fns: Fns
) => (x: Input): Output => fns.reduce((v, f) => f(v), x)

export { sum, minusBy, divideBy, pipe, add }
