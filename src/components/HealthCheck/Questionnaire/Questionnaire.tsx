import React, { ReactElement, useState, MouseEvent, useContext } from "react"
import {
	Typography,
	Box,
	Button,
	Grid,
	Card,
	CardActionArea,
	CardContent,
} from "@material-ui/core"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { useHistory } from "react-router-dom"

import { questions, useQuestionnaireStyles, options } from "./config"
import { generateKey, constructKey } from "../../../util/key"
import addHealthCheck from "../../../data/healthChecks/addHC"
import { ClientContext } from "../../../state/client"
import { PrivateRoutes } from "../../../util/routes/routes"

const Questionnaire = (): ReactElement => {
	const {
		state: { currentClient },
	} = useContext(ClientContext)
	const [answers, setAnswers] = useState<number[]>([])
	const [question, setQuestion] = useState<number>(0)
	const [key] = useState(generateKey())
	const styles = useQuestionnaireStyles()
	const history = useHistory()

	const cardActive = (answer: number): boolean => {
		if (
			typeof answers[question] !== "undefined" &&
			answers[question] === answer
		) {
			return true
		}

		return false
	}

	const changeAnswer = (
		e: MouseEvent<HTMLDivElement>,
		answer: number
	): void => {
		e.preventDefault()
		const copy = [...answers]
		copy[question] = answer
		setAnswers([...copy])
	}

	const isFinalQuestion = (): boolean => question === questions.length - 1

	const handleSubmit = async (): Promise<void> => {
		if (
			typeof currentClient === "undefined" ||
			typeof currentClient.id === "undefined"
		) {
			console.error("Requires a client to be selected")
			return
		}
		try {
			// const dbKey = await ...
			await addHealthCheck({
				clientId: currentClient.id,
				answers,
			})

			// push `summary/{dbKey}`
			history.push(PrivateRoutes.HealthCheckList)
		} catch (e) {
			console.error(e.stack || e)
		}
	}

	return (
		<Box>
			<Typography variant="subtitle1" className={styles.subtitle}>
				Question {question + 1}
			</Typography>
			<Typography variant="h4" className={styles.title}>
				{questions[question]}
			</Typography>

			<Grid container spacing={2}>
				{options.map((option, idx) => (
					<Grid item xs={4} key={constructKey(key, idx)}>
						<Card
							raised={cardActive(option.answer)}
							onClick={(e: MouseEvent<HTMLDivElement>): void =>
								changeAnswer(e, option.answer)
							}
						>
							<CardActionArea>
								<CardContent className={styles.cardContent}>
									<Typography variant="h6">{option.title}</Typography>
									<option.Icon style={{ color: option.color, fontSize: 50 }} />
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>

			<Box className={styles.actions}>
				<Button
					startIcon={<ChevronLeftIcon />}
					variant="outlined"
					color="primary"
					disabled={question === 0}
					onClick={(e: MouseEvent<HTMLButtonElement>): void => {
						e.preventDefault()
						setQuestion(question - 1)
					}}
				>
					Previous question
				</Button>
				<Button
					endIcon={<ChevronRightIcon />}
					variant="contained"
					color="primary"
					disabled={typeof answers[question] === "undefined"}
					onClick={(e: MouseEvent<HTMLButtonElement>): void => {
						e.preventDefault()
						if (!isFinalQuestion()) {
							setQuestion(question + 1)
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
