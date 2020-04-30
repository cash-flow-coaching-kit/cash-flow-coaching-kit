import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined"
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied"
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied"
import { green, red, orange } from "@material-ui/core/colors"
import {
	IQuestionStructure,
	IAnswerTheme,
	QuestionOptionsRecord,
} from "./outline"

const questionOptionsMap = (
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

export const fourQuestionsContent = [
	"Am I trading profitably?",
	"Have I put enough aside to meet my regular financial commitments?",
	"Does my business have enough to spend on myself and pay others?",
	"Is my business improving its financial position?",
]

const fourQuestionOptions: QuestionOptionsRecord = {
	positive: "Yes",
	negative: "No",
	neutral: "I don't know",
}

export const additionalQuestions = [
	"How do you feel about planning your business?",
	"How do you feel about understanding your cash flow?",
	"How do you feel about keeping your books and records?",
	"How do you feel about meeting your regular financial commitments?",
	"How do you feel about funding your business?",
	"How do you feel about tracking your business performance?",
]

const additionalQuestionsOptions: QuestionOptionsRecord = {
	positive: "Confident",
	negative: "Not Confident",
	neutral: "Unsure",
}

export const questions: IQuestionStructure[] = [
	...questionOptionsMap(fourQuestionsContent, fourQuestionOptions),
	...questionOptionsMap(additionalQuestions, additionalQuestionsOptions),
]

export const answerTheming: IAnswerTheme[] = [
	{
		Icon: EmojiEmotionsOutlinedIcon,
		color: green[500],
		answer: "positive",
	},
	{
		Icon: SentimentVeryDissatisfiedIcon,
		color: red[500],
		answer: "negative",
	},
	{
		Icon: SentimentDissatisfiedIcon,
		color: orange[500],
		answer: "neutral",
	},
]
