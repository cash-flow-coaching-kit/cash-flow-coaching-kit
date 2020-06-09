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
import { constructKey, generateKey } from "../../../util/lists/key"
import { ClientContext } from "../../../state/client"
import { routeVarReplacement, PrivateRoutes } from "../../../util/routes/routes"
import { OptionTile } from "./_partials"
import NoClientError from "../../NoClientError"
import { IQuestionnaireProps } from "./_config/shape"
import HealthCheckUseCase from "../../../data/healthChecks/HealthCheckLogic"
import { newTimestamp } from "../../../util/dates"

/**
 * Questionnaire component for the Health checks
 * handles the logic for answering and submitting the quiz
 *
 * @returns ReactElement
 */
const Questionnaire = ({
	previousAnswers = [],
	dbID,
}: IQuestionnaireProps): ReactElement => {
	const {
		state: { currentClient },
	} = useContext(ClientContext)
	const styles = useQuestionnaireStyles()
	const [answers, setAnswers] = useState<QuestionOptions[]>(previousAnswers)
	const [questionCount, setQuestionCount] = useState<number>(0)
	const [currentQuestion, setCurrentQuestion] = useState<IQuestionStructure>(
		questions[questionCount]
	)
	const [key] = useState(generateKey())
	const history = useHistory()

	useEffect(() => {
		setCurrentQuestion(questions[questionCount])
	}, [questionCount])

	useEffect(() => {
		if (previousAnswers !== answers) {
			setAnswers(previousAnswers)
			setQuestionCount(0)
		}
		// eslint-disable-next-line
	}, [previousAnswers])
	// Adding answers as a dependency will cause the quiz to
	// not work as it resets it constantly
	// TODO: See if there is a better way to do this

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
	 * Redirects to the summary page
	 *
	 * @param {number} id ID of the health check to redirect to
	 */
	const redirectToSummary = (id: number): void => {
		history.push(
			routeVarReplacement(PrivateRoutes.HealthCheckSummary, [[":id", `${id}`]])
		)
	}

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
			if (typeof dbID === "undefined") {
				const dbKey = await HealthCheckUseCase.create({
					clientId: currentClient.id,
					answers,
					createdAt: newTimestamp(),
				})
				redirectToSummary(dbKey)
			} else {
				await HealthCheckUseCase.update(dbID, { answers })
				redirectToSummary(dbID)
			}
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
						<Grid item xs={12} sm={4} key={constructKey(key, idx)}>
							<OptionTile
								optionKey={option}
								option={currentQuestion.options[option]}
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
