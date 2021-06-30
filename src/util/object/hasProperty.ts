/**
 * Checks if a object has a property
 *
 * @param {any} obj
 * @param {string} prop
 * @returns {boolean}
 */
// eslint-disable-next-line
const hasProperty = (obj: any, prop: string): boolean =>
	Object.prototype.hasOwnProperty.call(obj, prop)

export default hasProperty
