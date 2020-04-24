import React, { ReactElement } from "react"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
import { useSharedNavStyles } from "../shared/style"
import routes, { PrimaryNavRoutes } from "./config"

const PrimaryNavbar = (): ReactElement => {
	const sharedStyle = useSharedNavStyles()

	return (
		<div className={sharedStyle.root}>
			<AppBar position="static" color="default">
				<Toolbar>
					<Box className={sharedStyle.box}>
						{routes.map(
							({ route, title, Icon }: PrimaryNavRoutes): ReactElement => (
								<Button
									className={sharedStyle.button}
									color="inherit"
									startIcon={Icon ? <Icon /> : null}
								>
									{title}
								</Button>
							)
						)}

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
