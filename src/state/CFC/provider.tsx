import React, {
	ReactNode,
	ReactElement,
	useReducer,
	Reducer,
	useMemo,
	useState,
} from "react"
import CFCReducer from "./reducer"
import { ICFCState, CFCReducerActions, ItemUpdaterFunction } from "./shape"
import CFCContext, { defaultCFCState } from "./context"

type ReducerMakeup = Reducer<ICFCState, CFCReducerActions>

/**
 * Context state provider element
 *
 * @param {{ children: ReactNode }} props
 * @returns {ReactElement}
 */
function CFCProvider(props: { children: ReactNode }): ReactElement {
	const [state, dispatch] = useReducer<ReducerMakeup>(
		CFCReducer,
		defaultCFCState
	)

	const [canvasItemUpdater, setCanvasItemUpdater] = useState<
		ItemUpdaterFunction[]
	>([])

	const value = useMemo(
		(): ICFCState => ({
			...state,
			dispatch,
			canvasItemUpdater,
			setCanvasItemUpdater,
		}),
		[state, canvasItemUpdater]
	)

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <CFCContext.Provider value={value} {...props} />
}

export default CFCProvider
