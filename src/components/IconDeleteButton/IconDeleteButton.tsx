import React, { ReactElement, MouseEvent } from "react"
import DeleteIcon from "@material-ui/icons/Delete"
import { Tooltip, IconButton } from "@material-ui/core"

/**
 * Prop definition for the IconDeleteButton
 *
 * @export
 * @interface ButtonProps
 */
export interface ButtonProps {
	onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

/**
 * A abstraction for a Icon button used for deleting
 *
 * @export
 * @param {ButtonProps} {
 * 	onClick,
 * }
 * @returns {ReactElement}
 */
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
