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

const PrivateRoutesWrapper = (): ReactElement => {
	return (
		<>
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
		</>
	)
}

export default PrivateRoutesWrapper
