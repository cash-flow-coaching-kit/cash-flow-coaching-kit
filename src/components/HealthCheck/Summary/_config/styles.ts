/* eslint-disable import/prefer-default-export */
import { makeStyles } from "@material-ui/core"

// Styles for the health check summary
export const useSummaryStyles = makeStyles((theme) => ({
	gridRoot: {
		marginTop: theme.spacing(3),
	},
	gridItem: {
		display: "flex",
	},
	cardRoot: {
		display: "flex",
		flexDirection: "column",
		"& > a": {
			height: "100%",
		},
	},
	cardHeader: {
		flexGrow: 2,
		alignItems: "flex-start",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
	},
}))
