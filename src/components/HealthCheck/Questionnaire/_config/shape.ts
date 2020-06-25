import { MouseEvent } from "react"
import { QuestionOptions } from "../../_config/shape"
import { DatabaseId } from "../../../../data/_config/shape"

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

/**
 * Prop definition for the Questionnaire component
 *
 * @export
 * @interface IQuestionnaireProps
 */
export interface IQuestionnaireProps {
	previousAnswers?: QuestionOptions[]
	dbID?: DatabaseId
}
