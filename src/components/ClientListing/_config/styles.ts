/* eslint-disable import/prefer-default-export */
import { makeStyles } from "@material-ui/core"

// Client listing styles
export const useCLStyles = makeStyles((theme) => ({
	button: {
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(2),
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0,
			marginTop: theme.spacing(2),
		},
	},
	actions: {
		display: "flex",
		justifyContent: "flex-end",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
}))
