import React, { ReactElement, useState, Fragment, useEffect } from "react"
import {
	AppBar,
	Toolbar,
	IconButton,
	Drawer,
	makeStyles,
	List,
	ListItem,
	ListItemText,
	Divider,
	ListItemIcon,
	Box,
	Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { NavLink, useLocation } from "react-router-dom"
import Logo from "../../Logo"
import { PublicRoutes } from "../../../util/routes/routes"
import { routes as secondaryRoutes } from "../Secondary/_config/data"
import { routes as primaryRoutes } from "../Primary/_config/data"
import { INavRoutes } from "../_config/shape"
import useCurrentClient from "../../../state/client/useCurrentClient"
import usePrimaryStyles from "../Primary/_config/styles"
import ShowMeHow from "../../ShowMeHow"
import Logout from "../../Logout"
import Spacer from "../../Spacer"

const useStyles = makeStyles((theme) => ({
	drawer: {
		maxWidth: "300px",
		width: "100%",
	},
	toolbar: {
		maxWidth: "100%",
		overflow: "hidden",
	},
	logo: {
		"& h6": {
			color: "white",
		},
	},
	divider: {
		margin: `0 ${theme.spacing(2)}px 0 ${theme.spacing(1)}px`,
	},
	clientBox: {
		flexGrow: 2,
		minWidth: 0,
	},
	childList: {
		marginLeft: theme.spacing(3),
		marginBottom: theme.spacing(1),
		paddingTop: 0,
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	item: {
		color: "inherit",
		"&.active": {
			fontWeight: theme.typography.fontWeightBold,
			"& *": {
				fontWeight: "inherit",
			},
		},
	},
}))

/**
 * Renders the mobile navigation for the Private side of the app
 *
 * @export
 * @returns {ReactElement}
 */
export default function MobileNavbar(): ReactElement {
	const [currentClient] = useCurrentClient()
	const [open, setOpen] = useState(false)
	const cls = useStyles()
	const primaryStyle = usePrimaryStyles()
	const location = useLocation()

	const openDrawer = (): void => setOpen(true)
	const closeDrawer = (): void => setOpen(false)

	useEffect(() => {
		closeDrawer()
	}, [location.pathname])

	const renderRoutes = (route: INavRoutes): ReactElement => {
		return (
			<Fragment key={route.route}>
				<ListItem component={NavLink} to={route.route} className={cls.item}>
					{route.Icon && (
						<ListItemIcon>
							<route.Icon />
						</ListItemIcon>
					)}
					<ListItemText primary={route.title} />
				</ListItem>

				{route.children ? (
					<>
						<List className={cls.childList}>
							{route.children.map(renderRoutes)}
						</List>
					</>
				) : (
					<></>
				)}
			</Fragment>
		)
	}

	return (
		<>
			<AppBar position="static">
				<Toolbar className={cls.toolbar}>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={openDrawer}
					>
						<MenuIcon />
					</IconButton>
					<Box className={cls.logo}>
						<Logo to={PublicRoutes.Home} />
					</Box>
					<Divider orientation="vertical" flexItem className={cls.divider} />
					<Box className={cls.clientBox}>
						{currentClient && (
							<>
								<Typography
									className={primaryStyle.clientCaption}
									variant="caption"
								>
									Client
								</Typography>
								<Typography
									className={`${primaryStyle.clientName} truncate`}
									variant="h6"
								>
									<span>{currentClient?.name || ""}</span>
								</Typography>
							</>
						)}
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				anchor="left"
				open={open}
				onClose={closeDrawer}
				classes={{ paper: cls.drawer }}
			>
				<List component="div" className="MuiListItem-gutters">
					<ShowMeHow triggerCallback={closeDrawer} />
				</List>
				<Divider />
				<List>{secondaryRoutes.map(renderRoutes)}</List>
				<Divider />
				<List>{primaryRoutes.map(renderRoutes)}</List>
				<Divider />
				<Spacer />
				<Box style={{ padding: "0 16px" }}>
					<Logout color="primary" variant="contained" />
				</Box>
			</Drawer>
		</>
	)
}
