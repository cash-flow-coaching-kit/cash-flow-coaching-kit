import React, { ReactElement, useState, useCallback, useEffect } from "react"
import { Button } from "@material-ui/core"
import { useLocation } from "react-router-dom"
import { defer } from "lodash-es"
import { useSharedNavStyles } from "../Navbar/_config/style"

/**
 * Show me how button
 *
 * @export
 * @returns {ReactElement}
 */
export default function ShowMeHow(): ReactElement {
	const sharedStyle = useSharedNavStyles()
	const location = useLocation()
	const [show, setShow] = useState(false)

	// Checks if a page has the start tour button and sets the show state
	// accordingly
	useEffect(() => {
		defer(() => {
			const elem = document.getElementById("start-a-tour")
			return setShow(Boolean(elem))
		})
	}, [location])

	// Triggers the start tour button
	const triggerTour = useCallback(() => {
		const elem = document.getElementById("start-a-tour")
		if (elem) {
			elem.click()
		}
	}, [])

	return show ? (
		<Button
			className={sharedStyle.button}
			color="inherit"
			variant="outlined"
			onClick={triggerTour}
		>
			Show me how
		</Button>
	) : (
		<></>
	)
}
