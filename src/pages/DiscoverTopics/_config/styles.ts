import { makeStyles } from "@material-ui/core"

const useDTStyles = makeStyles((theme) => ({
	tagline: {
		marginBottom: theme.spacing(4),
	},
	container: {
		paddingTop: theme.spacing(5),
	},
	grid: {
		paddingTop: theme.spacing(5),
	},
	SectionTitle: {
		paddingTop: theme.spacing(5),
	},
	embed: {
		minHeight: "300px",
		border: "none",
	},
	button: {
		margin: theme.spacing(1),
	},
	containerPurple: {
		backgroundColor: "#cfe8fc",
	},
	containerWrapUp: {
		backgroundColor: "#cfe8fc",
		paddingBottom: theme.spacing(5),
	},
	containerMoreInfo: {
		backgroundColor: "#efebe9",
		paddingBottom: theme.spacing(5),
	},
	list: {
		listStyle: "disc",
		paddingLeft: theme.spacing(2),
	},
}))

export default useDTStyles
