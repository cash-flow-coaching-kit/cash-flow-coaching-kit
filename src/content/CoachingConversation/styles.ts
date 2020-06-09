import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	box: {
		padding: `0 ${theme.spacing(2)}px`,
	},
	list: {
		listStyle: "disc",
		paddingLeft: theme.spacing(2),
		paddingTop: 0,
		paddingBottom: 0,
		"& ul": {
			paddingLeft: theme.spacing(3),
		},
	},
	embed: {
		minHeight: "300px",
		border: "none",
	},
}))

export default useStyles
