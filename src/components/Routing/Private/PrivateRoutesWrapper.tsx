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
import HCListing from "../../../pages/HealthCheck/listing"
import HCSummary from "../../../pages/HealthCheck/summary"

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
			<Route path={PrivateRoutes.ChangeLevers}>
				<ChangeLevers />
			</Route>
			<Route path={PrivateRoutes.ActionChecklist}>
				<ActionChecklist />
			</Route>
		</>
	)
}

export default PrivateRoutesWrapper
