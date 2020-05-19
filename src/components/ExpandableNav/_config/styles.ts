import { makeStyles } from "@material-ui/core"

// Styles for the Expandable nav
const useExpandableNavStyles = makeStyles((theme) => ({
	details: {
		paddingLeft: 0,
		paddingRight: 0,
		flexDirection: "column",
	},
	summary: {
		"& .MuiExpansionPanelSummary-content": {
			flexDirection: "column",
		},
	},
	subHeading: {
		color: theme.palette.grey[700],
		fontSize: theme.typography.caption.fontSize,
		fontWeight: theme.typography.fontWeightRegular,
		display: "block",
	},
}))

export default useExpandableNavStyles
