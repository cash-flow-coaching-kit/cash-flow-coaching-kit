import React, { ReactElement } from "react"
import { CardContent, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import {
	PrivateRoutes,
	routeVarReplacement,
} from "../../../../util/routes/routes"

/**
 * Message displayed when a client has no completed quizzes
 *
 * @returns ReactElement
 */
const EmptyListing = (): ReactElement => (
	<CardContent>
		<Typography variant="h6">No Health Checks have been found</Typography>
		<Typography>
			Check that you have the correct{" "}
			<Link to={PrivateRoutes.ClientList}>client selected</Link> or{" "}
			<Link
				to={routeVarReplacement(PrivateRoutes.HealthCheckQuiz, [[":id?", ""]])}
			>
				start a new Health Check
			</Link>
			.
		</Typography>
	</CardContent>
)

export default EmptyListing
