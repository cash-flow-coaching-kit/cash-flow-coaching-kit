import { IQuestionStructure, QuestionOptions } from "../../_config/shape"

/**
 * Prop structure for the `<QuestionSummaries>` component
 *
 */
export interface IQuestionSummaries {
	questions: IQuestionStructure[]
	tileAnswers: QuestionOptions[]
}

/**
 * Prop structure for the `<SummaryTitle>` component
 *
 * @interface ISummaryTitleProps
 */
export interface ISummaryTitleProps {
	createdAt?: number
}
