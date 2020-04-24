import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
	toolbar: {
		display: "flex",
		flexGrow: 2,
		justifyContent: "flex-end",
	},
	button: {
		textTransform: "capitalize",
	},
}))

export default useStyles
