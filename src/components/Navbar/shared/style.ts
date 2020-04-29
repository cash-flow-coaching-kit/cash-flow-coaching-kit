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
}))
