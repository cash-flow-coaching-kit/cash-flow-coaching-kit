import React, { ReactElement, MouseEvent } from "react"
import DeleteIcon from "@material-ui/icons/Delete"
import { Tooltip, IconButton } from "@material-ui/core"

interface ButtonProps {
	onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function IconDeleteButton({
	onClick,
}: ButtonProps): ReactElement {
	return (
		<Tooltip title="Delete">
			<IconButton onClick={onClick}>
				<DeleteIcon />
			</IconButton>
		</Tooltip>
	)
}
