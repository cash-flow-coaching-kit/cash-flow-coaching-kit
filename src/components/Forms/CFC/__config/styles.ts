import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	box: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItems: "flex-start",
		},
	},
	saveButton: {
		[theme.breakpoints.up("md")]: {
			marginLeft: theme.spacing(1),
		},
	},
}))

export default useStyles
