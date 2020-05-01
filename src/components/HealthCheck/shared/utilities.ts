/* eslint-disable import/prefer-default-export */
import { IAnswerTheme, QuestionOptions } from "./outline"
import findObjectIndexByValue from "../../../util/findObjectIndexByValue"

/**
 * Gets the theme for a specific answer type
 *
 * @param {QuestionOptions} answer Answer needed
 * @param {IAnswerTheme[]} options A config object with the answer theme
 * @returns IAnswerTheme
 */
export const getOptionByAnswer = (
	answer: QuestionOptions,
	options: IAnswerTheme[]
): IAnswerTheme => {
	return options[findObjectIndexByValue(options, "answer", answer)]
}
