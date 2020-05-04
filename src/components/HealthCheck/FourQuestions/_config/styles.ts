import { makeStyles } from "@material-ui/core"

// Four question styling
const useFourQsStyles = makeStyles((theme) => ({
	list: {
		width: "100%",
		padding: 0,
	},
	listItem: {
		padding: `${theme.spacing(1)}px 0`,
	},
	listItemFirst: {
		paddingTop: 0,
	},
	listItemText: {
		margin: 0,
	},
}))

export default useFourQsStyles
