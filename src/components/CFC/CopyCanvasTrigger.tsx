import React, { ReactElement, useState, useContext, useEffect } from "react"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import { CopyCanvasDialog } from "../../content/dialog"
import CFCContext from "../../state/CFC/context"
import { CFCActionTypes } from "../../state/CFC/shape"

/**
 * Component used to trigger the copy canvas modal
 *
 * @export
 * @returns {ReactElement}
 */
export default function CopyCanvasTrigger(): ReactElement {
	const [open, setOpen] = useState(false)
	const { dispatch } = useContext(CFCContext)

	useEffect(() => {
		dispatch({
			type: CFCActionTypes.ChangeCopyCanvasActive,
			payload: open,
		})
	}, [open, dispatch])

	const onClose = (): void => {
		setOpen(false)
	}
	const onOpen = (): void => {
		setOpen(true)
	}

	return (
		<>
			<ListItem button onClick={onOpen}>
				<ListItemIcon>
					<FileCopyIcon />
				</ListItemIcon>
				<ListItemText>Copy Canvas</ListItemText>
			</ListItem>
			<CopyCanvasDialog open={open} onClose={onClose} />
		</>
	)
}
