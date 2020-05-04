import React, { ReactElement } from "react"
import { Box, CircularProgress } from "@material-ui/core"
import useLoadingStyles from "./_config/styles"

/**
 * Loading component
 *
 * @returns ReactElement
 */
const Loading = (): ReactElement => {
	const styles = useLoadingStyles()

	return (
		<Box className={styles.root}>
			<CircularProgress />
		</Box>
	)
}

export default Loading
