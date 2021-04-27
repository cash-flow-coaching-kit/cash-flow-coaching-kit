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
					Explore the actions to identify possible changes to make.
				</Typography>
				<Typography component="li">
					Once decided, click the &apos;Add to Action Checklist button&apos;
				</Typography>
				<Typography component="li">Add extra detail if required</Typography>
				<Typography component="li">
					Use the action with the canvas to plan them
				</Typography>
			</List>
			<Typography variant="h6">Next Steps</Typography>
			<List className={styles.list}>
				<Typography component="li">
					Visit the Action Checklist to see the results
				</Typography>
				<Typography component="li">
					Apply new actions regularly to keep improving
				</Typography>
			</List>
		</>
	)
}

export default ChangeLeversTips
