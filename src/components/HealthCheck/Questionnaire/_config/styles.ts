import { makeStyles } from "@material-ui/core"

// eslint-disable-next-line import/prefer-default-export
export const useQuestionnaireStyles = makeStyles((theme) => ({
	actions: {
		display: "flex",
		flexDirection: "column",
		marginTop: theme.spacing(5),
		[theme.breakpoints.up("sm")]: {
			flexDirection: "row",
			justifyContent: "space-between",
		},
		"& button:first-child": {
			[theme.breakpoints.down("sm")]: {
				marginBottom: theme.spacing(1),
			},
		},
	},
	subtitle: {
		marginTop: theme.spacing(2),
		lineHeight: 1,
		[theme.breakpoints.down("sm")]: {
			marginTop: theme.spacing(4),
		},
	},
	title: {
		marginBottom: theme.spacing(3),
		[theme.breakpoints.down("sm")]: {
			fontSize: theme.typography.h5.fontSize,
		},
	},
}))

// Option tile styles
export const useOptionTileStyles = makeStyles(() => ({
	cardContent: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}))
