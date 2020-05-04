import { makeStyles } from "@material-ui/core"

const useActionHeaderStyles = makeStyles((theme) => ({
	appbar: {
		background: "white",
		marginBottom: theme.spacing(2),
		boxShadow: theme.shadows[1],
		borderRadius: theme.shape.borderRadius,
	},
	box: {
		flexGrow: 2,
		display: "flex",
		justifyContent: "flex-end",
	},
}))

export default useActionHeaderStyles
