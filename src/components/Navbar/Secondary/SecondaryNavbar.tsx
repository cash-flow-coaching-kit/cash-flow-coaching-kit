import React, { ReactElement } from "react"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import { useSharedNavStyles } from "../shared/style"

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
						<Button className={sharedStyle.button} color="inherit">
							Health Check
						</Button>
						<Button className={sharedStyle.button} color="inherit">
							Discover Topics
						</Button>
						<Button className={sharedStyle.button} color="inherit">
							Cash Flow Canvas
						</Button>
						<Button className={sharedStyle.button} color="inherit">
							Change Levers
						</Button>
						<Button className={sharedStyle.button} color="inherit">
							Action Checklist
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default SecondaryNavbar
