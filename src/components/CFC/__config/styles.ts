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
		borderTop: `5px solid ${orange[500]}`,
	},
	highlightLeft: {
		borderLeft: `5px solid ${orange[500]}`,
		paddingLeft: theme.spacing(2),
	},
	plain: {
		boxShadow: "none",
	},
}))

const useCustomTitleStyles = makeStyles((theme) => ({
	checkboxRoot: {
		display: "flex",
		alignItems: "center",
	},
	textField: {
		marginBottom: theme.spacing(1),
	},
	divider: {
		margin: `${theme.spacing(2)}px 0`,
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
	mobileNotice: {
		display: "block",
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	gst: {
		marginTop: theme.spacing(1),
		borderRadius: theme.shape.borderRadius,
	},
}))

// eslint-disable-next-line import/prefer-default-export
export { useInputWrapper, useCustomTitleStyles, useRepeaterStyles }
