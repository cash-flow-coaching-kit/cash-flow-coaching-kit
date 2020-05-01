import React, {
	useReducer,
	Reducer,
	ReactElement,
	ReactNode,
	useMemo,
} from "react"
import ClientReducer from "./client-reducer"
import { IClientState, IClientReducerAction } from "./client-outline"
import ClientContext, { defaultClientState } from "./client-context"

/**
 * Context state provider element
 *
 * @param {ReactNode} {children}
 */
const ClientProvider = (props: { children: ReactNode }): ReactElement => {
	const [state, dispatch] = useReducer<
		Reducer<IClientState, IClientReducerAction>
	>(ClientReducer, defaultClientState)

	const value = useMemo(
		(): IClientState => ({
			...state,
			dispatch,
		}),
		[state]
	)

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <ClientContext.Provider value={value} {...props} />
}

export default ClientProvider
