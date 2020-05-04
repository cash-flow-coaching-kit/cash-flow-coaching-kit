import { MouseEvent } from "react"
import { QuestionOptions } from "../../_config/shape"

/**
 * OptionTile props
 *
 * @interface IQuestionnaireOptions
 */
export interface IQuestionnaireOptions {
	optionKey: QuestionOptions
	option: string
	changeAnswer(e: MouseEvent<HTMLDivElement>, answer: QuestionOptions): void
	currentAnswer: QuestionOptions | boolean
}
