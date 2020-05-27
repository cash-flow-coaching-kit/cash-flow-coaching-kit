import { makeStyles } from "@material-ui/core"

const useInputWrapper = makeStyles((theme) => ({
	wrapper: {
		background: "white",
		borderRadius: theme.shape.borderRadius,
		padding: theme.spacing(2),
		boxShadow: theme.shadows[1],
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

// eslint-disable-next-line import/prefer-default-export
export { useInputWrapper, useCustomTitleStyles }
