import React, { ReactElement, useState } from "react"
import {
	ExpansionPanel,
	ExpansionPanelSummary,
	Typography,
	ExpansionPanelDetails,
	List,
	ListItem,
	ListItemText,
	Divider,
	Box,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { generateKey, constructKey } from "../../../util/lists/key"
import { fourQuestionsContent } from "../_config/data"
import useFourQsStyles from "./_config/styles"
import { IFourQuestionsProps } from "./_config/shape"
import { answerText } from "./_config/utilities"

/**
 * Component to render the Four key questions with optional
 * answers, used on the questionnaire summary page
 *
 * @param {QuestionOptions[]} { answers? }
 * @returns ReactElement
 */
const FourQuestions = ({ answers }: IFourQuestionsProps): ReactElement => {
	const styles = useFourQsStyles()
	const [key] = useState(generateKey())

	return (
		<ExpansionPanel defaultExpanded>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h6">Four key questions</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<List className={styles.list}>
					{fourQuestionsContent.map(
						(content: string, idx: number): ReactElement => (
							<Box key={constructKey(key, idx)} component="li">
								<ListItem
									component="div"
									className={`${styles.listItem} ${
										idx === 0 ? styles.listItemFirst : ""
									}`}
								>
									<ListItemText className={styles.listItemText}>
										{`${idx + 1}. ${content}`}
										{answerText(idx, answers)}
									</ListItemText>
								</ListItem>
								{idx !== fourQuestionsContent.length - 1 ? <Divider /> : false}
							</Box>
						)
					)}
				</List>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	)
}

export default FourQuestions
