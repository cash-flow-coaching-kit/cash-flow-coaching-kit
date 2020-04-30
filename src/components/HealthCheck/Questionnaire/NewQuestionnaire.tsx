import React, { useState, ReactElement, useEffect, MouseEvent } from "react"
import {
	Box,
	Typography,
	Grid,
	Card,
	CardActionArea,
	CardContent,
	Button,
} from "@material-ui/core"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { useQuestionnaireStyles } from "./config"
import { questions, answerTheming } from "../shared/config"
import { IQuestionStructure, QuestionOptions } from "../shared/outline"
import { getOptionByAnswer } from "../shared/utilities"
import { constructKey, generateKey } from "../../../util/key"

interface IQuestionnaireOptions {
	optionKey: QuestionOptions
	option: string
	changeAnswer(e: MouseEvent<HTMLDivElement>, answer: QuestionOptions): void
	currentAnswer: QuestionOptions | boolean
}

const QuestionnaireOptions = ({
	optionKey,
	option,
	currentAnswer,
	changeAnswer,
}: IQuestionnaireOptions): ReactElement => {
	const theme = getOptionByAnswer(optionKey, answerTheming)

	return (
		<Grid item xs={4}>
			<Card
				raised={currentAnswer ? currentAnswer === optionKey : false}
				onClick={(e: MouseEvent<HTMLDivElement>): void => {
					changeAnswer(e, optionKey)
				}}
			>
				<CardActionArea>
					<CardContent>
						<Typography variant="h6">{option}</Typography>
						<theme.Icon style={{ color: theme.color, fontSize: 50 }} />
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	)
}

const NewQuestionnaire = (): ReactElement => {
	const styles = useQuestionnaireStyles()
	const [answers, setAnswers] = useState<QuestionOptions[]>([])
	const [questionCount, setQuestionCount] = useState<number>(0)
	const [currentQuestion, setCurrentQuestion] = useState<IQuestionStructure>(
		questions[questionCount]
	)
	const [key] = useState(generateKey())

	useEffect(() => {
		setCurrentQuestion(questions[questionCount])
	}, [questionCount])

	const changeAnswer = (
		e: MouseEvent<HTMLDivElement>,
		answer: QuestionOptions
	): void => {
		e.preventDefault()
		const copy = [...answers]
		copy[questionCount] = answer
		setAnswers([...copy])
	}

	const isFinalQuestion = (): boolean => questionCount === questions.length - 1

	const handleSubmit = async (): Promise<void> => {
		alert("Submit!")
	}

	return (
		<Box>
			<Typography variant="subtitle1" className={styles.subtitle}>
				Question {questionCount + 1}
			</Typography>
			<Typography variant="h4" className={styles.title}>
				{currentQuestion.question}
			</Typography>

			<Grid container spacing={2}>
				{(Object.keys(currentQuestion.options) as QuestionOptions[]).map(
					(option: QuestionOptions, idx: number): ReactElement => (
						<QuestionnaireOptions
							optionKey={option}
							option={currentQuestion.options[option]}
							key={constructKey(key, idx)}
							changeAnswer={changeAnswer}
							currentAnswer={answers[questionCount] || false}
						/>
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

export default NewQuestionnaire
