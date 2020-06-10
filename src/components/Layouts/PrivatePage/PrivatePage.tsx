import React, { ReactElement, useEffect } from "react"
import { useLocation, RouteProps, useHistory } from "react-router-dom"
import { PrimaryNavbar, SecondaryNavbar } from "../../Navbar"
import { IPrivatePage } from "./_config/shape"
import checkIfPublic from "../../../util/routes/checkIfPublic"
import useCurrentClient from "../../../state/client/useCurrentClient"
import { PrivateRoutes, PublicRoutes } from "../../../util/routes/routes"

/**
 * Private page layout, renders the navigation and the children provided to it.
 *
 * @param {ReactNode} { children } Page content to render below the navigation
 * @returns {ReactElement}
 */
const PrivatePage = ({ children }: IPrivatePage): ReactElement => {
	const location: RouteProps["location"] = useLocation()
	const history = useHistory()
	const [currentClient, clientSynced] = useCurrentClient()

	useEffect(() => {
		if (clientSynced) {
			if (!currentClient || !currentClient?.id) {
				const allowed = [
					PrivateRoutes.ClientList as string,
					PublicRoutes.Home as string,
				]
				if (allowed.indexOf(location.pathname) === -1) {
					// eslint-disable-next-line
					history.push(PublicRoutes.Home)
				}
			}
		}
	}, [clientSynced, currentClient, location, history])

	return (
		<>
			{!checkIfPublic(location) && (
				<>
					<PrimaryNavbar />
					<SecondaryNavbar />

					<div className="private-page">{children}</div>
				</>
			)}
		</>
	)
}

export default PrivatePage
