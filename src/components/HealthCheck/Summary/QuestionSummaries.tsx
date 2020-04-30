import React, { useState, ReactElement } from "react"
import {
	makeStyles,
	Grid,
	Card,
	CardHeader,
	CardActions,
	Button,
} from "@material-ui/core"
import { generateKey, constructKey } from "../../../util/key"
import { getOptionByAnswer, options } from "../Questionnaire/config"

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
	questions: string[]
	tileAnswers: number[]
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
				(q: string, idx: number): ReactElement => {
					const { title, Icon, color } = getOptionByAnswer(
						tileAnswers[idx],
						options
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
									title={q}
									avatar={<Icon style={{ color }} />}
									subheader={title}
									subheaderTypographyProps={{
										style: {
											color,
											fontWeight: 500,
										},
									}}
									className={styles.cardHeader}
								/>
								<CardActions>
									<Button color="primary" variant="outlined" size="small">
										Learn more
									</Button>
								</CardActions>
							</Card>
						</Grid>
					)
				}
			)}
		</Grid>
	)
}

export default QuestionSummaries
