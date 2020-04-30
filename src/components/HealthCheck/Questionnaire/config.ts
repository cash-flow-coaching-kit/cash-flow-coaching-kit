import { makeStyles, SvgIconTypeMap } from "@material-ui/core"
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined"
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied"
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied"
import { green, red, orange } from "@material-ui/core/colors"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import findObjectIndexByValue from "../../../util/findObjectIndexByValue"

// eslint-disable-next-line import/prefer-default-export
export const questions = [
	"Am I trading profitably?",
	"Have I put enough aside to meet my regular financial commitments?",
	"Does my business have enough to spend on myself and pay others?",
	"Is my business improving its financial position?",
	"How do you feel about planning your business?",
	"How do you feel about understanding your cash flow?",
	"How do you feel about keeping your books and records?",
	"How do you feel about meeting your regular financial commitments?",
	"How do you feel about funding your business?",
	"How do you feel about tracking your business performance?",
]

export const useQuestionnaireStyles = makeStyles((theme) => ({
	actions: {
		display: "flex",
		justifyContent: "space-between",
		marginTop: theme.spacing(5),
	},
	subtitle: {
		marginTop: theme.spacing(2),
		lineHeight: 1,
	},
	title: {
		marginBottom: theme.spacing(3),
	},
	cardContent: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}))

export interface IQuestionOptions {
	title: string
	Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
	color: string
	answer: number
}

export const options: IQuestionOptions[] = [
	{
		title: "Confident",
		Icon: EmojiEmotionsOutlinedIcon,
		color: green[500],
		answer: 1,
	},
	{
		title: "Not Confident",
		Icon: SentimentVeryDissatisfiedIcon,
		color: red[500],
		answer: -1,
	},
	{
		title: "Unsure",
		Icon: SentimentDissatisfiedIcon,
		color: orange[500],
		answer: 0,
	},
]

export const getOptionByAnswer = (
	answer: number,
	opts: IQuestionOptions[]
): IQuestionOptions => {
	return opts[findObjectIndexByValue(opts, "answer", answer)]
}
