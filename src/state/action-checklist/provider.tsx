// TODO: PLEASE CLEAN THIS UP

import React, {
	ReactElement,
	useReducer,
	Reducer,
	useMemo,
	ReactNode,
	useEffect,
	Dispatch,
	useContext,
} from "react"
import {
	IActionChecklistState,
	ActionChecklistReducerActions,
	ActionChecklistActionTypes,
	PossibleActionItems,
} from "./shape"
import ActionChecklistReducer from "./reducer"
import ActionChecklistContext, { defaultActionChecklistState } from "./context"
import ActionChecklistUseCase from "../../data/ActionChecklist/ChecklistLogic"
import ActionPriorityUseCase from "../../data/ActionChecklist/PriorityLogic"
import {
	ActionChecklistStruct,
	ActionChecklistPriorityStruct,
	ClientId,
} from "../../data/_config/shape"
import findObjectIndexByValue from "../../util/array/findObjectIndexByValue"
import { ClientContext } from "../client"

const createChecklistIfNeeded = async (
	curData: ActionChecklistStruct[],
	curPriority: ActionChecklistPriorityStruct[],
	action: PossibleActionItems,
	clientId: ClientId
): Promise<[ActionChecklistStruct[], ActionChecklistPriorityStruct[]]> => {
	const data = [...curData]
	const priority = [...curPriority]
	const find = findObjectIndexByValue(data, "actionContainer", action)

	if (find === -1) {
		const newItem: ActionChecklistStruct = {
			clientId,
			completed: false,
			description: "",
			actionContainer: action,
		}

		const id = await ActionChecklistUseCase.create(newItem)
		const newPriority: ActionChecklistPriorityStruct = {
			clientId,
			actionContainer: action,
			order: [id],
		}

		const priorityId = await ActionPriorityUseCase.create(newPriority)

		priority.push({ ...newPriority, id: priorityId })
		data.push({ ...newItem, id })
	}

	return [data, priority]
}

const completeSyncing = (
	dispatch: Dispatch<ActionChecklistReducerActions>,
	clientId: ClientId
) => async (
	response: [ActionChecklistStruct[], ActionChecklistPriorityStruct[]]
): Promise<void> => {
	const [data, priority] = response
	const newData = [...data]
	const newPriority = [...priority]
	const CIA = await createChecklistIfNeeded(
		newData,
		newPriority,
		"cashInActions",
		clientId
	)
	const COA = await createChecklistIfNeeded(
		CIA[0],
		CIA[1],
		"cashOutActions",
		clientId
	)

	dispatch({
		type: ActionChecklistActionTypes.UpdateDatabaseSync,
		payload: {
			data: [...COA[0]],
			priority: [...COA[1]],
		},
	})
}

/**
 * Context state provider element
 *
 * @param {ReactNode} {children}
 * @returns ReactElement
 */
const ActionChecklistProvider = (props: {
	children: ReactNode
}): ReactElement => {
	const {
		state: { currentClient },
	} = useContext(ClientContext)

	type ACReducer = Reducer<IActionChecklistState, ActionChecklistReducerActions>

	const [state, dispatch] = useReducer<ACReducer>(
		ActionChecklistReducer,
		defaultActionChecklistState
	)

	useEffect(() => {
		if (currentClient && currentClient.id) {
			console.log("AAAAND sync")
			Promise.all([
				ActionChecklistUseCase.syncWithDatabase(),
				ActionPriorityUseCase.syncWithDatabase(),
			]).then(completeSyncing(dispatch, currentClient.id))
		}
	}, [currentClient])

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
