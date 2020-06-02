import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { PrivateRoutes } from "../../util/routes/routes"

/**
 * Component to show when no data can be found for a given canvas
 *
 * @export
 * @returns {ReactElement}
 */
export default function DataNotFound(): ReactElement {
	return (
		<>
			<Typography variant="h5">Canvas not found</Typography>
			<Typography>
				The requested canvas could not be found. Visit the{" "}
				<Link to={PrivateRoutes.CFCListing}>listing</Link> page or{" "}
				<Link to={PrivateRoutes.ClientList}>select a different client</Link>.
			</Typography>
		</>
	)
}
