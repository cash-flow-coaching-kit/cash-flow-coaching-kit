import { Theme, createMuiTheme } from "@material-ui/core"
import {
	applyTheme,
	defaultTheme,
	discoverTheme,
	planActionTheme,
	settingsTheme,
} from "../../theme/mui/themes"
import { PrivateRoutes, routeVarReplacement } from "./routes"

const applyThemeRoutes: string[] = [
	PrivateRoutes.CFC,
	PrivateRoutes.CFCCompare,
	routeVarReplacement(PrivateRoutes.CFCEdit, [[":id", ""]]),
	PrivateRoutes.CFCListing,
	PrivateRoutes.ChangeLevers,
]
const discoverThemeRoutes: string[] = [
	PrivateRoutes.ClientList,
	PrivateRoutes.DiscoverTopics,
	PrivateRoutes.DTTrackingPerformance,
	PrivateRoutes.DTSellingClosingSuccession,
	PrivateRoutes.DTRecordKeeping,
	PrivateRoutes.DTPlanningFinanicalCommitments,
	PrivateRoutes.DTPlanningBusiness,
	PrivateRoutes.DTManagingCashFlow,
	PrivateRoutes.DTFundingBusiness,
	PrivateRoutes.HealthCheckList,
	routeVarReplacement(PrivateRoutes.HealthCheckQuiz, [[":id?", ""]]),
	routeVarReplacement(PrivateRoutes.HealthCheckSummary, [[":id", ""]]),
]
const planActionThemeRoutes: string[] = [PrivateRoutes.ActionChecklist]
const settingsThemeRoutes: string[] = [PrivateRoutes.SessionFiles]

function determineTheme(pathname: string): Theme {
	const path = `${pathname.replace(/[\d]+?$/g, "")}`

	if (applyThemeRoutes.indexOf(path) !== -1) {
		return createMuiTheme(applyTheme)
	}

	if (discoverThemeRoutes.indexOf(path) !== -1) {
		return createMuiTheme(discoverTheme)
	}

	if (planActionThemeRoutes.indexOf(path) !== -1) {
		return createMuiTheme(planActionTheme)
	}

	if (settingsThemeRoutes.indexOf(path) !== -1) {
		return createMuiTheme(settingsTheme)
	}

	return createMuiTheme(defaultTheme)
}

export default determineTheme
