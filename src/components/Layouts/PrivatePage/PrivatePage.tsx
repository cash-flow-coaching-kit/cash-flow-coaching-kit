import React, { ReactElement } from "react"
import { PrimaryNavbar, SecondaryNavbar } from "../../Navbar"
import { IPrivatePage } from "./_config/shape"

/**
 * Private page layout, renders the navigation and the children provided to it.
 *
 * @param {ReactNode} { children } Page content to render below the navigation
 * @returns {ReactElement}
 */
const PrivatePage = ({ children }: IPrivatePage): ReactElement => {
	return (
		<>
			<PrimaryNavbar />
			<SecondaryNavbar />

			<div className="private-page">{children}</div>
		</>
	)
}

export default PrivatePage
