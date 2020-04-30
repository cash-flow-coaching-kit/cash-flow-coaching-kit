import React, { ReactElement } from "react"
import { Route } from "react-router-dom"
import { PrivateRoutes } from "../../../util/routes/routes"
import ClientList from "../../../pages/client-list"
import SessionFiles from "../../../pages/session-files"
import HCQuestionnaire from "../../../pages/HealthCheck/questionnaire"
import DTListing from "../../../pages/DiscoverTopics/listing"
import CFCCanvas from "../../../pages/CashFlowCanvas/canvas"
import ChangeLevers from "../../../pages/change-levers"
import ActionItems from "../../../pages/action-items"
import CoachingKit from "../../../pages/coaching-kit"
import DTFundingBusiness from "../../../pages/DiscoverTopics/funding-business"
import DTManagingCashFlow from "../../../pages/DiscoverTopics/managing-cash-flow"
import DTPlanningBusiness from "../../../pages/DiscoverTopics/planning-business"
import DTPlanningFinanicalCommitments from "../../../pages/DiscoverTopics/planning-financial-commitments"
import DTRecordKeeping from "../../../pages/DiscoverTopics/record-keeping"
import DTSellingClosingSuccession from "../../../pages/DiscoverTopics/selling-closing-succession"
import DTTrackingPerformance from "../../../pages/DiscoverTopics/tracking-performance"

/**
 * Private route definitions, these pages should not be available
 * without the user entering a client
 *
 * @returns {ReactElement}
 */
const PrivateRoutesWrapper = (): ReactElement => {
	return (
		<>
			<Route path={PrivateRoutes.CoachingKit}>
				<CoachingKit />
			</Route>
			<Route path={PrivateRoutes.ClientList}>
				<ClientList />
			</Route>
			<Route path={PrivateRoutes.SessionFiles}>
				<SessionFiles />
			</Route>
			<Route path={PrivateRoutes.HealthCheck}>
				<HCQuestionnaire />
			</Route>
			<Route path={PrivateRoutes.DiscoverTopics}>
				<DTListing />
			</Route>
			<Route path={PrivateRoutes.CFC}>
				<CFCCanvas />
			</Route>
			<Route path={PrivateRoutes.ChangeLevers}>
				<ChangeLevers />
			</Route>
			<Route path={PrivateRoutes.ActionChecklist}>
				<ActionItems />
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
		</>
	)
}

export default PrivateRoutesWrapper
