import React, { ReactElement } from "react"
import { List, ListItem, ListItemText, Box } from "@material-ui/core"
import { fourQuestionsContent } from "../_config/data"
import useFourQsStyles from "./_config/styles"
import { IFourQuestionsProps } from "./_config/shape"
import { answerText } from "./_config/utilities"
import ExpandableNav from "../../ExpandableNav"

/**
 * Component to render the Four key questions with optional
 * answers, used on the questionnaire summary page
 *
 * @param {QuestionOptions[]} { answers? }
 * @returns ReactElement
 */
const FourQuestions = ({ answers }: IFourQuestionsProps): ReactElement => {
	const styles = useFourQsStyles()

	return (
		<ExpandableNav title="Four key questions">
			<Box className={styles.box}>
				<List className={styles.list}>
					{fourQuestionsContent.map(
						(content: string, idx: number): ReactElement => (
							<Box key={content} component="li">
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
							</Box>
						)
					)}
				</List>
			</Box>
		</ExpandableNav>
	)
}

export default FourQuestions
