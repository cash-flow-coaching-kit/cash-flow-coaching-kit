/**
 * Constructs a list items key
 *
 * @param {string} key A random key that stays **consistent**
 * @param {string} idx Map index to keep it unique within that list
 * @reurns `string`
 */
export const constructKey = (key: string, idx: number): string =>
	`${key}.${idx}`

/**
 * Generates a random key string
 *
 * @returns `string`
 */
export const generateKey = (): string =>
	// const arr = new Uint32Array(1)
	// window.crypto.getRandomValues(arr)

	// return `${arr[0]}`
	`${new Date().getTime()}`
