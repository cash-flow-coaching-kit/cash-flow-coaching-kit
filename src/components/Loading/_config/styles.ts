import { makeStyles } from "@material-ui/core"

// Loading styles
const useLoadingStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
	},
}))

export default useLoadingStyles
