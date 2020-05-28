import { makeStyles } from "@material-ui/core"

type InputProps = {
	stacked: boolean
	mini: boolean
	fullHeight?: boolean
}
type StyleRtn = {}

const useStyles = makeStyles((theme) => ({
	root: (props: InputProps): StyleRtn => ({
		flexDirection: props.stacked ? "column" : "row",
		display: "flex",
		height: props.fullHeight ? "100%" : "auto",
	}),
	type: (props: InputProps): StyleRtn => ({
		flexGrow: 2,
		paddingRight: props.stacked ? 0 : theme.spacing(2),
		marginBottom: !props.stacked ? 0 : theme.spacing(2),
		"& h6": {
			fontWeight: theme.typography.fontWeightRegular,
			fontSize: props.mini
				? theme.typography.body1.fontSize
				: theme.typography.h6.fontSize,
		},
		"& p": {
			color: theme.palette.grey[700],
		},
	}),
	moneyInput: (props: InputProps): StyleRtn => ({
		maxWidth: props.stacked ? "100%" : "30%",
	}),
}))

export default useStyles
