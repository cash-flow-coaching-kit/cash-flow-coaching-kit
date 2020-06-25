import { createContext } from "react"
import { ICFCState } from "./shape"

export const defaultCFCState: ICFCState = {
	dispatch: () => null,
	duplicateError: false,
	invalidDateError: false,
	copyCanvasActive: false,
	questionValues: {
		one: 0,
		two: 0,
		three: 0,
		four: undefined,
	},
}

const CFCContext = createContext(defaultCFCState)

export default CFCContext
