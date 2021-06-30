import React, { ReactElement, useState, useEffect, useCallback } from "react"
import { Typography } from "@material-ui/core"
import { formatDistance } from "date-fns"

/**
 * Last Saved component props
 *
 * @interface LastSavedProps
 */
interface LastSavedProps {
	date: Date
}

/**
 * Displays a message for how long ago the data was saved
 *
 * @export
 * @param {LastSavedProps} { date }
 * @returns {ReactElement}
 */
export default function LastSaved({ date }: LastSavedProps): ReactElement {
	const getFormattedText = useCallback(
		(): string =>
			formatDistance(date, new Date(), {
				addSuffix: true,
				includeSeconds: true,
			}),
		[date]
	)

	const [msg, setMsg] = useState(getFormattedText())

	useEffect(() => {
		const id = setInterval(() => {
			setMsg(getFormattedText())
		}, 1000)

		return (): void => clearInterval(id)
	}, [getFormattedText])

	return (
		<Typography variant="overline" color="textSecondary">
			Last saved {msg}
		</Typography>
	)
}
