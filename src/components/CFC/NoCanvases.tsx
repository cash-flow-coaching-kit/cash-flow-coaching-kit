import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { PrivateRoutes, routeVarReplacement } from "../../util/routes/routes"

/**
 * No canvas data message
 *
 * @export
 * @returns {ReactElement}
 */
export default function NoCanvases(): ReactElement {
	return (
		<>
			<Typography variant="h6">No canvas data found</Typography>
			<Typography>
				Check that you have the correct{" "}
				<Link to={PrivateRoutes.ClientList}>client selected</Link> or{" "}
				<Link to={routeVarReplacement(PrivateRoutes.CFC, [[":id?", ""]])}>
					start a new canvas
				</Link>
				.
			</Typography>
		</>
	)
}
