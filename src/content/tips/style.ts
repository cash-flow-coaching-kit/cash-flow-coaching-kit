import { makeStyles } from "@material-ui/core"

// Shared styling for the tip components
const useSharedTipStyling = makeStyles((theme) => ({
	list: {
		listStyle: "disc",
		paddingLeft: theme.spacing(2),
	},
}))

export default useSharedTipStyling
