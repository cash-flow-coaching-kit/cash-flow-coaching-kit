/**
 * Uppercases the first character in a string
 *
 * @param lower
 * @returns {string}
 */
const upperFirst = (lower: string): string =>
	lower.replace(/^\w/, (c) => c.toUpperCase())

export default upperFirst
