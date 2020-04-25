import React, { ReactElement } from "react"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import { useSharedNavStyles } from "../shared/style"
import { NavigationRoutes } from "../shared/NavigationLinks"
import routes from "./config"

const SecondaryNavbar = (): ReactElement => {
	const sharedStyle = useSharedNavStyles()

	return (
		<div className={sharedStyle.root}>
			<AppBar position="static">
				<Toolbar>
					<Button
						className={sharedStyle.button}
						color="inherit"
						variant="outlined"
					>
						Show me how
					</Button>
					<Box className={sharedStyle.box}>
						<NavigationRoutes
							routes={routes}
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
