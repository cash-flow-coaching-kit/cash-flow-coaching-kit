import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import { SvgIconTypeMap } from "@material-ui/core"

export type QuestionOptions = "positive" | "negative" | "neutral"

export type QuestionOptionsRecord = Record<QuestionOptions, string>

export interface IQuestionStructure {
	question: string
	options: QuestionOptionsRecord
}

export interface IAnswerTheme {
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
	color: string
	answer: QuestionOptions
}
