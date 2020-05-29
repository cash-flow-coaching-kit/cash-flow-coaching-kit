import React, { ReactElement, useEffect, useContext } from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import PublicRoutesWrapper from "./Public"
import PrivateRoutesWrapper from "./Private"
import syncClientsWithDb from "../../data/client/syncWithDB"
import { ClientContext } from "../../state/client"

/**
 * Application router component
 *
 * @returns {ReactElement}
 */
const AppRouter = (): ReactElement => {
	const { dispatch } = useContext(ClientContext)

	useEffect(() => {
		;(async function sync(): Promise<void> {
			await syncClientsWithDb(dispatch)
		})()
	}, [dispatch])

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
