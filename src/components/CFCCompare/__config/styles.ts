import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	compareLabel: {
		display: "flex",
		alignItems: "center",
	},
	compareTooltip: {
		marginLeft: theme.spacing(1),
	},
	cell1: {
		width: "20%",
	},
	cellCanvas: {
		width: "25%",
	},
	cellDifference: {
		width: "15%",
	},
}))

export default useStyles
