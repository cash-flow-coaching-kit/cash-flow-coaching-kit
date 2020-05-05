import React, { ReactElement } from "react"
import {
	Grid,
	Checkbox,
	TextField,
	IconButton,
	Tooltip,
	Typography,
} from "@material-ui/core"
import DragIndicatorIcon from "@material-ui/icons/DragIndicator"
import DeleteIcon from "@material-ui/icons/Delete"
import { Draggable } from "react-beautiful-dnd"
import { useActionItemStyles } from "../_config/styles"
import { IActionItemProps } from "../_config/shape"

const ActionItem = ({
	index,
	draggableId,
	data,
}: IActionItemProps): ReactElement => {
	const styles = useActionItemStyles()

	return (
		<Draggable draggableId={draggableId} index={index}>
			{(provided): ReactElement => (
				<div
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...provided.draggableProps}
					ref={provided.innerRef}
					className="action-item"
				>
					<Grid container spacing={3} className={styles.gridRoot}>
						<Grid item xs={1}>
							<Tooltip title="Mark as done">
								<Checkbox
									checked={data.completed}
									inputProps={{ "aria-label": "completed checkbox" }}
								/>
							</Tooltip>
						</Grid>
						<Grid item xs={9}>
							{data.completed ? (
								<Typography className={styles.completedText}>
									{data.description}
								</Typography>
							) : (
								<TextField
									className={styles.textfield}
									id="outlined-basic"
									label="Action item"
									variant="outlined"
									value={data.description}
								/>
							)}
						</Grid>
						<Grid item xs={2} className={styles.actions}>
							<Tooltip title="Delete">
								<IconButton>
									<DeleteIcon />
								</IconButton>
							</Tooltip>
							<Tooltip title="Reposition">
								<IconButton
									className={styles.dragIcon}
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...provided.dragHandleProps}
								>
									<DragIndicatorIcon />
								</IconButton>
							</Tooltip>
						</Grid>
					</Grid>
				</div>
			)}
		</Draggable>
	)
}

export default ActionItem
