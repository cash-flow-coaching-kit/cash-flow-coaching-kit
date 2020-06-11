import React, { ReactElement } from "react"
import { List, ListItem, ListItemText, Box } from "@material-ui/core"
import { fourQuestionsContent, answerTheming } from "../_config/data"
import useFourQsStyles from "./_config/styles"
import { IFourQuestionsProps } from "./_config/shape"
import { answerText } from "./_config/utilities"
import ExpandableNav from "../../ExpandableNav"
import { getOptionByAnswer } from "../_config/utilities"
import { QuestionOptions } from "../_config/shape"

/**
 * Component to render the Four key questions with optional
 * answers, used on the questionnaire summary page
 *
 * @param {QuestionOptions[]} { answers? }
 * @returns ReactElement
 */
const FourQuestions = ({ answers }: IFourQuestionsProps): ReactElement => {
	const styles = useFourQsStyles()

	/**
	 * Renders the answer related icon next to the question
	 *
	 * @param {QuestionOptions} answer
	 * @returns {ReactElement}
	 */
	const getIcon = (answer: QuestionOptions): ReactElement => {
		const opt = getOptionByAnswer(answer, answerTheming)
		if (opt) {
			return <opt.Icon style={{ color: opt.color }} />
		}

		return <></>
	}

	return (
		<ExpandableNav
			title="Four key questions"
			reactourLabel="four-questions-nav"
		>
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
										<Box className={styles.answerIconRoot}>
											{answers?.[idx] && getIcon(answers[idx])}
											{answerText(idx, answers)}
										</Box>
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
