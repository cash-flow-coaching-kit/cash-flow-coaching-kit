import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { PrivateRoutes, routeVarReplacement } from "../../util/routes/routes"

/**
 * Message to display when there are not enough canvases
 *
 * @export
 * @returns {ReactElement}
 */
export default function NotEnoughCanvases(): ReactElement {
	return (
		<>
			<Typography variant="h6">
				You don&apos;t have enough canvases created
			</Typography>
			<Typography>
				To continue, you&apos;ll need at least 2 canvases created. <br /> Check
				that you have the correct{" "}
				<Link to={PrivateRoutes.ClientList}>client selected</Link> or{" "}
				<Link to={routeVarReplacement(PrivateRoutes.CFC, [[":id?", ""]])}>
					start a new canvas
				</Link>
				.
			</Typography>
		</>
	)
}
