import { makeStyles } from "@material-ui/core/styles"

const usePageTipStyles = makeStyles((theme) => ({
	root: {
		position: "absolute",
		left: theme.spacing(2),
		bottom: theme.spacing(2),
	},
	icon: {
		marginRight: theme.spacing(1),
	},
	drawer: {
		padding: theme.spacing(2),
		maxWidth: "350px",
		width: "100%",
	},
	closeBox: {
		display: "flex",
		justifyContent: "space-between",
		marginBottom: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		borderBottom: 1,
		borderBottomColor: theme.palette.grey[500],
		borderBottomStyle: "solid",
	},
}))

export default usePageTipStyles
