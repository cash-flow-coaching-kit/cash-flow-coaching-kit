import { makeStyles } from "@material-ui/core"

const useDTStyles = makeStyles((theme) => ({
	tagline: {
		marginBottom: theme.spacing(4),
		fontSize: "2rem",
	},
	container: {
		paddingTop: theme.spacing(5),
	},
	grid: {
		paddingTop: theme.spacing(5),
	},
	SectionTitle: {
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(2),
		fontSize: "1.8rem",
	},
	embed: {
		minHeight: "300px",
		border: "none",
	},
	button: {
		margin: theme.spacing(2, 0, 2, 0),
		textAlign: "center",
		backgroundColor: "#ffffff",
		textTransform: "none",
	},
	containerActivity: {
		backgroundColor: "#e1bee7",
		paddingBottom: theme.spacing(3),
		marginTop: theme.spacing(5),
	},
	containerWrapUp: {
		backgroundColor: "#f3e5f5",
		paddingBottom: theme.spacing(3),
	},
	containerMoreInfo: {
		backgroundColor: "#efebe9",
		paddingBottom: theme.spacing(3),
	},
	list: {
		listStyle: "disc",
		paddingLeft: theme.spacing(1),
		margin: theme.spacing(0.5, 0, 0.5, 2),
	},
	contentText: {
		margin: theme.spacing(2, 0),
	},
}))

export default useDTStyles
