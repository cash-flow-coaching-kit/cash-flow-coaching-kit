import React, { ReactElement, MouseEvent } from "react"
import {
	Card,
	CardActionArea,
	CardContent,
	Typography,
	makeStyles,
} from "@material-ui/core"
import { QuestionOptions } from "../shared/outline"
import { getOptionByAnswer } from "../shared/utilities"
import { answerTheming } from "../shared/config"

interface IQuestionnaireOptions {
	optionKey: QuestionOptions
	option: string
	changeAnswer(e: MouseEvent<HTMLDivElement>, answer: QuestionOptions): void
	currentAnswer: QuestionOptions | boolean
}

const useOptionTileStyles = makeStyles(() => ({
	cardContent: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}))

const OptionTile = ({
	optionKey,
	option,
	currentAnswer,
	changeAnswer,
}: IQuestionnaireOptions): ReactElement => {
	const style = useOptionTileStyles()
	const theme = getOptionByAnswer(optionKey, answerTheming)

	return (
		<Card
			raised={currentAnswer ? currentAnswer === optionKey : false}
			onClick={(e: MouseEvent<HTMLDivElement>): void => {
				changeAnswer(e, optionKey)
			}}
		>
			<CardActionArea>
				<CardContent className={style.cardContent}>
					<Typography variant="h6">{option}</Typography>
					<theme.Icon style={{ color: theme.color, fontSize: 50 }} />
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default OptionTile
