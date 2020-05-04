import React, { ReactElement } from "react"
import { CardContent, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import { PublicRoutes } from "../../../util/routes/routes"

const NoClients = (): ReactElement => {
	return (
		<CardContent>
			<Typography variant="h6">No clients found</Typography>
			<Typography>
				You are able to import previously exported clients or go{" "}
				<Link to={PublicRoutes.Home}>Home</Link> to read additional information
			</Typography>
		</CardContent>
	)
}

export default NoClients
