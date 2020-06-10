import { makeStyles } from "@material-ui/core"
import orange from "@material-ui/core/colors/orange"

const useInputWrapper = makeStyles((theme) => ({
	wrapper: {
		background: "white",
		borderRadius: theme.shape.borderRadius,
		padding: theme.spacing(2),
		boxShadow: theme.shadows[1],
	},
	highlight: {
		borderTopWidth: "5px",
		borderTopStyle: "solid",
		borderTopColor: orange[500],
	},
}))

const useCustomTitleStyles = makeStyles((theme) => ({
	checkboxRoot: {
		display: "flex",
		alignItems: "center",
	},
	textField: {
		marginTop: theme.spacing(1),
	},
	divider: {
		marginTop: theme.spacing(2),
	},
}))

const useRepeaterStyles = makeStyles((theme) => ({
	body: {
		paddingRight: theme.spacing(0),
		paddingLeft: theme.spacing(0),
	},
	form: {
		overflow: "hidden",
		[theme.breakpoints.down("sm")]: {
			overflowX: "scroll",
		},
	},
	formInner: {
		[theme.breakpoints.down("sm")]: {
			minWidth: theme.breakpoints.values.md,
			paddingBottom: theme.spacing(1),
		},
	},
}))

// eslint-disable-next-line import/prefer-default-export
export { useInputWrapper, useCustomTitleStyles, useRepeaterStyles }
