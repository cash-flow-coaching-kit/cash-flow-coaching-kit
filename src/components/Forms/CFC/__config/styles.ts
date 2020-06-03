import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	box: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	saveButton: {
		marginLeft: theme.spacing(1),
	},
}))

export default useStyles
