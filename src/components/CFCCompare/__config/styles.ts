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
		width: "20%",
	},
	cellDifference: {
		width: "20%",
	},
	tableRow: {
		"&:hover": {
			background: theme.palette.grey[100],
		},
	},
	noBorderBottom: {
		borderBottom: "none",
	},
	table: {
		[theme.breakpoints.down("md")]: {
			minWidth: theme.breakpoints.values.md,
		},
	},
	to: {
		[theme.breakpoints.down("md")]: {
			marginTop: -theme.spacing(1),
			marginBottom: -theme.spacing(1),
		},
	},
}))

export default useStyles
