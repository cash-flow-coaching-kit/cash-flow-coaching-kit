import { makeStyles } from "@material-ui/core"

type InputProps = {
	stacked: boolean
	mini: boolean
	fullHeight?: boolean
}
type StyleRtn = any // eslint-disable-line

const useStyles = makeStyles((theme) => ({
	root: (props: InputProps): StyleRtn => ({
		flexDirection: props.stacked ? "column" : "row",
		display: "flex",
		height: props.fullHeight ? "100%" : "auto",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItem: "flex-start",
		},
	}),
	type: (props: InputProps): StyleRtn => ({
		flexGrow: 2,
		paddingRight: props.stacked ? 0 : theme.spacing(2),
		marginBottom: !props.stacked ? 0 : theme.spacing(2),
		"& p": {
			fontWeight: theme.typography.fontWeightRegular,
			fontSize: props.mini
				? theme.typography.body1.fontSize
				: theme.typography.h6.fontSize,
		},
		"& span": {
			display: "block",
			color: theme.palette.grey[700],
		},
		[theme.breakpoints.down("md")]: {
			marginBottom: 0,
			paddingRight: 0,
		},
	}),
	moneyInput: (props: InputProps): StyleRtn => ({
		[theme.breakpoints.up("md")]: {
			maxWidth: props.stacked ? "100%" : "30%",
		},
		[theme.breakpoints.down("md")]: {
			marginTop: theme.spacing(2),
		},
	}),
}))

export default useStyles
