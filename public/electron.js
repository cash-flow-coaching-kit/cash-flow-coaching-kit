const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("path")
const isDev = require("electron-is-dev")
const { autoUpdater } = require('electron-updater')
let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: true,
      nodeIntegration: true,
      contextIsolation: false
    }
  })

	const appUrl = isDev
		? "http://localhost:3000"
		: `file://${path.join(__dirname, "../build/index.html")}`

	mainWindow.loadURL(appUrl)
  mainWindow.maximize()

	//attach event handler here
	mainWindow.on("close", () => {
		mainWindow = null
		app.quit()
    app.exit(0)
	})

  // only for new windows '_blank' links
  mainWindow.webContents.setWindowOpenHandler(({url})=>{
    const win = new BrowserWindow({
      show: false
    })
    win.once('ready-to-show', () => {
      win.show()
    })
    win.loadURL(url)
  })

}

autoUpdater.checkForUpdatesAndNotify();

app.on('ready', () => {
  createWindow();
})

app.on("window-all-closed", () => {
	// Follow OS convention on whether to quit app when
	// all windows are closed.
	if (process.platform !== "darwin") {
		app.quit()
	}
})
app.on("activate", () => {
	// If the app is still open, but no windows are open,
	// create one when the app comes into focus.
	if (mainWindow === null) {
		createWindow()
	}
})

ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() })
})

/**
 * Auto Updater
 *
 * Code Signing with a valid certificate is required.
 * 
 */
autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update_available')
})

autoUpdater.on("update-downloaded", () => {
  mainWindow.webContents.send("update_downloaded")
})

const sendStatusToWindow = (text) => {
  mainWindow.webContents.send('postMessage', text);
}

autoUpdater.on('download-progress', (progressObj) => {
  let log_message = 'Downloaded ' + Math.round(progressObj.percent) + '%';
  sendStatusToWindow(log_message);
})

ipcMain.on("restart_app", () => {
  autoUpdater.quitAndInstall()
})

/**
 * If dev - for dev testing
 */

    // // if (isDev) {
    //   // Useful for some dev/debugging tasks, but download can
    //   // not be validated becuase dev app is not signed
    //   autoUpdater.updateConfigPath = path.join(__dirname, 'dev-app-update.yml');
    //     Object.defineProperty(app, 'isPackaged', {
    //   get() {
    //     return true;
    //   }
    // });
    // }

    
