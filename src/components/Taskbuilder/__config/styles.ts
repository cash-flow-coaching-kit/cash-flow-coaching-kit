import { makeStyles } from "@material-ui/core"

export const useTaskBuilderStyles = makeStyles((theme) => ({
	innerBox: {
		paddingRight: theme.spacing(2),
		paddingLeft: theme.spacing(2),
	},
	content: {
		marginBottom: theme.spacing(2),
	},
}))

export const useFormStyles = makeStyles((theme) => ({
	divider: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	actions: {
		marginTop: theme.spacing(3),
	},
	fill: {
		width: "100%",
	},
	label: {
		display: "flex",
	},
}))
