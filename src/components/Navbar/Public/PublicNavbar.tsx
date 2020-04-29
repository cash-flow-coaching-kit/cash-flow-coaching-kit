import React, { ReactElement } from "react"
import { AppBar, Box, Toolbar, Button } from "@material-ui/core"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { useSharedNavStyles } from "../shared/style"
import { NavigationRoutes } from "../shared/NavigationLinks"
import routes from "./config"

interface IPublicNavbarProps {
	hasClients: boolean
}

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

export default PublicNavbar
