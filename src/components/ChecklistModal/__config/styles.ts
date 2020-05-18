/* eslint-disable import/prefer-default-export */
import { makeStyles } from "@material-ui/core"

// Styling used on the Modal component
export const useModalStyles = makeStyles((theme) => ({
	actions: {
		borderTopWidth: "1px",
		borderTopColor: theme.palette.divider,
		borderTopStyle: "solid",
		marginTop: theme.spacing(3),
	},
}))

export const useFormStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(2),
	},
	inputWrapper: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	input: {
		width: "100%",
	},
	actions: {
		marginBottom: theme.spacing(2),
	},
	itemAction: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
	},
}))
