// Listen for electron auto-update messages
const { ipcRenderer } = window.require("electron")
const version = document.getElementById("version")
const notification = document.getElementById("notification")
const message = document.getElementById("message")
const postMessage = document.getElementById("postMessage")
const restartButton = document.getElementById("restart-button")

ipcRenderer.on("message", function (event, text) {
	var container = document.getElementById("message")
	var message = document.createElement("div")
	message.innerHTML = text
	container.appendChild(message)
})
ipcRenderer.on("postMessage", function (event, text) {
	var container = document.getElementById("postMessage")
	var message = document.createElement("div")
	message.innerHTML = text
	container.innerHTML = ""
	container.appendChild(message)
})
ipcRenderer.send("app_version")

ipcRenderer.on("app_version", (event, arg) => {
	ipcRenderer.removeAllListeners("app_version")
	version.innerText = "Version " + arg.version
})

ipcRenderer.on("update_available", () => {
	ipcRenderer.removeAllListeners("update_available")
	message.innerText = "A new update is available. Downloading now..."
	notification.classList.remove("hidden")
})

ipcRenderer.on("update_downloaded", () => {
	ipcRenderer.removeAllListeners("update_downloaded")
	message.innerText =
		"Update downloaded. It will be installed on restart. Restart now?"
	restartButton.classList.remove("hidden")
	notification.classList.remove("hidden")
})

function closeNotification() {
	notification.classList.add("hidden")
}

function restartApp() {
	ipcRenderer.send("restart_app")
}
