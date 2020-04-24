import React, { ReactElement } from "react"
import { Link } from "react-router-dom"
import { PrivateRoutes } from "../util/routes/routes"

const Homepage = (): ReactElement => {
	return (
		<>
			<h1>Homepage</h1>
			<Link to={PrivateRoutes.ClientList}>Client List</Link>
		</>
	)
}

export default Homepage
