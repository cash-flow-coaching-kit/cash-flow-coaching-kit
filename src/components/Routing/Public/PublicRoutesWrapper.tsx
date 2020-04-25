import React, { ReactElement } from "react"
import { Route } from "react-router-dom"
import { PublicRoutes } from "../../../util/routes/routes"
import Homepage from "../../../pages"

/**
 * Public route definitions, these pages should be available
 * without the user entering a client
 *
 * @returns {ReactElement}
 */
const PublicRoutesWrapper = (): ReactElement => (
	<>
		<Route exact path={PublicRoutes.Home}>
			<Homepage />
		</Route>
	</>
)

export default PublicRoutesWrapper
