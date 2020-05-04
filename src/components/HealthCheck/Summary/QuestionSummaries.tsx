import React, { useState, ReactElement } from "react"
import { Grid, Card, CardHeader, CardActions, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import { generateKey, constructKey } from "../../../util/key"
import { IQuestionStructure } from "../_config/shape"
import { answerTheming } from "../_config/data"
import { getOptionByAnswer } from "../_config/utilities"
import { IQuestionSummaries } from "./_config/shape"
import { useSummaryStyles } from "./_config/styles"

/**
 * Component to display the summary cards for the answers
 * given to the "additional" questions
 *
 * @param {IQuestionStructure[]} {questions} questions to loop through and display the answers
 * @param {QuestionOptions[]} {tileAnswers} answers given to those questions
 * @returns ReactElement
 */
const QuestionSummaries = ({
	questions,
	tileAnswers,
}: IQuestionSummaries): ReactElement => {
	const [key] = useState(generateKey())
	const styles = useSummaryStyles()

	return (
		<Grid
			container
			spacing={3}
			alignItems="stretch"
			className={styles.gridRoot}
		>
			{questions.map(
				(q: IQuestionStructure, idx: number): ReactElement => {
					const { Icon, color } = getOptionByAnswer(
						tileAnswers[idx],
						answerTheming
					)

					return (
						<Grid
							item
							xs={4}
							key={constructKey(key, idx)}
							className={styles.gridItem}
						>
							<Card className={styles.cardRoot}>
								<CardHeader
									title={q.question}
									avatar={<Icon style={{ color }} />}
									subheader={q.options[tileAnswers[idx]]}
									subheaderTypographyProps={{
										style: {
											color,
											fontWeight: 500,
										},
									}}
									className={styles.cardHeader}
								/>
								{q.learnMore && (
									<CardActions>
										<Button
											color="primary"
											variant="outlined"
											size="small"
											component={Link}
											to={q.learnMore}
										>
											Learn more
										</Button>
									</CardActions>
								)}
							</Card>
						</Grid>
					)
				}
			)}
		</Grid>
	)
}

export default QuestionSummaries
