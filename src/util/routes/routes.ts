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
	HealthCheckQuiz = "/health-check/quiz",
	HealthCheckList = "/health-check/listing",
	HealthCheckSummary = "/health-check/summary/:id",
	DiscoverTopics = "/discover-topics",
	CFC = "/cash-flow-canvas",
	ChangeLevers = "/change-levers",
	ActionChecklist = "/action-checklist",
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
