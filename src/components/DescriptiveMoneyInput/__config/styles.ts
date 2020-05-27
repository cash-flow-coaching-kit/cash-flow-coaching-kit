import { makeStyles } from "@material-ui/core"

const useDMIStyles = (props: { stacked: boolean; mini: boolean }) =>
	makeStyles((theme) => ({
		root: {
			flexDirection: props.stacked ? "column" : "row",
			display: "flex",
		},
		type: {
			flexGrow: 2,
			paddingRight: props.stacked ? "" : theme.spacing(2),
			marginBottom: !props.stacked ? "" : theme.spacing(2),
			"& h6": {
				fontWeight: theme.typography.fontWeightRegular,
				fontSize: props.mini
					? theme.typography.body1.fontSize
					: theme.typography.h6.fontSize,
			},
			"& p": {
				color: theme.palette.grey[700],
			},
		},
		moneyInput: {
			maxWidth: props.stacked ? "" : "30%",
		},
	}))

export default useDMIStyles
