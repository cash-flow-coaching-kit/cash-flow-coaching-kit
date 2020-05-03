import React, {
	useState,
	ReactElement,
	useEffect,
	MouseEvent,
	useContext,
} from "react"
import { Box, Typography, Grid, Button } from "@material-ui/core"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { useHistory } from "react-router-dom"
import { useQuestionnaireStyles } from "./_config/styles"
import { questions } from "../_config/data"
import { IQuestionStructure, QuestionOptions } from "../_config/shape"
import { constructKey, generateKey } from "../../../util/key"
import { ClientContext } from "../../../state/client"
import addHealthCheck from "../../../data/healthChecks/addHC"
import { routeVarReplacement, PrivateRoutes } from "../../../util/routes/routes"
import { OptionTile } from "./_partials"
import NoClientError from "../../NoClientError"

/**
 * Questionnaire component for the Health checks
 * handles the logic for answering and submitting the quiz
 *
 * @returns ReactElement
 */
const Questionnaire = (): ReactElement => {
	const {
		state: { currentClient },
	} = useContext(ClientContext)
	const styles = useQuestionnaireStyles()
	const [answers, setAnswers] = useState<QuestionOptions[]>([])
	const [questionCount, setQuestionCount] = useState<number>(0)
	const [currentQuestion, setCurrentQuestion] = useState<IQuestionStructure>(
		questions[questionCount]
	)
	const [key] = useState(generateKey())
	const history = useHistory()

	useEffect(() => {
		setCurrentQuestion(questions[questionCount])
	}, [questionCount])

	/**
	 * Changes the selected answer for the current question
	 *
	 * @param {MouseEvent<HTMLDivElement>} e Change event from clicking on the option
	 * @param {QuestionOptions} answer Answer that was selected
	 * @returns void
	 */
	const changeAnswer = (
		e: MouseEvent<HTMLDivElement>,
		answer: QuestionOptions
	): void => {
		e.preventDefault()
		const copy = [...answers]
		copy[questionCount] = answer
		setAnswers([...copy])
	}

	/**
	 * Conditional to check if the user is on the final question
	 *
	 * @returns boolean
	 */
	const isFinalQuestion = (): boolean => questionCount === questions.length - 1

	/**
	 * Submits the questionnaire and redirects to the summary page
	 *
	 * @async
	 * @returns Promise<void>
	 */
	const handleSubmit = async (): Promise<void> => {
		if (
			typeof currentClient === "undefined" ||
			typeof currentClient.id === "undefined"
		) {
			// eslint-disable-next-line no-alert
			alert(
				"A client needs to be selected, please add or select a client before submitting"
			)
			return
		}

		try {
			const dbKey = await addHealthCheck({
				clientId: currentClient.id,
				answers,
			})

			history.push(
				routeVarReplacement(PrivateRoutes.HealthCheckSummary, [
					[":id", `${dbKey}`],
				])
			)
		} catch (e) {
			// TODO: Proper error checking
			console.error(e.stack || e)
		}
	}

	return (
		<Box>
			<Typography variant="subtitle1" className={styles.subtitle}>
				Question {questionCount + 1}
			</Typography>
			<Typography variant="h4" className={styles.title}>
				{currentQuestion.question}
			</Typography>

			<NoClientError />

			<Grid container spacing={2}>
				{(Object.keys(currentQuestion.options) as QuestionOptions[]).map(
					(option: QuestionOptions, idx: number): ReactElement => (
						<Grid item xs={4}>
							<OptionTile
								optionKey={option}
								option={currentQuestion.options[option]}
								key={constructKey(key, idx)}
								changeAnswer={changeAnswer}
								currentAnswer={answers[questionCount] || false}
							/>
						</Grid>
					)
				)}
			</Grid>

			<Box className={styles.actions}>
				<Button
					startIcon={<ChevronLeftIcon />}
					variant="outlined"
					color="primary"
					disabled={questionCount === 0}
					onClick={(e: MouseEvent<HTMLButtonElement>): void => {
						e.preventDefault()
						setQuestionCount(questionCount - 1)
					}}
				>
					Previous question
				</Button>
				<Button
					endIcon={<ChevronRightIcon />}
					variant="contained"
					color="primary"
					disabled={typeof answers[questionCount] === "undefined"}
					onClick={(e: MouseEvent<HTMLButtonElement>): void => {
						e.preventDefault()
						if (!isFinalQuestion()) {
							setQuestionCount(questionCount + 1)
						} else {
							handleSubmit()
						}
					}}
				>
					{isFinalQuestion() ? "Submit questionnaire" : "Next question"}
				</Button>
			</Box>
		</Box>
	)
}

export default Questionnaire
