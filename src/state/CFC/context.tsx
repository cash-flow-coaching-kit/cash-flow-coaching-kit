import { createContext } from "react"
import { ICFCState } from "./shape"

export const defaultCFCState: ICFCState = {
	dispatch: () => null,
	duplicateError: false,
	invalidDateError: false,
}

const CFCContext = createContext(defaultCFCState)

export default CFCContext
