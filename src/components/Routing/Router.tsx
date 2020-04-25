import React, { ReactElement } from "react"
import { HashRouter as Router, Switch } from "react-router-dom"
import PublicRoutesWrapper from "./Public"
import PrivateRoutesWrapper from "./Private"

/**
 * Application router component
 *
 * @returns {ReactElement}
 */
const AppRouter = (): ReactElement => {
	return (
		<Router>
			<Switch>
				<>
					<PublicRoutesWrapper />
					{/* TODO: Hide if the user does not have any clients */}
					<PrivateRoutesWrapper />
				</>
			</Switch>
		</Router>
	)
}

export default AppRouter
