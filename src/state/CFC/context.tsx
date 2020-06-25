import { createContext } from "react"
import { ICFCState } from "./shape"

export const defaultCFCState: ICFCState = {
	dispatch: () => null,
	duplicateError: false,
	invalidDateError: false,
	questionValues: {
		one: 0,
		two: 0,
		three: 0,
		four: undefined,
	},
	canvasItemUpdater: [],
	setCanvasItemUpdater: () => null,
}

const CFCContext = createContext(defaultCFCState)

export default CFCContext
