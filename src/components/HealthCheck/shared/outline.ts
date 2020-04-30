import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import { SvgIconTypeMap } from "@material-ui/core"
import { PrivateRoutes, PublicRoutes } from "../../../util/routes/routes"

export type QuestionOptions = "positive" | "negative" | "neutral"

export type QuestionOptionsRecord = Record<QuestionOptions, string>

export interface IQuestionStructure {
	question: string
	options: QuestionOptionsRecord
	learnMore?: PrivateRoutes | PublicRoutes
}

export interface IAnswerTheme {
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
	color: string
	answer: QuestionOptions
}
