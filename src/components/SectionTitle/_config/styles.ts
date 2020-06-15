import { makeStyles } from "@material-ui/core"

// Section title styles
const useSTStyles = makeStyles((theme) => ({
	title: {
		fontWeight: 500,
		marginBottom: theme.spacing(2),
		[theme.breakpoints.down("sm")]: {
			fontSize: theme.typography.h5.fontSize,
		},
	},
}))

export default useSTStyles
