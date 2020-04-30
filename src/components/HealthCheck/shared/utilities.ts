import { IAnswerTheme, QuestionOptions } from "./outline"
import findObjectIndexByValue from "../../../util/findObjectIndexByValue"

// eslint-disable-next-line import/prefer-default-export
export const getOptionByAnswer = (
	answer: QuestionOptions,
	options: IAnswerTheme[]
): IAnswerTheme => {
	return options[findObjectIndexByValue(options, "answer", answer)]
}
