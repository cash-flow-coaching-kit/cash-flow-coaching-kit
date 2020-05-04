/* eslint-disable import/prefer-default-export */

import React, { ReactElement } from "react"
import { Typography } from "@material-ui/core"
import { QuestionOptions } from "../../_config/shape"
import { getOptionByAnswer } from "../../_config/utilities"
import { answerTheming, questions } from "../../_config/data"

/**
 * Checks if a question has a answer and displays the answer
 * with a theme
 *
 * @param {number} idx Question index
 * @param {QuestionOptions[]|undefined} answers Answers given in the quiz
 * @returns (boolean | ReactElement)
 */
export const answerText = (
	idx: number,
	answers: QuestionOptions[] | undefined
): ReactElement | boolean => {
	if (answers && typeof answers[idx] !== "undefined") {
		const { color } = getOptionByAnswer(answers[idx], answerTheming)
		return (
			<Typography style={{ color, fontWeight: 500 }}>
				{questions[idx].options[answers[idx]]}
			</Typography>
		)
	}

	return false
}
