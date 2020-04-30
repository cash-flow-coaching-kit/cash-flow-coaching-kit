import { PrivateRoutes } from "../../../util/routes/routes"
import { INavRoutes } from "../shared/NavigationLinks"

// Nav routes definition for the Secondary navigation
const routes: INavRoutes[] = [
	{
		route: PrivateRoutes.HealthCheckQuiz,
		title: "Health Check",
	},
	{
		route: PrivateRoutes.DiscoverTopics,
		title: "Discover Topics",
	},
	{
		route: PrivateRoutes.CFC,
		title: "Cash Flow Canvas",
	},
	{
		route: PrivateRoutes.ChangeLevers,
		title: "Change Levers",
	},
	{
		route: PrivateRoutes.ActionChecklist,
		title: "Action Checklist",
	},
]

export default routes
