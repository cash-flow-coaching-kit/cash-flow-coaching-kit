/* eslint-disable import/prefer-default-export */
import {
	IAnswerTheme,
	QuestionOptions,
	QuestionOptionsRecord,
	IQuestionStructure,
} from "./shape"
import findObjectIndexByValue from "../../../util/array/findObjectIndexByValue"

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

/**
 * Merges a list of questions with a set of answer options
 *
 * @param {string[]} questions Questions to merge with the option set
 * @param {QuestionOptionsRecord} options object of options
 * @returns {IQuestionStructure[]}
 */
export const questionOptionsMap = (
	questions: string[],
	options: QuestionOptionsRecord
): IQuestionStructure[] => {
	return questions.map(
		(q: string): IQuestionStructure => ({
			question: q,
			options,
		})
	)
}
