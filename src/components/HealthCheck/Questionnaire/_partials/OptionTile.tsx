import React, { ReactElement, MouseEvent } from "react"
import {
	Card,
	CardActionArea,
	CardContent,
	Typography,
	useTheme,
} from "@material-ui/core"
import { getOptionByAnswer } from "../../_config/utilities"
import { answerTheming } from "../../_config/data"
import { useOptionTileStyles } from "../_config/styles"
import { IQuestionnaireOptions } from "../_config/shape"

/**
 * A single tile for the Health check questionnaire
 *
 * @param {QuestionOptions} {optionKey}
 * @param {string} {option}
 * @param {(QuestionOptions | boolean)} {currentAnswer}
 * @param {Function} {changeAnswer}
 * @returns ReactElement
 */
const OptionTile = ({
	optionKey,
	option,
	currentAnswer,
	changeAnswer,
}: IQuestionnaireOptions): ReactElement => {
	const style = useOptionTileStyles()
	const theme = getOptionByAnswer(optionKey, answerTheming)
	const muiTheme = useTheme()

	return (
		<Card
			onClick={(e: MouseEvent<HTMLDivElement>): void => {
				changeAnswer(e, optionKey)
			}}
			style={{
				boxShadow:
					currentAnswer === optionKey
						? `inset 0 0 0 3px ${muiTheme.palette.primary.main}`
						: "",
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
