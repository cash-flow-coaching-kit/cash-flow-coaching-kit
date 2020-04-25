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

export interface INavRoutes {
	route: PrivateRoutes | PublicRoutes
	title: string
	Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

/**
 * @see https://github.com/mui-org/material-ui/issues/15827#issuecomment-506807829
 */
interface INavigationRoutesProps
	extends StandardProps<ButtonProps<typeof Link, LinkProps>, ButtonClassKey> {
	routes: INavRoutes[]
}

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
