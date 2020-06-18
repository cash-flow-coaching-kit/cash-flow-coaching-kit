import React, {
	ReactElement,
	MouseEvent,
	useContext,
	useState,
	Fragment,
	useEffect,
} from "react"
import { Box } from "@material-ui/core"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { isEqual } from "lodash-es"
import ExpandableNav from "../../ExpandableNav"
import { IActionContainerProps } from "./_config/shape"
import { useActionContainerStyles } from "./_config/styles"
import { Actions, ActionItem, ActionNotes } from "./_partials"
import { actionItemKeyTitleMapping, allowNotes } from "./_config/utilities"
import { ActionChecklistContext } from "../../../state/action-checklist"
import { ActionChecklistActionTypes } from "../../../state/action-checklist/shape"
import lastInArray from "../../../util/array/lastInArray"
import { generateKey, constructKey } from "../../../util/lists/key"
import {
	ActionChecklistId,
	ActionChecklistStruct,
} from "../../../data/_config/shape"
import findObjectIndexByValue from "../../../util/array/findObjectIndexByValue"
import ActionChecklistUseCase from "../../../data/ActionChecklist/ChecklistLogic"
import ActionPriorityUseCase from "../../../data/ActionChecklist/PriorityLogic"
import arraySwap from "../../../util/array/arraySwap"
import { newChecklistItem } from "../../../data/ActionChecklist/_config/utilities"

/**
 * A single Action items wrapper
 *
 * @param {PossibleActionItems} {identfier}
 * @param {ISingleActionItem} {data}
 * @returns ReactElement
 */
const ActionContainer = ({
	identfier,
	data,
	priority,
	notes,
	currentClient,
}: IActionContainerProps): ReactElement => {
	// #region Component functionality
	const styles = useActionContainerStyles()
	const { dispatch, hideCompleted } = useContext(ActionChecklistContext)
	const [key] = useState(generateKey())
	const [saving, setSaving] = useState<boolean>(false)
	const [shouldSave, setShouldSave] = useState<boolean>(true)
	const [lastSaved, setLastSaved] = useState<Date>(new Date())

	useEffect(() => {
		// Run every 1.5s
		const id = setInterval(async () => {
			if (!shouldSave) return
			// Get the database data for this container
			const DB = await ActionChecklistUseCase.findByClientAndContainer(
				identfier,
				currentClient
			)
			const PRIOR = await ActionPriorityUseCase.findByClientAndContainer(
				identfier,
				currentClient
			)

			// If it is out of sync with the state
			if (!isEqual(DB, data) || !isEqual(PRIOR[0], priority)) {
				// Bulk update the database to insync with the state
				setSaving(true)
				await ActionChecklistUseCase.bulkUpdate(data)
				if (priority?.id) {
					await ActionPriorityUseCase.update(priority.id, priority)
				}
				setLastSaved(new Date())
				setSaving(false)
			}
		}, 2000)

		return (): void => clearInterval(id)
	}, [data, identfier, priority, currentClient, shouldSave])

	/**
	 * Event that triggers once a item is dropped
	 *
	 * @param {DropResult} results
	 * @returns void
	 */
	const onDragEnd = (results: DropResult): void => {
		const { destination, source, draggableId } = results

		if (
			!destination ||
			(destination.droppableId === source.droppableId &&
				destination.index === source.index)
		) {
			return
		}

		const order = arraySwap<string>(
			priority.order,
			source.index,
			destination.index,
			draggableId
		)

		dispatch({
			type: ActionChecklistActionTypes.UpdatePriorityOrder,
			payload: {
				...priority,
				order,
			},
		})
	}

	/**
	 * Handles the state change when adding a new action item
	 *
	 * @param {MouseEvent<HTMLButtonElement>} e
	 * @returns void
	 */
	const addNewAction = async (
		e: MouseEvent<HTMLButtonElement>
	): Promise<void> => {
		e.preventDefault()
		if (currentClient && priority.id) {
			const newActionItem = newChecklistItem(currentClient, identfier)
			// Adds checklist item to db
			const dbKey = await ActionChecklistUseCase.create(newActionItem)
			// Updates db item with order
			await ActionPriorityUseCase.update(priority.id, {
				...priority,
				order: [...priority.order, dbKey],
			})

			// Dispatch the state change
			dispatch({
				type: ActionChecklistActionTypes.AddNewActionItem,
				payload: {
					checklist: {
						id: dbKey,
						...newActionItem,
					},
					priority: priority.id,
				},
			})
		}
	}

	/**
	 * Deletes a action from the db and state
	 *
	 * @async
	 * @param {ActionChecklistId} id ID of the checklist to delete
	 * @returns Promise<void>
	 */
	const deleteAction = async (id: ActionChecklistId): Promise<void> => {
		if (priority.id) {
			setShouldSave(false)
			// remove the checklist item from the db
			await ActionChecklistUseCase.delete(id)
			// remove the priority item from the db if it is removing the last item
			// in the order
			if (priority.order.length === 1) {
				await ActionPriorityUseCase.delete(priority.id)
			}
			// remove the checklist item from state and priority order
			dispatch({
				type: ActionChecklistActionTypes.RemoveActionItem,
				payload: {
					targetId: id,
					priorityId: priority.id,
				},
			})

			setShouldSave(true)
		}
	}

	/**
	 * Checks if the latest item has content before
	 * letting a user add more actions
	 *
	 * @returns boolean
	 */
	const preventAddingNew = (): boolean => {
		return lastInArray(data).description === ""
	}

	/**
	 * Checks if the item is the last in the list
	 *
	 * @returns boolean
	 */
	const lastItemInList = (): boolean => {
		return (
			data.length === 1 &&
			(identfier === "cashInActions" ||
				identfier === "cashOutActions" ||
				typeof notes === "undefined" ||
				notes?.notes === "")
		)
	}

	/**
	 * Map method to render all the action items
	 * in priority order
	 *
	 * @param {ActionChecklistId} id
	 * @param {number} idx
	 * @returns ReactElement
	 */
	const mapThroughPriorityOrder = (
		id: ActionChecklistId,
		idx: number
	): ReactElement => {
		const index = findObjectIndexByValue(data, "id", id)

		if (index === -1) return <Fragment key={constructKey(key, idx)} />

		const checklistItem: ActionChecklistStruct = data[index]
		if (checklistItem?.id) {
			return (
				<ActionItem
					key={checklistItem?.id}
					draggableId={checklistItem?.id}
					index={idx}
					data={checklistItem}
					dispatch={dispatch}
					deleteAction={deleteAction}
					lastItemInList={lastItemInList()}
					globalHide={hideCompleted}
				/>
			)
		}
		return <Fragment key={constructKey(key, idx)} />
	}

	// #endregion

	// #region Component Markup
	return (
		<ExpandableNav title={actionItemKeyTitleMapping(identfier)}>
			<DragDropContext onDragEnd={onDragEnd}>
				<Box className={styles.dropdownBody}>
					<Droppable droppableId={identfier}>
						{(provided): ReactElement => (
							<div
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{priority.order.map(mapThroughPriorityOrder)}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
					{allowNotes(identfier) && (
						<ActionNotes
							currentClient={currentClient}
							container={identfier}
							note={notes}
							dispatch={dispatch}
						/>
					)}
					<Actions
						addNewAction={addNewAction}
						disabled={preventAddingNew()}
						saving={saving}
						lastSaved={lastSaved}
					/>
				</Box>
			</DragDropContext>
		</ExpandableNav>
	)
	// #endregion
}

export default React.memo(ActionContainer)
