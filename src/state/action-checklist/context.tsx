import { createContext } from "react"
import { IActionChecklistState } from "./shape"

// Default context for action checklist
export const defaultActionChecklistState: IActionChecklistState = {
	dispatch: () => null,
	hideCompleted: false,
	databaseSyced: false,
	priority: [],
	checklistCollection: [],
}

// Creates the context
const ActionChecklistContext = createContext(defaultActionChecklistState)

export default ActionChecklistContext
