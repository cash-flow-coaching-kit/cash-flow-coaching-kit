/* eslint-disable import/prefer-default-export */
import { makeStyles } from "@material-ui/core/styles"

export const useSharedNavStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
	box: {
		display: "flex",
		flexGrow: 2,
		justifyContent: "flex-end",
	},
	button: {
		textTransform: "capitalize",
	},
	logoBox: {
		display: "flex",
		justifyContent: "center",
		flexGrow: 3,
	},
	small: {
		flexGrow: 1,
	},
	publicLogo: {
		justifyContent: "flex-start",
		"& span": {
			color: "white",
		},
	},
}))
