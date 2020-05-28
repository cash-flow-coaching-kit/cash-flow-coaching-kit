import React, { ReactElement } from "react"
import { Box, useTheme } from "@material-ui/core"

type SpacerProps = {
	space?: number
}

/**
 * Component used to add some additional spacing between components
 *
 * @export
 * @param {SpacerProps} { space = 2 }
 * @returns {ReactElement}
 */
export default function Spacer({ space = 2 }: SpacerProps): ReactElement {
	const theme = useTheme()
	return <Box style={{ marginTop: theme.spacing(space) }} />
}
