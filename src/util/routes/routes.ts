import DTManagingCashFlow from "../../pages/DiscoverTopics/managing-cash-flow"

/**
 * Private route definitions
 *
 * @export
 * @enum {number}
 */
export enum PrivateRoutes {
	CoachingKit = "/coaching-kit",
	ClientList = "/client/list",
	SessionFiles = "/session-files",
	HealthCheckQuiz = "/health-check/quiz/:id?",
	HealthCheckList = "/health-check/listing",
	HealthCheckSummary = "/health-check/summary/:id",
	DiscoverTopics = "/discover-topics",
	CFC = "/cash-flow-canvas",
	ChangeLevers = "/change-levers",
	ActionChecklist = "/action-checklist",
	DTFundingBusiness = "/funding-business",
	DTManagingCashFlow = "/managing-cash-flow",
	DTPlanningBusiness = "/planning-business",
	DTPlanningFinanicalCommitments = "/planning-financial-commiments",
	DTRecordKeeping = "/record-keeping",
	DTSellingClosingSuccession = "/selling-closing-succession",
	DTTrackingPerformance = "/tracking-performance",
}

/**
 * Public route definitions
 *
 * @export
 * @enum {number}
 */
export enum PublicRoutes {
	Home = "/",
}

/**
 * Replaces a variable element in a route with a value
 *
 * [[":id", "1"]] -> /health-check/summary/:id = /health-check/summary/1
 *
 * @param {PrivateRoutes|PublicRoutes} route Route to replace a value from
 * @param {[string, string][]} replacements Items to find and replace
 * @returns string
 */
export const routeVarReplacement = (
	route: PrivateRoutes | PublicRoutes,
	replacements: [string, string][]
): string => {
	let r = `${route}`
	replacements.forEach(([search, rep]) => {
		r = r.replace(search, rep)
	})

	return r
}
