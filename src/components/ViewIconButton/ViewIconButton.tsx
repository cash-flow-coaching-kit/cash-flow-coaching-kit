import React, { ReactElement } from "react"
import VisibilityIcon from "@material-ui/icons/Visibility"
import { Tooltip, IconButton } from "@material-ui/core"
import { Link } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "../../util/routes/routes"

type Props = {
	goTo: string | PrivateRoutes | PublicRoutes
}

/**
 * Icon Button used to go to a page
 *
 * @export
 * @param {Props} { goTo }
 * @returns {ReactElement}
 */
export default function ViewIconButton({ goTo }: Props): ReactElement {
	return (
		<Tooltip title="View">
			<IconButton component={Link} to={goTo}>
				<VisibilityIcon />
			</IconButton>
		</Tooltip>
	)
}
