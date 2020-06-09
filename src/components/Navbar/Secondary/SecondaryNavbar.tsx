import React, { ReactElement, useCallback } from "react"
import { AppBar, Box, Toolbar, Button } from "@material-ui/core"
import { useSharedNavStyles } from "../_config/style"
import { NavigationRoutes } from "../_partials"
import { routes } from "./_config/data"

/**
 * Renders the secondary navigation
 *
 * @returns {ReactElement}
 */
const SecondaryNavbar = (): ReactElement => {
	const sharedStyle = useSharedNavStyles()

	const triggerTour = useCallback(() => {
		const elem = document.getElementById("start-a-tour")
		if (elem) {
			elem.click()
		}
	}, [])

	return (
		<div className={sharedStyle.root}>
			<AppBar position="static">
				<Toolbar>
					<Button
						className={sharedStyle.button}
						color="inherit"
						variant="outlined"
						onClick={triggerTour}
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
