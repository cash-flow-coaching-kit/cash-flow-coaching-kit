import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	compareLabel: {
		display: "flex",
		alignItems: "center",
	},
	compareTooltip: {
		marginLeft: theme.spacing(1),
	},
}))

export default useStyles
