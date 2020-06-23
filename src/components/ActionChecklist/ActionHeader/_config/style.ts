import { makeStyles } from "@material-ui/core"

// Styles definition for the Action Header components
const useActionHeaderStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(2),
	},
	box: {
		flexGrow: 2,
		display: "flex",
		justifyContent: "flex-end",
	},
}))

export default useActionHeaderStyles
