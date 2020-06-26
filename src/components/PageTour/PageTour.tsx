import React, { ReactElement, useState, useEffect } from "react"
import Tour, { ReactourStep } from "reactour"
import { Button } from "@material-ui/core"
import { useLocation, useParams } from "react-router-dom"
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from "body-scroll-lock"
import hasProperty from "../../util/object/hasProperty"

type PageTourProps = {
	steps: ReactourStep[]
}

const LSKey = "react-tour-completed"

/**
 * Page tour component. Used to show highlighted areas with descriptive content
 *
 * @export
 * @param {PageTourProps} { steps }
 * @returns {ReactElement}
 */
export default function PageTour({ steps }: PageTourProps): ReactElement {
	const location = useLocation()
	const params = useParams()

	const disableBody = (target: any): void => disableBodyScroll(target)
	const enableBody = (target: any): void => enableBodyScroll(target)

	useEffect(() => {
		return (): void => clearAllBodyScrollLocks()
	}, [])

	/**
	 * Strips off the beginning and ending "/"
	 *
	 * @returns {string}
	 */
	const stripPathname = (): string => location.pathname.replace(/^\/|\/$/g, "")

	/**
	 * Gets the key of the current route
	 *
	 * @returns {string}
	 */
	const getRouteValue = (): string => {
		const re = /\/[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi
		const path = stripPathname()

		if (Object.keys(params).length > 0 && path.match(re)) {
			return path.replace(re, "/:id")
		}

		return path
	}

	/**
	 * Checks if the tour should be open by default
	 *
	 * @returns {boolean}
	 */
	const shouldBeOpen = (): boolean => {
		const ls = window.localStorage.getItem(LSKey)
		if (!ls) return true

		const json = JSON.parse(ls)
		return !hasProperty(json, getRouteValue())
	}

	const [open, setOpen] = useState(shouldBeOpen())

	/**
	 * Sets the localstorage value for the tour key
	 *
	 * @param json
	 */
	const setLSValue = (json: {}): void => {
		window.localStorage.setItem(LSKey, JSON.stringify(json))
	}

	/**
	 * Closes the tour and sets the value to not open on return
	 *
	 */
	const closeTour = (): void => {
		const ls = window.localStorage.getItem(LSKey)
		const json = !ls ? {} : JSON.parse(ls)
		setLSValue({
			...json,
			[getRouteValue()]: true,
		})
		setOpen(false)
	}

	/**
	 * Opens the tour component
	 */
	const openTour = (): void => setOpen(true)

	return (
		<>
			<div className="sr-only">
				<Button onClick={openTour} id="start-a-tour">
					Start tour
				</Button>
			</div>
			<Tour
				steps={steps}
				isOpen={open}
				onRequestClose={closeTour}
				onAfterOpen={disableBody}
				onBeforeClose={enableBody}
				startAt={0}
			/>
		</>
	)
}
