import React, { ReactElement } from "react"
import { Typography, List } from "@material-ui/core"
import useSharedTipStyling from "./style"

/**
 * Tip displayed on the client listing page
 *
 * @returns ReactElement
 */
const ChangeLeversTips = (): ReactElement => {
	const styles = useSharedTipStyling()

	return (
		<>
			<List className={styles.list}>
				<Typography component="li">
					Explore the levers to identify possible changes that can be made to
					the business
				</Typography>
				<Typography component="li">
					Click the Add to action checklist button to add relevant levers to the
					Action Checklist
				</Typography>
				<Typography component="li">Add extra detail if required</Typography>
				<Typography component="li">
					Use the levers with the canvas to identify key actions
				</Typography>
			</List>
			<Typography variant="h6">Next Steps</Typography>
			<List className={styles.list}>
				<Typography component="li">
					Visit the Action Checklist to see the results
				</Typography>
				<Typography component="li">
					Apply new levers regularly to keep improving
				</Typography>
			</List>
		</>
	)
}

export default ChangeLeversTips
