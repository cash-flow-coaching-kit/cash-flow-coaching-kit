import React, { ReactElement, MouseEvent, useContext, useState } from "react"
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

interface IStructure {
	items: {
		[key: string]: {
			id: string
			completed: boolean
			description: string
		}
	}
	order: string[]
}

const ActionContainer = ({
	identfier,
	data,
}: IActionContainerProps): ReactElement => {
	const styles = useActionContainerStyles()
	const { dispatch } = useContext(ActionChecklistContext)
	const [key] = useState(generateKey())

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

	const addNewAction = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault()
		dispatch({
			type: ActionChecklistActionTypes.AddNewActionItem,
			payload: {
				key: identfier,
			},
		})
	}

	const preventAddingNew = (): boolean => {
		const keys = Object.keys(data.items)
		return data.items[lastInArray(keys)].description === ""
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
								{data.order.map((id, index) => (
									<ActionItem
										key={constructKey(key, index)}
										draggableId={data.items[id].id}
										index={index}
										data={data.items[id]}
									/>
								))}
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
