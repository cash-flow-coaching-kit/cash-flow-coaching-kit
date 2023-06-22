import React, { ReactElement } from "react"
import { AppBar, Box, Toolbar } from "@material-ui/core"
import ReactGA from "react-ga4"
import { useSharedNavStyles } from "../_config/style"
import { NavigationRoutes } from "../_partials"
import { routes } from "./_config/data"
import { IPublicNavbarProps } from "./_config/shape"
import { PublicRoutes } from "../../../util/routes/routes"
import Logo from "../../Logo"
import Help from "../_partials/Help"

const uploadConfig = {
	mac: "Cash Flow Coaching Kit.dmg",
	win: "Cash Flow Coaching Kit.exe",
}

const trackingId = process.env.REACT_APP_GA_ID || ""
ReactGA.initialize(trackingId)

// Set flag for web or desktop mode
const userAgent = navigator.userAgent.toLowerCase()
const isDesktop = userAgent.indexOf(" electron/") > -1

/**
 * Renders the primary navigation
 *
 * @returns {ReactElement}
 */
const PublicNavbar = ({ hasClients }: IPublicNavbarProps): ReactElement => {
	const sharedStyle = useSharedNavStyles()
	const isMac = navigator.platform.indexOf("Mac") > -1
	const isWin = navigator.platform.indexOf("Win") > -1

	const desktopDownload = (type: string) => {
		const macLink = `https://${process.env.REACT_APP_AWS_CONTENT_DELIVERY_URL}/mac/${uploadConfig.mac}`
		const winLink = `https://${process.env.REACT_APP_AWS_CONTENT_DELIVERY_URL}/win/${uploadConfig.win}`

		return type === "mac" ? macLink : winLink
	}

	const triggerGATracking = (type: string) => () => {
		ReactGA.event({
			category: `Download Desktop ( , ${type}  )`,
			action: `User downloaded desktop app for - ,${type}`,
			label: "Download desktop app",
		})
	}

	return (
		<div className={sharedStyle.root}>
			<AppBar position="static">
				<Toolbar>
					<Box className={`${sharedStyle.logoBox} ${sharedStyle.publicLogo}`}>
						<Logo to={PublicRoutes.Home} />
					</Box>
					{/* Only show download on web and show both download options if it doesn't match either */}
					{!isDesktop && (
						<>
							{!isWin && (
								<Box>
									<form
										method="get"
										action={desktopDownload("mac")}
										target="_blank"
									>
										<button
											type="submit"
											onClick={triggerGATracking("mac")}
											className="download-link"
											title="Download free desktop application - available for Windows or Mac"
										>
											Download free desktop app for Mac
										</button>
									</form>
								</Box>
							)}
							{!isMac && (
								<Box>
									<form
										method="get"
										action={desktopDownload("win")}
										target="_blank"
									>
										<button
											type="submit"
											onClick={triggerGATracking("win")}
											className="download-link"
											title="Download free desktop application - available for Windows or Mac"
										>
											Download free desktop app for Windows
										</button>
									</form>
								</Box>
							)}
						</>
					)}

					<Box>
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
						<Help />
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default PublicNavbar
