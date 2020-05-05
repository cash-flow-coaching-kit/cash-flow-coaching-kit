import { createContext } from "react"
import { IActionChecklistState, ISingleActionItem } from "./shape"

const defaultActionData: ISingleActionItem = {
	items: {
		"1": {
			id: "1",
			completed: true,
			description: "asdfa",
		},
	},
	order: ["1"],
}

// Default context for action checklist
export const defaultActionChecklistState: IActionChecklistState = {
	dispatch: () => null,
	hideCompleted: false,
	reviewBy: new Date(),
	databaseSyced: false,
	actionItems: {
		cashInActions: defaultActionData,
		cashOutActions: defaultActionData,
		planningBusiness: null,
		recordKeeping: null,
		funding: null,
		managing: null,
		planningCommitments: null,
		tracking: null,
		transition: null,
	},
}

// Creates the context
const ActionChecklistContext = createContext(defaultActionChecklistState)

export default ActionChecklistContext
