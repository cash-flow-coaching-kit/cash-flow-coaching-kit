import { makeStyles } from "@material-ui/core"

const useInputWrapper = makeStyles((theme) => ({
	wrapper: {
		background: "white",
		borderRadius: theme.shape.borderRadius,
		padding: theme.spacing(2),
		boxShadow: theme.shadows[1],
	},
}))

// eslint-disable-next-line import/prefer-default-export
export { useInputWrapper }
