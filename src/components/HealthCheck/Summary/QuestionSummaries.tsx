import React, { useState, ReactElement } from "react"
import {
	makeStyles,
	Grid,
	Card,
	CardHeader,
	CardActions,
	Button,
} from "@material-ui/core"
import { Link } from "react-router-dom"
import { generateKey, constructKey } from "../../../util/key"
import { QuestionOptions, IQuestionStructure } from "../shared/outline"
import { answerTheming } from "../shared/config"
import { getOptionByAnswer } from "../shared/utilities"

const useSummaryStyles = makeStyles((theme) => ({
	gridRoot: {
		marginTop: theme.spacing(3),
	},
	gridItem: {
		display: "flex",
	},
	cardRoot: {
		display: "flex",
		flexDirection: "column",
	},
	cardHeader: {
		flexGrow: 2,
		alignItems: "flex-start",
	},
}))

interface IQuestionSummaries {
	questions: IQuestionStructure[]
	tileAnswers: QuestionOptions[]
}

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
