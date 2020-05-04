import React, { ReactElement } from "react"
import { Typography, List } from "@material-ui/core"
import useSharedTipStyling from "./style"

/**
 * Tip displayed on the Health check questionnaire page
 *
 * @returns ReactElement
 */
const HCQuestionnaire = (): ReactElement => {
	const styles = useSharedTipStyling()

	return (
		<>
			<List className={styles.list}>
				<Typography component="li">
					Answer the questions to assess cash flow knowledge and focus areas for
					the conversation
				</Typography>
				<Typography component="li">
					Check the results to identify areas of concern
				</Typography>
				<Typography component="li">
					Click the Learn more button to prompt discussions and work through
					appropriate learning topics.
				</Typography>
			</List>
			<Typography variant="h6">Next Steps</Typography>
			<List className={styles.list}>
				<Typography component="li">
					Retake the Health Check to see where improvements have been made and
					opportunities for further coaching conversations
				</Typography>
				<Typography component="li">Prepare a Cash Flow Canvas</Typography>
			</List>
		</>
	)
}

export default HCQuestionnaire
