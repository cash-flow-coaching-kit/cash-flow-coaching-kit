import {
	OFFLINE_VID_DATA,
	OFFLINE_GOV_DATA,
} from "../static/offline-url-data.mjs"

export const setToggleOfflineContent = (urlData, isOnlineFlag) => {
	if (urlData) {
		let url = urlData.replace(/\/$/, "")
		let type = url.includes("youtube") ? "vid" : "doc"

		if (isOnlineFlag) {
			return url
		} else {
			let dataType = OFFLINE_VID_DATA

			switch (type) {
				case "vid":
					dataType = OFFLINE_VID_DATA
					break
				case "doc":
					dataType = OFFLINE_GOV_DATA
					break
				default:
					break
			}
			// from array, match correct url and return the file
			let found = dataType.find((x) => x.url.replace(/\/$/, "") === url)
			let foundFilename = found && found.filename
			return (
				"./offline-data/" +
				type +
				"/" +
				foundFilename +
				(type === "vid" ? ".mp4" : ".png")
			)
		}
	}
}
