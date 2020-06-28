import React, { ReactElement } from "react"
import { AppBar, Box, Toolbar } from "@material-ui/core"
import { useSharedNavStyles } from "../_config/style"
import { NavigationRoutes } from "../_partials"
import { routes } from "./_config/data"
import { IPublicNavbarProps } from "./_config/shape"
import { PublicRoutes } from "../../../util/routes/routes"
import Logo from "../../Logo"
import Help from "../_partials/Help"

/**
 * Renders the primary navigation
 *
 * @returns {ReactElement}
 */
const PublicNavbar = ({ hasClients }: IPublicNavbarProps): ReactElement => {
	const sharedStyle = useSharedNavStyles()

	return (
		<div className={sharedStyle.root}>
			<AppBar position="static">
				<Toolbar>
					<Box className={`${sharedStyle.logoBox} ${sharedStyle.publicLogo}`}>
						<Logo to={PublicRoutes.Home} />
					</Box>
					<Box className={sharedStyle.box}>
						{/* Show the client list button if the user has clients */}
						{hasClients ? (
							<NavigationRoutes
								routes={routes}
								color="inherit"
								className={sharedStyle.button}
							/>
						) : (
							false
						)}
						<Help />
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default PublicNavbar
