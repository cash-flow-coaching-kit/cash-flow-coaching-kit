import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import { SvgIconTypeMap } from "@material-ui/core"
import { PrivateRoutes, PublicRoutes } from "../../../util/routes/routes"

export type QuestionOptions = "positive" | "negative" | "neutral"

export type QuestionOptionsRecord = Record<QuestionOptions, string>

/**
 * Structure for the questions on the Health check questionnaire
 *
 * @export
 * @interface IQuestionStructure
 */
export interface IQuestionStructure {
	question: string
	options: QuestionOptionsRecord
	learnMore?: PrivateRoutes | PublicRoutes
}

/**
 * Structure for the theming per question option
 *
 * @export
 * @interface IAnswerTheme
 */
export interface IAnswerTheme {
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
	color: string
	answer: QuestionOptions
}
