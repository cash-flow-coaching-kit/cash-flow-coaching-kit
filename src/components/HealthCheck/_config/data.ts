import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined"
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied"
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied"
import { green, red, orange } from "@material-ui/core/colors"
import {
	IQuestionStructure,
	IAnswerTheme,
	QuestionOptionsRecord,
} from "./shape"
import { PrivateRoutes } from "../../../util/routes/routes"
import { questionOptionsMap } from "./utilities"

/**
 * Four key questions
 *
 * @exports
 */
export const fourQuestionsContent = [
	"Am I trading profitably?",
	"Have I put enough aside to meet my regular financial commitments?",
	"Does my business have enough to spend on myself and pay others?",
	"Is my business improving its financial position?",
]

/**
 * Options for the four key questions
 *
 */
const fourQuestionOptions: QuestionOptionsRecord = {
	positive: "Yes",
	negative: "No",
	neutral: "I don't know",
}

/**
 * Generic options for the questions in the health check
 *
 */
const additionalQuestionsOptions: QuestionOptionsRecord = {
	positive: "Confident",
	negative: "Not Confident",
	neutral: "Unsure",
}

/**
 * Defines a list of questions used in the health check
 *
 */
export const questions: IQuestionStructure[] = [
	...questionOptionsMap(fourQuestionsContent, fourQuestionOptions),
	{
		question: "How do you feel about planning your business?",
		options: { ...additionalQuestionsOptions },
		learnMore: PrivateRoutes.DTPlanningBusiness,
	},
	{
		question: "How do you feel about understanding your cash flow?",
		options: { ...additionalQuestionsOptions },
		learnMore: PrivateRoutes.DTManagingCashFlow,
	},
	{
		question: "How do you feel about keeping your books and records?",
		options: { ...additionalQuestionsOptions },
		learnMore: PrivateRoutes.DTRecordKeeping,
	},
	{
		question:
			"How do you feel about meeting your regular financial commitments?",
		options: { ...additionalQuestionsOptions },
		learnMore: PrivateRoutes.DTPlanningFinanicalCommitments,
	},
	{
		question: "How do you feel about funding your business?",
		options: { ...additionalQuestionsOptions },
		learnMore: PrivateRoutes.DTFundingBusiness,
	},
	{
		question: "How do you feel about tracking your business performance?",
		options: { ...additionalQuestionsOptions },
		learnMore: PrivateRoutes.DTTrackingPerformance,
	},
]

/**
 * Theming for the different health check answers
 *
 * @exports
 */
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
