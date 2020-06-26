import React, { ReactElement, useEffect, useContext } from "react"
import { HashRouter as Router, Switch, useLocation } from "react-router-dom"
import PublicRoutesWrapper from "./Public"
import PrivateRoutesWrapper from "./Private"
import syncClientsWithDb from "../../data/client/syncWithDB"
import { ClientContext } from "../../state/client"

/**
 * Function to scroll to the top of the page on page change
 *
 * @see https://reacttraining.com/react-router/web/guides/scroll-restoration
 * @returns {null}
 */
function ScrollToTop(): null {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

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
			<ScrollToTop />
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
