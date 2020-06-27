import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import {
	PrivateRoutes,
	routeVarReplacement,
} from "../../../../util/routes/routes"

/**
 * Message to display when a invaild health check is being viewed
 *
 * @returns ReactElement
 */
const InvalidHC = (): ReactElement => (
	<>
		<Typography>
			The requested Health check does not exist. Please select another Health
			check from the{" "}
			<Link to={PrivateRoutes.HealthCheckList}>listing page</Link> or{" "}
			<Link
				to={routeVarReplacement(PrivateRoutes.HealthCheckQuiz, [[":id?", ""]])}
			>
				start a new Health Check
			</Link>
			.
		</Typography>
	</>
)

export default InvalidHC
