import React, { ReactElement } from "react"
import { useLocation, RouteProps } from "react-router-dom"
import { PrimaryNavbar, SecondaryNavbar } from "../../Navbar"
import { IPrivatePage } from "./_config/shape"
import checkIfPublic from "../../../util/routes/checkIfPublic"

/**
 * Private page layout, renders the navigation and the children provided to it.
 *
 * @param {ReactNode} { children } Page content to render below the navigation
 * @returns {ReactElement}
 */
const PrivatePage = ({ children }: IPrivatePage): ReactElement => {
	const location: RouteProps["location"] = useLocation()

	return (
		<>
			{!checkIfPublic(location) && (
				<>
					<PrimaryNavbar />
					<SecondaryNavbar />

					<div className="private-page">{children}</div>
				</>
			)}
		</>
	)
}

export default PrivatePage
