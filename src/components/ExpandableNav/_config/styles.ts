import { makeStyles } from "@material-ui/core"

// Styles for the Expandable nav
const useExpandableNavStyles = makeStyles((theme) => ({
	details: {
		paddingLeft: 0,
		paddingRight: 0,
		flexDirection: "column",
	},
	summary: {
		"& .MuiAccordionSummary-content": {
			flexDirection: "column",
		},
	},
	subHeading: {
		color: theme.palette.grey[700],
		fontSize: theme.typography.caption.fontSize,
		fontWeight: 400,
		display: "block",
	},
}))

export default useExpandableNavStyles
