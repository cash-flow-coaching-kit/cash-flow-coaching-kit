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
import { Actions, ActionItem } from "./_partials"
import { actionItemKeyTitleMapping } from "./_config/utilities"
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
import { ClientContext } from "../../../state/client"
import ActionPriorityUseCase from "../../../data/ActionChecklist/PriorityLogic"
import arraySwap from "../../../util/array/arraySwap"

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
}: IActionContainerProps): ReactElement => {
	const styles = useActionContainerStyles()
	const { dispatch } = useContext(ActionChecklistContext)
	const {
		state: { currentClient },
	} = useContext(ClientContext)
	const [key] = useState(generateKey())
	const [saving, setSaving] = useState<boolean>(false)
	const [lastSaved, setLastSaved] = useState<Date>(new Date())

	useEffect(() => {
		const id = setInterval(async () => {
			const DB = await ActionChecklistUseCase.findByContainer(identfier)
			const PRIOR = await ActionPriorityUseCase.findByContainer(identfier)

			if (!isEqual(DB, data) || !isEqual(PRIOR[0], priority)) {
				setSaving(true)
				await ActionChecklistUseCase.bulkUpdate(data)
				if (priority?.id) {
					await ActionPriorityUseCase.update(priority.id, priority)
				}
				setLastSaved(new Date())
				setSaving(false)
			}
		}, 1500)

		return (): void => clearInterval(id)
	}, [data, identfier, priority])

	/**
	 * Event that triggers once a item is dropped
	 *
	 * @param {DropResult} results
	 * @returns void
	 */
	const onDragEnd = (results: DropResult): void => {
		const { destination, source, draggableId } = results
		if (!destination) {
			return
		}
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return
		}

		const priorityCopy = { ...priority }
		priorityCopy.order = arraySwap<number>(
			priorityCopy.order,
			source.index,
			destination.index,
			parseInt(draggableId, 10)
		)

		dispatch({
			type: ActionChecklistActionTypes.UpdatePriorityOrder,
			payload: priorityCopy,
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
		if (currentClient?.id && priority.id) {
			// TODO: Pull into utilitiy -> ActionChecklistId
			const newActionItem: ActionChecklistStruct = {
				completed: false,
				actionContainer: identfier,
				description: "",
				clientId: currentClient.id,
				reviewBy: new Date(),
			}
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
					id: dbKey,
					...newActionItem,
				},
			})
			// TODO: End utility
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
					key={constructKey(key, checklistItem?.id)}
					draggableId={checklistItem?.id}
					index={idx}
					data={checklistItem}
					dispatch={dispatch}
				/>
			)
		}
		return <Fragment key={constructKey(key, idx)} />
	}

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
}

export default ActionContainer
