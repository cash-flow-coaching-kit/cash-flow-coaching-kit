import React, {
	ReactElement,
	MouseEvent,
	useContext,
	useState,
	Fragment,
} from "react"
import { Box } from "@material-ui/core"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
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
	const [key] = useState(generateKey())

	/**
	 * Event that triggers once a item is dropped
	 *
	 * @param {DropResult} results
	 * @returns void
	 */
	const onDragEnd = (results: DropResult): void => {
		// TODO: Implement with a reducer action
		// const { destination, source, draggableId } = results
		// if (!destination) {
		// 	return
		// }
		// if (
		// 	destination.droppableId === source.droppableId &&
		// 	destination.index === source.index
		// ) {
		// 	return
		// }
		// setData({
		// 	...data,
		// 	order: arraySwap<string>(
		// 		data.order,
		// 		source.index,
		// 		destination.index,
		// 		draggableId
		// 	),
		// })
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
		const newActionItem: ActionChecklistStruct = {
			completed: false,
			actionContainer: identfier,
			description: "",
			// TODO: Fix
			clientId: 12,
		}
		const dbKey = await ActionChecklistUseCase.create(newActionItem)
		dispatch({
			type: ActionChecklistActionTypes.AddNewActionItem,
			payload: {
				id: dbKey,
				...newActionItem,
			},
		})
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
		return (
			<ActionItem
				key={constructKey(key, idx)}
				draggableId={checklistItem?.id || -1}
				index={idx}
				data={checklistItem}
			/>
		)
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
					<Actions addNewAction={addNewAction} disabled={preventAddingNew()} />
				</Box>
			</DragDropContext>
		</ExpandableNav>
	)
}

export default ActionContainer
