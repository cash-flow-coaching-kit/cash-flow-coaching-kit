import React, { ReactElement, useState } from "react"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import { CopyCanvasDialog } from "../../content/dialog"

/**
 * Component used to trigger the copy canvas modal
 *
 * @export
 * @returns {ReactElement}
 */
export default function CopyCanvasTrigger(): ReactElement {
	const [open, setOpen] = useState(false)
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
