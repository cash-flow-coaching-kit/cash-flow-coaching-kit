import { Theme, createMuiTheme } from "@material-ui/core"
import applyTheme from "../../theme/mui/applyTheme"
import { PrivateRoutes } from "./routes"

const defaultTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#ff0",
		},
	},
})
const applyThemeRoutes: string[] = [
	PrivateRoutes.CFC,
	PrivateRoutes.CFCCompare,
	PrivateRoutes.CFCEdit,
	PrivateRoutes.CFCListing,
	PrivateRoutes.ChangeLevers,
]
const discoverThemeRoutes: string[] = []
const planActionThemeRoutes: string[] = []
const settingsThemeRoutes: string[] = []

function determineTheme(pathname: string): Theme {
	if (applyThemeRoutes.indexOf(pathname) !== -1) {
		return createMuiTheme(applyTheme)
	}

	console.log("Return default")
	return createMuiTheme()
}

export default determineTheme
