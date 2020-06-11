import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import {
	SvgIconTypeMap,
	StandardProps,
	ButtonProps,
	ButtonClassKey,
	Link,
	LinkProps,
} from "@material-ui/core"
import { PrivateRoutes, PublicRoutes } from "../../../util/routes/routes"

/**
 * Navigation Route objects for rendering
 *
 * @export
 * @interface INavRoutes
 */
export interface INavRoutes {
	route: PrivateRoutes | PublicRoutes | string
	title: string
	Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
	children?: INavRoutes[]
	subMenuTitle?: string
}

export type ExtendsButton = StandardProps<
	ButtonProps<typeof Link, LinkProps>,
	ButtonClassKey
>

/**
 * Navigation Routes component props, extends the default <Button> props
 *
 * @interface INavigationRoutesProps
 * @see https://github.com/mui-org/material-ui/issues/15827#issuecomment-506807829
 * @extends {StandardProps<ButtonProps<typeof Link, LinkProps>, ButtonClassKey>}
 */
export interface INavigationRoutesProps extends ExtendsButton {
	routes: INavRoutes[]
}
