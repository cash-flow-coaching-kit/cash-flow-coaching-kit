import React, { ReactElement } from "react"
import { Typography, List } from "@material-ui/core"
import useSharedTipStyling from "./style"

/**
 * Tip displayed on the Health check questionnaire page
 *
 * @returns ReactElement
 */
const HCQuestionnaireTips = (): ReactElement => {
	const styles = useSharedTipStyling()

	return (
		<>
			<List className={styles.list}>
				<Typography component="li">
					Answer the questions to assess cash flow knowledge.
				</Typography>
				<Typography component="li">
					Check the results to identify areas of concern.
				</Typography>
				{/* <Typography component="li">
				You can retake the Health Check to track improvements.
				</Typography> */}
			</List>
			<Typography variant="h6">Next Steps</Typography>
			<List className={styles.list}>
				<Typography component="li">
					Look at your results and work through Discover Topics
				</Typography>
				<Typography component="li">Prepare a Cash Flow Canvas.</Typography>
			</List>
		</>
	)
}

export default HCQuestionnaireTips
