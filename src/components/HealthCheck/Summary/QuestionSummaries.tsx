import React, { useState, ReactElement } from "react"
import {
	Grid,
	Card,
	CardHeader,
	CardActionArea,
	CardActions,
	useTheme,
	Avatar,
} from "@material-ui/core"
import { Link } from "react-router-dom"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { generateKey, constructKey } from "../../../util/lists/key"
import { IQuestionStructure } from "../_config/shape"
import { answerTheming } from "../_config/data"
import { getOptionByAnswer } from "../_config/utilities"
import { IQuestionSummaries } from "./_config/shape"
import { useSummaryStyles } from "./_config/styles"
import { PrivateRoutes } from "../../../util/routes/routes"

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
	const theme = useTheme()

	return (
		<Grid
			container
			spacing={2}
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
							xs={12}
							sm={6}
							md={4}
							key={constructKey(key, idx)}
							className={styles.gridItem}
						>
							<Card className={styles.cardRoot}>
								<CardActionArea
									component={Link}
									to={q.learnMore || PrivateRoutes.CoachingKit}
									className={styles.areaRoot}
								>
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
									<CardActions className={styles.cardActions}>
										<Avatar
											style={{
												backgroundColor: theme.palette.primary.main,
												boxShadow: theme.shadows["3"],
											}}
										>
											<ArrowForwardIcon />
										</Avatar>
									</CardActions>
								</CardActionArea>
							</Card>
						</Grid>
					)
				}
			)}
		</Grid>
	)
}

export default QuestionSummaries
