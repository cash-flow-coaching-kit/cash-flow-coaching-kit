export type ReadFilePromiseResult = Promise<
	(string | ArrayBuffer | null) | Error
>

/**
 * Promise wrapper for the file reader
 *
 * @param {Blob} blob
 * @returns {Promise<any>}
 */
export default function readFile(blob: Blob): ReadFilePromiseResult {
	return new Promise((resolve, reject) => {
		const fr = new FileReader()
		fr.onerror = reject
		fr.onloadend = () => {
			resolve(fr.result)
		}
		fr.readAsText(blob)
	})
}
