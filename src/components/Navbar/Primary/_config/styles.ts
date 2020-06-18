import { makeStyles } from "@material-ui/core"

const usePrimaryStyles = makeStyles((theme) => ({
	clientCaption: {
		textTransform: "uppercase",
		lineHeight: 1,
		display: "block",
	},
	clientName: {
		lineHeight: 1,
		[theme.breakpoints.down("sm")]: {
			fontSize: theme.typography.pxToRem(18),
		},
	},
	clientGridItem: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
}))

export default usePrimaryStyles
