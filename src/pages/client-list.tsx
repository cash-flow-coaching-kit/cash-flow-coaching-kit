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

			<PageTip>
				<h6>Important</h6>
				<ul>
					<li>
						Clearing your browser history will erase all client data - ensure
						you export data regularly
					</li>
					<li>
						How you save client information will vary depending on your
						browser’s settings
					</li>
					<li>
						Check your browser download settings to learn how to save your
						client’s data effectively
					</li>
					<li>Review the privacy and data usage policy for more information</li>
				</ul>
			</PageTip>
		</PrivatePage>
	)
}

export default ClientList
