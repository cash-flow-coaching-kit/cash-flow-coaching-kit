/* eslint-disable import/prefer-default-export */
import {
	PrivateRoutes,
	routeVarReplacement,
} from "../../../../util/routes/routes"
import { INavRoutes } from "../../_config/shape"

// Nav routes definition for the Secondary navigation
export const routes: INavRoutes[] = [
	{
		route: routeVarReplacement(PrivateRoutes.HealthCheckQuiz, [[":id?", ""]]),
		title: "Health Check",
	},
	{
		route: PrivateRoutes.DiscoverTopics,
		title: "Discover Topics",
		subMenuTitle: "Topics Homepage",
		children: [
			{
				route: PrivateRoutes.DTPlanningBusiness,
				title: "Planning your business",
			},
			{
				route: PrivateRoutes.DTRecordKeeping,
				title: "Record keeping",
			},
			{
				route: PrivateRoutes.DTFundingBusiness,
				title: "Funding your business",
			},
			{
				route: PrivateRoutes.DTManagingCashFlow,
				title: "Managing your cash flow",
			},
			{
				route: PrivateRoutes.DTPlanningFinanicalCommitments,
				title: "Planning your regular financial commitments",
			},
			{
				route: PrivateRoutes.DTTrackingPerformance,
				title: "Tracking your performance",
			},
			{
				route: PrivateRoutes.DTSellingClosingSuccession,
				title: "Selling, closing and succession planning",
			},
		],
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
