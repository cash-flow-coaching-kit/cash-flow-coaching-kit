import React, { ReactElement, useState } from "react"
import {
	ExpansionPanel,
	ExpansionPanelSummary,
	Typography,
	ExpansionPanelDetails,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Divider,
	Box,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { generateKey, constructKey } from "../../../util/key"
import {
	fourQuestionsContent,
	answerTheming,
	questions,
} from "../shared/config"
import { QuestionOptions } from "../shared/outline"
import { getOptionByAnswer } from "../shared/utilities"

// Four question styling
const useFourQsStyles = makeStyles((theme) => ({
	list: {
		width: "100%",
		padding: 0,
	},
	listItem: {
		padding: `${theme.spacing(1)}px 0`,
	},
	listItemFirst: {
		paddingTop: 0,
	},
	listItemText: {
		margin: 0,
	},
}))

/**
 * FourQuestions component props
 *
 * @interface IFourQuestionsProps
 */
interface IFourQuestionsProps {
	answers?: QuestionOptions[]
}

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

	/**
	 * Checks if a question has a answer and displays the answer
	 * with a theme
	 *
	 * @param {number} idx Question index
	 * @returns (boolean | ReactElement)
	 */
	const answerText = (idx: number): ReactElement | boolean => {
		if (answers && typeof answers[idx] !== "undefined") {
			const { color } = getOptionByAnswer(answers[idx], answerTheming)
			return (
				<Typography style={{ color, fontWeight: 500 }}>
					{questions[idx].options[answers[idx]]}
				</Typography>
			)
		}

		return false
	}

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
										{answerText(idx)}
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
