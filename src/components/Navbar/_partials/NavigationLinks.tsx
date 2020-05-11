import React, { ReactElement, useState } from "react"
import { Button } from "@material-ui/core"
import { Link as RouterLink } from "react-router-dom"
import { generateKey, constructKey } from "../../../util/lists/key"
import { INavigationRoutesProps, INavRoutes } from "../_config/shape"

/**
 * Renders a list of buttons that links to a internal page
 *
 * @param {INavRoutes[]} { routes } Links to render
 * @param {StandardProps<ButtonProps<typeof Link, LinkProps>, ButtonClassKey>} { ...buttonProps } Button props to apply to each button
 */
const NavigationRoutes = ({
	routes,
	...buttonProps
}: INavigationRoutesProps): ReactElement => {
	const [key] = useState(generateKey())

	return (
		<>
			{routes.map(
				({ route, title, Icon }: INavRoutes, idx: number): ReactElement => (
					<Button
						startIcon={Icon ? <Icon /> : null}
						component={RouterLink}
						to={route}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...buttonProps}
						key={constructKey(key, idx)}
					>
						{title}
					</Button>
				)
			)}
		</>
	)
}

export default NavigationRoutes
