import React, {
	ReactElement,
	useReducer,
	Reducer,
	useMemo,
	ReactNode,
} from "react"
import { IActionChecklistState, ActionChecklistReducerActions } from "./shape"
import ActionChecklistReducer from "./reducer"
import ActionChecklistContext, { defaultActionChecklistState } from "./context"

/**
 * Context state provider element
 *
 * @param {ReactNode} {children}
 * @returns ReactElement
 */
const ActionChecklistProvider = (props: {
	children: ReactNode
}): ReactElement => {
	const [state, dispatch] = useReducer<
		Reducer<IActionChecklistState, ActionChecklistReducerActions>
	>(ActionChecklistReducer, defaultActionChecklistState)

	const value = useMemo(
		(): IActionChecklistState => ({
			...state,
			dispatch,
		}),
		[state]
	)

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <ActionChecklistContext.Provider value={value} {...props} />
}

export default ActionChecklistProvider
