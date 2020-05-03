import React, { ReactElement, useContext } from "react"
import { AppBar, Box, Toolbar, Button, Typography } from "@material-ui/core"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { useSharedNavStyles } from "../_config/style"
import { NavigationRoutes } from "../_partials"
import { ClientContext } from "../../../state/client"
import usePrimaryStyles from "./_config/styles"
import { routes } from "./_config/data"

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
					{currentClient ? (
						<Box>
							<Typography className={styles.clientCaption} variant="caption">
								Client
							</Typography>
							<Typography className={styles.clientName} variant="h6">
								{currentClient.name}
							</Typography>
						</Box>
					) : (
						false
					)}
					<Box className={sharedStyle.box}>
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
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default PrimaryNavbar
