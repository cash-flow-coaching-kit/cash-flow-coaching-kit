import { createContext } from "react"
import { IActionChecklistState } from "./shape"
import {
	ActionChecklistStruct,
	ActionChecklistPriorityStruct,
} from "../../data/_config/shape"

const defaultChecklist: ActionChecklistStruct[] = [
	{
		id: 1,
		clientId: 12,
		completed: false,
		description: "Hello world",
		actionContainer: "cashInActions",
	},
	{
		id: 2,
		clientId: 12,
		completed: false,
		description: "Hello world",
		actionContainer: "cashInActions",
	},
	{
		id: 3,
		clientId: 12,
		completed: true,
		description: "Hello world",
		actionContainer: "cashOutActions",
	},
	{
		id: 4,
		clientId: 12,
		completed: false,
		description: "Hello world",
		actionContainer: "cashInActions",
	},
]

const defaultPriority: ActionChecklistPriorityStruct[] = [
	{
		id: 1,
		clientId: 12,
		order: [4, 2, 1],
		actionContainer: "cashInActions",
	},
	{
		id: 2,
		clientId: 12,
		order: [3],
		actionContainer: "cashOutActions",
	},
]

// Default context for action checklist
export const defaultActionChecklistState: IActionChecklistState = {
	dispatch: () => null,
	hideCompleted: false,
	reviewBy: new Date(),
	databaseSyced: false,
	priority: defaultPriority,
	checklistCollection: defaultChecklist,
}

// Creates the context
const ActionChecklistContext = createContext(defaultActionChecklistState)

export default ActionChecklistContext
