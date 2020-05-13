import { getOptionByAnswer, questionOptionsMap } from "../_config/utilities"
import { answerTheming } from "../_config/data"
import { QuestionOptionsRecord, IQuestionStructure } from "../_config/shape"

describe("Unit tests for HealthCheck utilities", () => {
  test("Able to get a theme for a answer", function() {
    const theme = getOptionByAnswer("positive", answerTheming)
    expect(theme).toMatchObject(answerTheming[0])
    expect(typeof theme.color).toBe("string")
    expect(theme).toHaveProperty("Icon")
  })

  test("Question and options can be mapped together", function() {
    const questions = ["question 1", "question 2"]
    const options: QuestionOptionsRecord = {
      positive: "Confident",
      negative: "Not Confident",
      neutral: "Unsure",
    }
    const combo: IQuestionStructure[] = [
      {question: questions[0], options},
      {question: questions[1], options},
    ]

    expect(questionOptionsMap(questions, options)).toEqual(combo)
  })
})
