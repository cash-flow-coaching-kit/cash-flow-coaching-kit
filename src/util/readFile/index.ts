export type ReadFilePromiseResult = Promise<
	(string | ArrayBuffer | null) | Error
>

/**
 * Promise wrapper for the file reader
 *
 * @param {Blob} blob
 * @returns {Promise<any>}
 */
export default function readFile(
	blob: Blob | undefined
): ReadFilePromiseResult {
	return new Promise((resolve, reject) => {
		if (!blob) {
			reject(new Error("Reading a file requires a valid file to be passed"))
		}

		const fr = new FileReader()
		// eslint-disable-next-line
		fr.onerror = (event) => {
			reject(event)
		}
		// eslint-disable-next-line
		fr.onloadend = () => {
			resolve(fr.result)
		}

		if (blob) {
			fr.readAsText(blob)
		}
	})
}
