import React, { ReactElement, useEffect } from "react"
import { useLocation, RouteProps, useHistory } from "react-router-dom"
import { makeStyles, Box } from "@material-ui/core"
import { PrimaryNavbar, SecondaryNavbar } from "../../Navbar"
import { IPrivatePage } from "./_config/shape"
import checkIfPublic from "../../../util/routes/checkIfPublic"
import MobileNavbar from "../../Navbar/Mobile"
import useCurrentClient from "../../../state/client/useCurrentClient"
import { PrivateRoutes, PublicRoutes } from "../../../util/routes/routes"
import GenericPage from "../GenericPage"

const useStyles = makeStyles((theme) => ({
	desktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "block",
		},
	},
	mobile: {
		display: "block",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}))

/**
 * Private page layout, renders the navigation and the children provided to it.
 *
 * @param {ReactNode} { children } Page content to render below the navigation
 * @returns {ReactElement}
 */
const PrivatePage = ({ children }: IPrivatePage): ReactElement => {
	const location: RouteProps["location"] = useLocation()
	const styles = useStyles()
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
		<GenericPage>
			{!checkIfPublic(location) && (
				<>
					<Box className={styles.desktop}>
						<PrimaryNavbar />
						<SecondaryNavbar />
					</Box>
					<Box className={styles.mobile}>
						<MobileNavbar />
					</Box>

					<div className="private-page">{children}</div>
				</>
			)}
		</GenericPage>
	)
}

export default PrivatePage
