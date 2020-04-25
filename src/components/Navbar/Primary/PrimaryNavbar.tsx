import React, { ReactElement } from "react"
import { AppBar, Box, Toolbar, Button } from "@material-ui/core"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { useSharedNavStyles } from "../shared/style"
import routes from "./config"
import { NavigationRoutes } from "../shared/NavigationLinks"

/**
 * Renders the primary navigation
 *
 * @returns {ReactElement}
 */
const PrimaryNavbar = (): ReactElement => {
	const sharedStyle = useSharedNavStyles()

	return (
		<div className={sharedStyle.root}>
			<AppBar position="static" color="default">
				<Toolbar>
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
