/* eslint-disable import/prefer-default-export */
import { PrivateRoutes } from "../../../../util/routes/routes"
import { INavRoutes } from "../../_config/shape"

// Nav routes definition for the Secondary navigation
export const routes: INavRoutes[] = [
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
