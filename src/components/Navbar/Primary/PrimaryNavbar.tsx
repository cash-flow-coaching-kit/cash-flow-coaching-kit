import React, { ReactElement, useContext } from "react"
import { AppBar, Toolbar, Button, Typography, Grid } from "@material-ui/core"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { useSharedNavStyles } from "../_config/style"
import { NavigationRoutes } from "../_partials"
import { ClientContext } from "../../../state/client"
import usePrimaryStyles from "./_config/styles"
import { routes } from "./_config/data"
import Logo from "../../Logo"
import { PrivateRoutes } from "../../../util/routes/routes"

/**
 * Renders the primary navigation
 *
 * @returns {ReactElement}
 */
const PrimaryNavbar = (): ReactElement => {
	const sharedStyle = useSharedNavStyles()
	const styles = usePrimaryStyles()
	const {
		state: { currentClient },
	} = useContext(ClientContext)

	return (
		<div className={sharedStyle.root}>
			<AppBar position="static" color="default">
				<Toolbar>
					<Grid container spacing={2}>
						{currentClient ? (
							<Grid item sm={4} className="">
								<Typography className={styles.clientCaption} variant="caption">
									Client
								</Typography>
								<Typography className={styles.clientName} variant="h6">
									{currentClient.name}
								</Typography>
							</Grid>
						) : (
							<Grid item sm={4} />
						)}
						<Grid item sm={4} className={`${sharedStyle.logoBox}`}>
							<Logo to={PrivateRoutes.CoachingKit} />
						</Grid>
						<Grid
							item
							sm={4}
							className={`${sharedStyle.box} ${sharedStyle.small}`}
						>
							<NavigationRoutes
								routes={routes}
								color="inherit"
								className={sharedStyle.button}
							/>

							{/* TODO: Pull into a separate component to add modal trigger and content */}
							<Button
								className={sharedStyle.button}
								color="inherit"
								startIcon={<HelpOutlineIcon />}
							>
								Help
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default PrimaryNavbar
