import React, { ReactElement } from "react"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { useSharedNavStyles } from "../shared/style"
import routes from "./config"
import { NavigationRoutes } from "../shared/NavigationLinks"

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
