import React, { ReactNode, ReactElement } from "react"
import { PrimaryNavbar, SecondaryNavbar } from "../../Navbar"

interface IPrivatePage {
	children: ReactNode
}

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
