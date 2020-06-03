import React, { ReactElement, MouseEvent } from "react"
import {
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	CardActions,
	Button,
} from "@material-ui/core"
import { format } from "date-fns"
import { Link } from "react-router-dom"
import AddIcon from "@material-ui/icons/Add"
import { CFCStruct, CFCId } from "../../data/_config/shape"
import { canvasDisplayTitle } from "./__config/utilities"
import { routeVarReplacement, PrivateRoutes } from "../../util/routes/routes"
import IconDeleteButtonwDialog from "../IconDeleteButton/IconDeleteButtonwDialog"
import useStyles from "../Forms/CFC/__config/styles"

interface CanvasListProps {
	data: CFCStruct[]
	remove: (id: CFCId) => Promise<void>
}

type ButtonClick = (e: MouseEvent<HTMLButtonElement>) => void

/**
 * Displays a list of canvases with a way to add a new one
 *
 * @export
 * @param {CanvasListProps} {
 * 	data,
 * 	remove,
 * }
 * @returns {ReactElement}
 */
export default function CanvasList({
	data,
	remove,
}: CanvasListProps): ReactElement {
	const styles = useStyles()

	/**
	 * Creates the link to the edit canvas page
	 *
	 * @param {CFCId} id
	 * @returns {string}
	 */
	function itemLink(id: CFCId): string {
		return routeVarReplacement(PrivateRoutes.CFCEdit, [[":id", id.toString()]])
	}

	/**
	 * Triggers the parent remove method
	 *
	 * @param {CFCId} id
	 * @returns {ButtonClick}
	 */
	function onDelete(id: CFCId): ButtonClick {
		return (e): void => {
			e.preventDefault()
			remove(id)
		}
	}

	/**
	 * Renders the canvas list item
	 *
	 * @param {CFCStruct} item
	 * @returns {ReactElement}
	 */
	function renderCanvas(item: CFCStruct): ReactElement {
		if (!item?.id) return <></>

		return (
			<ListItem key={item.id} button component={Link} to={itemLink(item.id)}>
				<ListItemText
					primary={canvasDisplayTitle(item)}
					secondary={
						item.createdAt
							? format(item.createdAt, "dd/MM/yyyy hh:mm a")
							: false
					}
				/>
				<ListItemSecondaryAction>
					<IconDeleteButtonwDialog onClick={onDelete(item.id)} />
				</ListItemSecondaryAction>
			</ListItem>
		)
	}

	return (
		<>
			<List>{data.map(renderCanvas)}</List>
			<CardActions className={styles.box}>
				<Button
					variant="contained"
					color="primary"
					startIcon={<AddIcon />}
					component={Link}
					to={PrivateRoutes.CFC}
				>
					Create new Canvas
				</Button>
			</CardActions>
		</>
	)
}
