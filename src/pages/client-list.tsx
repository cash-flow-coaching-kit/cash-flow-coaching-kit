import React, { ReactElement } from "react"
import { Link } from "react-router-dom"
import { PublicRoutes } from "../util/routes/routes"
import { PrivatePage } from "../components/Layouts"
import PageTip from "../components/PageTip"

const ClientList = (): ReactElement => {
	return (
		<PrivatePage>
			<h1>ClientList</h1>
			<Link to={PublicRoutes.Home}>Back home</Link>

			<PageTip tip="ClientListTips" />
		</PrivatePage>
	)
}

export default ClientList
