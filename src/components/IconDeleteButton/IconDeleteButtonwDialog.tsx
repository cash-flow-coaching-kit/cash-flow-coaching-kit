import React, { ReactElement, MouseEvent, useState } from "react"
import { ButtonProps } from "./IconDeleteButton"
import IconDeleteButton from "."
import ConfirmDialogue from "../ConfirmDialogue"

/**
 * Icon delete button with a confirm dialog component
 *
 * @export
 * @param {ButtonProps} {
 * 	onClick,
 * }
 * @returns {ReactElement}
 */
export default function IconDeleteButtonwDialog({
	onClick,
}: ButtonProps): ReactElement {
	const [dialogOpen, setDialogOpen] = useState<boolean>(false)

	/**
	 * Closes the dialog
	 *
	 */
	function onDialogClose(): void {
		setDialogOpen(false)
	}

	/**
	 * Performs onClick prop function
	 *
	 * @param {MouseEvent<HTMLButtonElement>} e
	 */
	function onDialogConfirm(e: MouseEvent<HTMLButtonElement>): void {
		onClick(e)
		onDialogClose()
	}

	/**
	 * Opens the dialog
	 *
	 * @param {MouseEvent<HTMLButtonElement>} e
	 */
	function triggerDialog(e: MouseEvent<HTMLButtonElement>): void {
		e.preventDefault()
		setDialogOpen(true)
	}

	return (
		<>
			<IconDeleteButton onClick={triggerDialog} />
			<ConfirmDialogue
				open={dialogOpen}
				onClose={onDialogClose}
				onCancel={onDialogClose}
				onConfirm={onDialogConfirm}
			>
				Are you sure you want to remove this item?
			</ConfirmDialogue>
		</>
	)
}
