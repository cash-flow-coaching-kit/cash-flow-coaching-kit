import React, {
	ReactElement,
	useReducer,
	Reducer,
	useMemo,
	ReactNode,
	useEffect,
	Dispatch,
	useCallback,
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
import {
	newChecklistItem,
	newPriorityItem,
} from "../../data/ActionChecklist/_config/utilities"
import filterByActionContainer from "../../util/filters/ByActionContainer"
import ActionNotesUseCase from "../../data/ActionChecklist/NotesLogic"
import useCurrentClient from "../client/useCurrentClient"

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
		// Creates a copy of the current data
		const data = [...curData]
		const priority = [...curPriority]

		// Create the new items
		const newItem: ActionChecklistStruct = newChecklistItem(clientId, action)
		const newPriority: ActionChecklistPriorityStruct = newPriorityItem(
			clientId,
			action
		)

		// Add the items to the database
		const id = await ActionChecklistUseCase.create(newItem)
		const priorityId = await ActionPriorityUseCase.create({
			...newPriority,
			order: [id],
		})

		// Add the data to the state
		const priorityWithItem = priority.concat({
			...newPriority,
			id: priorityId,
			order: [id],
		})
		const dataWithItem = data.concat({ ...newItem, id })

		// return the new states
		return [dataWithItem, priorityWithItem, curNotes]
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

	// Check for cash in actions
	const CIA = await createChecklistIfNeeded(
		data,
		priority,
		notes,
		"cashInActions",
		clientId
	)

	// Check for cash out actions
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
	const [currentClient, synced] = useCurrentClient()

	type ACReducer = Reducer<IActionChecklistState, ActionChecklistReducerActions>

	const [state, dispatch] = useReducer<ACReducer>(
		ActionChecklistReducer,
		defaultActionChecklistState
	)

	const fetchDBActions = useCallback(async () => {
		if (currentClient?.id) {
			// Get all checklist and priority items and
			// then complete the sync with that data
			const res = await Promise.all([
				ActionChecklistUseCase.findByClient(currentClient.id),
				ActionPriorityUseCase.findByClient(currentClient.id),
				ActionNotesUseCase.findByClient(currentClient.id),
			])

			completeSyncing(dispatch, currentClient.id)(res)
		}
	}, [currentClient])

	useEffect(() => {
		if (synced) {
			fetchDBActions()
		}
	}, [synced, fetchDBActions])

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
