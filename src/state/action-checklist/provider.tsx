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
	ActionChecklistNotesStruct,
} from "../../data/_config/shape"
import { ClientContext } from "../client"
import {
	newChecklistItem,
	newPriorityItem,
} from "../../data/ActionChecklist/_config/utilities"
import filterByActionContainer from "../../util/filters/ByActionContainer"
import ActionNotesUseCase from "../../data/ActionChecklist/NotesLogic"

type SyncResponse = [
	ActionChecklistStruct[],
	ActionChecklistPriorityStruct[],
	ActionChecklistNotesStruct[]
]

/**
 * Checks if a container has data and adds it into a db,
 * if required
 *
 * @param {ActionChecklistStruct[]} curData
 * @param {ActionChecklistPriorityStruct[]} curPriority
 * @param {PossibleActionItems} action
 * @param {ClientId} clientId
 * @returns Promise<SyncResponse>
 */
const createChecklistIfNeeded = async (
	curData: ActionChecklistStruct[],
	curPriority: ActionChecklistPriorityStruct[],
	curNotes: ActionChecklistNotesStruct[],
	action: PossibleActionItems,
	clientId: ClientId
): Promise<SyncResponse> => {
	const find = curData.filter(filterByActionContainer(action))

	if (find.length === 0) {
		const data = [...curData]
		const priority = [...curPriority]
		const newItem: ActionChecklistStruct = newChecklistItem(clientId, action)

		const id = await ActionChecklistUseCase.create(newItem)
		const newPriority: ActionChecklistPriorityStruct = newPriorityItem(
			clientId,
			action
		)

		const priorityId = await ActionPriorityUseCase.create(newPriority)
		priority.push({ ...newPriority, id: priorityId, order: [id] })
		data.push({ ...newItem, id })

		return [data, priority, curNotes]
	}

	return [curData, curPriority, curNotes]
}

/**
 * Complete the database sync. This will check if there
 * are any items in cash IN/OUT actions and if there isn't,
 * then create and update the state
 *
 * @param {Dispatch<ActionChecklistReducerActions>} dispatch
 * @param {ClientId} clientId
 * @returns Promise<void>
 */
const completeSyncing = (
	dispatch: Dispatch<ActionChecklistReducerActions>,
	clientId: ClientId
) => async (response: SyncResponse): Promise<void> => {
	const [data, priority, notes] = response
	const CIA = await createChecklistIfNeeded(
		data,
		priority,
		notes,
		"cashInActions",
		clientId
	)
	const COA = await createChecklistIfNeeded(
		CIA[0],
		CIA[1],
		CIA[2],
		"cashOutActions",
		clientId
	)

	dispatch({
		type: ActionChecklistActionTypes.UpdateDatabaseSync,
		payload: {
			data: [...COA[0]],
			priority: [...COA[1]],
			notes: [...COA[2]],
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
		if (currentClient?.id) {
			// Get all checklist and priority items and
			// then complete the sync with that data
			Promise.all([
				ActionChecklistUseCase.findByClient(currentClient.id),
				ActionPriorityUseCase.findByClient(currentClient.id),
				ActionNotesUseCase.findByClient(currentClient.id),
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
