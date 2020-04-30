import { makeStyles } from "@material-ui/core"

const useSharedTipStyling = makeStyles((theme) => ({
	list: {
		listStyle: "disc",
		paddingLeft: theme.spacing(2),
	},
}))

export default useSharedTipStyling
