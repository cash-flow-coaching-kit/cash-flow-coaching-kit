import { makeStyles } from "@material-ui/core"

// style definition for action container component
export const useActionContainerStyles = makeStyles((theme) => ({
	dropdownBody: {
		paddingRight: theme.spacing(2),
		paddingLeft: theme.spacing(2),
	},
}))

// style definition for action styles component
export const useActionsStyles = makeStyles((theme) => ({
	actionsWrapper: {
		display: "flex",
		justifyContent: "flex-start",
		marginTop: theme.spacing(3),
		alignItems: "center",
	},
	saveIndicator: {
		marginLeft: theme.spacing(2),
		userSelect: "none",
	},
}))

// style definition for action item component
export const useActionItemStyles = makeStyles((theme) => ({
	gridRoot: {
		alignItems: "center",
		margin: 0,
		width: "100%",
		background: "white",
		"& > .MuiGrid-item": {
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
		},
	},
	textfield: {
		width: "100%",
	},
	actions: {
		display: "flex",
		justifyContent: "flex-end",
	},
	dragIcon: {
		cursor: "move",
	},
	completedText: {
		padding: "18.5px 14px",
		lineHeight: "1.1876em",
		textDecoration: "line-through",
	},
	datepicker: {
		margin: 0,
	},
}))
