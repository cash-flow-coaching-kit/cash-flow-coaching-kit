/**
 * Download a blob to the file system by creating a ghost button to trigger
 * a click
 *
 * @export
 * @param {Blob} blob
 * @param {string} filename
 */
export default function saveBlob(blob: Blob, filename: string): void {
	// Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
	const blobUrl = URL.createObjectURL(blob)

	// Create a link element
	const link: HTMLAnchorElement = document.createElement("a")

	// Set link's href to point to the Blob URL
	link.setAttribute("href", blobUrl)
	link.setAttribute("download", filename)

	// Append link to the body
	document.body.appendChild(link)

	// Dispatch click event on the link
	// This is necessary as link.click() does not work on the latest firefox
	link.dispatchEvent(
		new MouseEvent("click", {
			bubbles: true,
			cancelable: true,
			view: window,
		})
	)

	// Remove link from body
	document.body.removeChild(link)
}
