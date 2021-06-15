require("dotenv").config()
const { notarize } = require("electron-notarize")

exports.default = async function notarizing(context) {
	const { electronPlatformName, appOutDir } = context
	if (electronPlatformName !== "darwin") {
		return
	}

	const appName = context.packager.appInfo.productFilename

	return await notarize({
		appBundleId: "com.github.dcfck",
		appPath: `${appOutDir}/${appName}.app`,
		appleId: process.env.REACT_APP_APPLEID,
		appleIdPassword: process.env.REACT_APP_APPLEIDPASS,
	})
}
