import React, { ReactElement } from "react"
import { Route } from "react-router-dom"
import loadable from "@loadable/component"
import { PrivateRoutes } from "../../../util/routes/routes"
import { ActionChecklistProvider } from "../../../state/action-checklist"
import { PrivatePage, PageContainer } from "../../Layouts"
import CFCProvider from "../../../state/CFC/provider"
import Loading from "../../Loading"

const LoadableFallback = (): ReactElement => (
	<PageContainer>
		<Loading />
	</PageContainer>
)

const DTFundingBusiness = loadable(
	() => import("../../../pages/DiscoverTopics/funding-business"),
	{ fallback: <LoadableFallback /> }
)
const DTManagingCashFlow = loadable(
	() => import("../../../pages/DiscoverTopics/managing-cash-flow"),
	{ fallback: <LoadableFallback /> }
)
const DTPlanningBusiness = loadable(
	() => import("../../../pages/DiscoverTopics/planning-business"),
	{ fallback: <LoadableFallback /> }
)
const DTPlanningFinanicalCommitments = loadable(
	() => import("../../../pages/DiscoverTopics/planning-financial-commitments"),
	{ fallback: <LoadableFallback /> }
)
const DTRecordKeeping = loadable(
	() => import("../../../pages/DiscoverTopics/record-keeping"),
	{ fallback: <LoadableFallback /> }
)
const DTSellingClosingSuccession = loadable(
	() => import("../../../pages/DiscoverTopics/selling-closing-succession"),
	{ fallback: <LoadableFallback /> }
)
const DTTrackingPerformance = loadable(
	() => import("../../../pages/DiscoverTopics/tracking-performance"),
	{ fallback: <LoadableFallback /> }
)
const ClientList = loadable(() => import("../../../pages/client-list"), {
	fallback: <LoadableFallback />,
})
const SessionFiles = loadable(() => import("../../../pages/session-files"), {
	fallback: <LoadableFallback />,
})
const HCQuestionnaire = loadable(
	() => import("../../../pages/HealthCheck/questionnaire"),
	{ fallback: <LoadableFallback /> }
)
const DTListing = loadable(
	() => import("../../../pages/DiscoverTopics/listing"),
	{ fallback: <LoadableFallback /> }
)
const CFCCanvas = loadable(
	() => import("../../../pages/CashFlowCanvas/canvas"),
	{ fallback: <LoadableFallback /> }
)
const ChangeLevers = loadable(() => import("../../../pages/change-levers"), {
	fallback: <LoadableFallback />,
})
const ActionChecklist = loadable(() => import("../../../pages/action-items"), {
	fallback: <LoadableFallback />,
})
const CoachingKit = loadable(() => import("../../../pages/coaching-kit"), {
	fallback: <LoadableFallback />,
})
const HCListing = loadable(() => import("../../../pages/HealthCheck/listing"), {
	fallback: <LoadableFallback />,
})
const HCSummary = loadable(() => import("../../../pages/HealthCheck/summary"), {
	fallback: <LoadableFallback />,
})
const CanvasEdit = loadable(
	() => import("../../../pages/CashFlowCanvas/canvasEdit"),
	{ fallback: <LoadableFallback /> }
)
const CFCListing = loadable(
	() => import("../../../pages/CashFlowCanvas/listing"),
	{ fallback: <LoadableFallback /> }
)
const CFCCompare = loadable(
	() => import("../../../pages/CashFlowCanvas/compare"),
	{ fallback: <LoadableFallback /> }
)

/**
 * Private route definitions, these pages should not be available
 * without the user entering a client
 *
 * @returns {ReactElement}
 */
const PrivateRoutesWrapper = (): ReactElement => {
	return (
		<PrivatePage>
			<Route path={PrivateRoutes.CoachingKit}>
				<CoachingKit />
			</Route>
			<Route path={PrivateRoutes.SessionFiles}>
				<SessionFiles />
			</Route>
			<Route exact path={PrivateRoutes.HealthCheckQuiz}>
				<HCQuestionnaire />
			</Route>
			<Route exact path={PrivateRoutes.HealthCheckList}>
				<HCListing />
			</Route>
			<Route exact path={PrivateRoutes.HealthCheckSummary}>
				<HCSummary />
			</Route>
			<Route path={PrivateRoutes.DiscoverTopics}>
				<DTListing />
			</Route>

			<CFCProvider>
				<Route path={PrivateRoutes.CFC} exact>
					<CFCCanvas />
				</Route>
				<Route path={PrivateRoutes.CFCEdit}>
					<CanvasEdit />
				</Route>
				<Route path={PrivateRoutes.CFCListing}>
					<CFCListing />
				</Route>
				<Route path={PrivateRoutes.CFCCompare}>
					<CFCCompare />
				</Route>
			</CFCProvider>

			{/*
				Wrap change levers and action checklist in provider since
				they require the state values provided by this context setup
			*/}
			<ActionChecklistProvider>
				<Route path={PrivateRoutes.ClientList}>
					<ClientList />
				</Route>

				<Route path={PrivateRoutes.ChangeLevers}>
					<ChangeLevers />
				</Route>
				<Route path={PrivateRoutes.ActionChecklist}>
					<ActionChecklist />
				</Route>

				<Route path={PrivateRoutes.DTFundingBusiness}>
					<DTFundingBusiness />
				</Route>
				<Route path={PrivateRoutes.DTManagingCashFlow}>
					<DTManagingCashFlow />
				</Route>
				<Route path={PrivateRoutes.DTPlanningBusiness}>
					<DTPlanningBusiness />
				</Route>
				<Route path={PrivateRoutes.DTPlanningFinanicalCommitments}>
					<DTPlanningFinanicalCommitments />
				</Route>
				<Route path={PrivateRoutes.DTRecordKeeping}>
					<DTRecordKeeping />
				</Route>
				<Route path={PrivateRoutes.DTSellingClosingSuccession}>
					<DTSellingClosingSuccession />
				</Route>
				<Route path={PrivateRoutes.DTTrackingPerformance}>
					<DTTrackingPerformance />
				</Route>
			</ActionChecklistProvider>
		</PrivatePage>
	)
}

export default PrivateRoutesWrapper
