import { makeStyles } from "@material-ui/core"

// Four question styling
const useFourQsStyles = makeStyles((theme) => ({
	list: {
		width: "100%",
		padding: 0,
	},
	box: {
		paddingRight: theme.spacing(2),
		paddingLeft: theme.spacing(2),
	},
	listItem: {
		padding: `${theme.spacing(1)}px 0`,
		borderTop: `1px solid ${theme.palette.divider}`,
	},
	listItemFirst: {
		paddingTop: 0,
		border: "none",
	},
	listItemText: {
		margin: 0,
	},
	answerIconRoot: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		"& p": {
			marginLeft: theme.spacing(1),
		},
	},
}))

export default useFourQsStyles
