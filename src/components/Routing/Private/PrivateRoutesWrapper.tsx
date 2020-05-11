import React, { ReactElement } from "react"
import { Route } from "react-router-dom"
import { PrivateRoutes } from "../../../util/routes/routes"
import ClientList from "../../../pages/client-list"
import SessionFiles from "../../../pages/session-files"
import HCQuestionnaire from "../../../pages/HealthCheck/questionnaire"
import DTListing from "../../../pages/DiscoverTopics/listing"
import CFCCanvas from "../../../pages/CashFlowCanvas/canvas"
import ChangeLevers from "../../../pages/change-levers"
import ActionChecklist from "../../../pages/action-items"
import CoachingKit from "../../../pages/coaching-kit"
import DTFundingBusiness from "../../../pages/DiscoverTopics/funding-business"
import DTManagingCashFlow from "../../../pages/DiscoverTopics/managing-cash-flow"
import DTPlanningBusiness from "../../../pages/DiscoverTopics/planning-business"
import DTPlanningFinanicalCommitments from "../../../pages/DiscoverTopics/planning-financial-commitments"
import DTRecordKeeping from "../../../pages/DiscoverTopics/record-keeping"
import DTSellingClosingSuccession from "../../../pages/DiscoverTopics/selling-closing-succession"
import DTTrackingPerformance from "../../../pages/DiscoverTopics/tracking-performance"
import HCListing from "../../../pages/HealthCheck/listing"
import HCSummary from "../../../pages/HealthCheck/summary"
import { ActionChecklistProvider } from "../../../state/action-checklist"
import { PrivatePage } from "../../Layouts"

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
			<Route path={PrivateRoutes.ClientList}>
				<ClientList />
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
			<Route path={PrivateRoutes.CFC}>
				<CFCCanvas />
			</Route>

			{/*
				Wrap change levers and action checklist in provider since
				they require the state values provided by this context setup
			*/}
			<ActionChecklistProvider>
				<Route path={PrivateRoutes.ChangeLevers}>
					<ChangeLevers />
				</Route>
				<Route path={PrivateRoutes.ActionChecklist}>
					<ActionChecklist />
				</Route>
			</ActionChecklistProvider>

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
		</PrivatePage>
	)
}

export default PrivateRoutesWrapper
