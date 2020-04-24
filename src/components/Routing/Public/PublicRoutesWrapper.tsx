import React, { ReactElement } from "react"
import { Route } from "react-router-dom"
import { PublicRoutes } from "../../../util/routes/routes"
import Homepage from "../../../pages"

const PublicRoutesWrapper = (): ReactElement => (
	<>
		<Route exact path={PublicRoutes.Home}>
			<Homepage />
		</Route>
	</>
)

export default PublicRoutesWrapper
