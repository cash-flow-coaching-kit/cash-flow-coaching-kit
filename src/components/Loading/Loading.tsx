import React, { ReactElement } from "react"
import { Box, CircularProgress, makeStyles } from "@material-ui/core"

const useLoadingStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
	},
}))

const Loading = (): ReactElement => {
	const styles = useLoadingStyles()

	return (
		<Box className={styles.root}>
			<CircularProgress />
		</Box>
	)
}

export default Loading
