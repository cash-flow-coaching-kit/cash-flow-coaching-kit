import React, { ReactElement, useState } from "react"
import { Button, Menu, MenuItem, Divider, useTheme } from "@material-ui/core"
import { NavLink as RouterLink } from "react-router-dom"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import { generateKey, constructKey } from "../../../util/lists/key"
import {
	INavigationRoutesProps,
	INavRoutes,
	ExtendsButton,
} from "../_config/shape"

interface RWCProps extends ExtendsButton {
	route: INavRoutes
	childRoutes: INavRoutes[]
}

/**
 * Renders a button with a menu for the child menu items
 *
 * @param {RWCProps} {
 * 	route,
 * 	childRoutes,
 * 	// eslint-disable-next-line
 * 	...buttonProps
 * }
 * @returns {ReactElement}
 * @see https://material-ui.com/components/menus/#simple-menu
 */
function RouteWithChildren({
	route,
	childRoutes,
	// eslint-disable-next-line
	...buttonProps
}: RWCProps): ReactElement {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
		event.preventDefault()
		setAnchorEl(event.currentTarget)
	}

	const handleClose = (): void => {
		setAnchorEl(null)
	}

	return (
		<>
			<Button
				aria-controls={route.route}
				aria-haspopup="true"
				component={RouterLink}
				to={route.route}
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...buttonProps}
			>
				{route.title}
			</Button>
			<Menu
				id={route.route}
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem component={RouterLink} to={route.route} onClick={handleClose}>
					{route.subMenuTitle || route.title}
				</MenuItem>
				<Divider />
				{childRoutes.map((child) => (
					<MenuItem
						component={RouterLink}
						to={child.route}
						key={`${route.title}-child--${child.route}`}
						onClick={handleClose}
					>
						{child.title}
					</MenuItem>
				))}
			</Menu>
		</>
	)
}

/**
 * Renders a list of buttons that links to a internal page
 *
 * @param {INavRoutes[]} { routes } Links to render
 * @param {StandardProps<ButtonProps<typeof Link, LinkProps>, ButtonClassKey>} { ...buttonProps } Button props to apply to each button
 */
const NavigationRoutes = ({
	routes,
	// eslint-disable-next-line
	...buttonProps
}: INavigationRoutesProps): ReactElement => {
	const [key] = useState(generateKey())
	const theme = useTheme()

	return (
		<>
			{routes.map(
				(route: INavRoutes, idx: number): ReactElement => {
					if (route.children) {
						return (
							<RouteWithChildren
								route={route}
								childRoutes={route.children}
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...buttonProps}
								key={constructKey(key, idx)}
							/>
						)
					}

					return (
						<Button
							startIcon={route.Icon ? <route.Icon /> : null}
							component={RouterLink}
							activeStyle={{
								fontWeight: theme.typography.fontWeightBold,
							}}
							to={route.route}
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...buttonProps}
							key={constructKey(key, idx)}
						>
							{route.title}
						</Button>
					)
				}
			)}
		</>
	)
}

export default NavigationRoutes
