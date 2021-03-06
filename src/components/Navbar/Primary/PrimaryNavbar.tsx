import React, { ReactElement } from "react"
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core"
import { useSharedNavStyles } from "../_config/style"
import { NavigationRoutes } from "../_partials"
import usePrimaryStyles from "./_config/styles"
import { routes } from "./_config/data"
import Logo from "../../Logo"
import { PublicRoutes } from "../../../util/routes/routes"
import useCurrentClient from "../../../state/client/useCurrentClient"
import Logout from "../../Logout"
import Help from "../_partials/Help"

/**
 * Renders the primary navigation
 *
 * @returns {ReactElement}
 */
const PrimaryNavbar = (): ReactElement => {
	const sharedStyle = useSharedNavStyles()
	const styles = usePrimaryStyles()
	const [currentClient] = useCurrentClient()

	return (
		<div className={sharedStyle.root}>
			<AppBar position="static" color="default">
				<Toolbar>
					<Grid container spacing={2}>
						{currentClient ? (
							<Grid item sm={2} md={2} lg={4} className={styles.clientGridItem}>
								<Typography className={styles.clientCaption} variant="caption">
									Client
								</Typography>
								<Typography
									className={`${styles.clientName} truncate`}
									variant="h6"
									component="p"
								>
									<span>{currentClient.name}</span>
								</Typography>
							</Grid>
						) : (
							<Grid item md={2} lg={4} />
						)}
						<Grid
							item
							sm={5}
							md={5}
							lg={4}
							className={`${sharedStyle.logoBox}`}
						>
							<Logo to={PublicRoutes.Home} />
						</Grid>
						<Grid
							item
							sm={5}
							md={5}
							lg={4}
							className={`${sharedStyle.box} ${sharedStyle.small}`}
						>
							<NavigationRoutes
								routes={routes}
								color="inherit"
								className={sharedStyle.button}
							/>

							<Help />
							<Logout />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default PrimaryNavbar
