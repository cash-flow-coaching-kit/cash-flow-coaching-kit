import React, { ReactElement, useContext, useMemo } from "react"
import { AppBar, Box, Toolbar } from "@material-ui/core"
import { useSharedNavStyles } from "../_config/style"
import { NavigationRoutes } from "../_partials"
import { routes } from "./_config/data"
import ShowMeHow from "../../ShowMeHow"
import { ClientContext } from "../../../state/client"
import { INavRoutes } from "../_config/shape"
import { routeVarReplacement, PrivateRoutes } from "../../../util/routes/routes"

/**
 * Renders the secondary navigation
 *
 * @returns {ReactElement}
 */
const SecondaryNavbar = (): ReactElement => {
	const sharedStyle = useSharedNavStyles()
	const {
		state: { lastViewedHC },
	} = useContext(ClientContext)
	const navRoutes = useMemo(
		(): INavRoutes[] =>
			routes.map((route) => {
				if (route.title === "Health Check") {
					return {
						title: route.title,
						route:
							lastViewedHC !== null
								? routeVarReplacement(PrivateRoutes.HealthCheckSummary, [
										[":id", `${lastViewedHC}`],
								  ])
								: route.route,
					}
				}
				return route
			}),
		[lastViewedHC]
	)

	return (
		<div className={sharedStyle.root}>
			<AppBar position="static">
				<Toolbar>
					<ShowMeHow />

					<Box className={sharedStyle.box}>
						<NavigationRoutes
							routes={navRoutes}
							color="inherit"
							className={sharedStyle.button}
						/>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default SecondaryNavbar
