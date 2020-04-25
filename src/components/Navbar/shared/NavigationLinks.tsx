import React, { ReactElement } from "react"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import {
	SvgIconTypeMap,
	Button,
	ButtonProps,
	StandardProps,
	ButtonClassKey,
	Link,
	LinkProps,
} from "@material-ui/core"
import { Link as RouterLink } from "react-router-dom"
import { PublicRoutes, PrivateRoutes } from "../../../util/routes/routes"

/**
 * Navigation Route objects for rendering
 *
 * @export
 * @interface INavRoutes
 */
export interface INavRoutes {
	route: PrivateRoutes | PublicRoutes
	title: string
	Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

/**
 * Navigation Routes component props, extends the default <Button> props
 *
 * @interface INavigationRoutesProps
 * @see https://github.com/mui-org/material-ui/issues/15827#issuecomment-506807829
 * @extends {StandardProps<ButtonProps<typeof Link, LinkProps>, ButtonClassKey>}
 */
interface INavigationRoutesProps
	extends StandardProps<ButtonProps<typeof Link, LinkProps>, ButtonClassKey> {
	routes: INavRoutes[]
}

/**
 * Renders a list of buttons that links to a internal page
 *
 * @param {INavRoutes[]} { routes } Links to render
 * @param {StandardProps<ButtonProps<typeof Link, LinkProps>, ButtonClassKey>} { ...buttonProps } Button props to apply to each button
 */
export const NavigationRoutes = ({
	routes,
	...buttonProps
}: INavigationRoutesProps): ReactElement => {
	return (
		<>
			{routes.map(
				({ route, title, Icon }: INavRoutes): ReactElement => (
					<Button
						startIcon={Icon ? <Icon /> : null}
						component={RouterLink}
						to={route}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...buttonProps}
					>
						{title}
					</Button>
				)
			)}
		</>
	)
}
