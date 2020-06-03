import React, { ReactElement, MouseEvent } from "react"
import { Box, Button } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

/**
 * Prop definition for the Form Actions component
 *
 * @interface FormActionsProps
 */
interface FormActionsProps {
	addItem: () => void
	addDisabled: boolean
}

/**
 * Form actions for the repeater form. This triggers a method to add a item to
 * a particular group
 *
 * @export
 * @param {FormActionsProps} {
 * 	addItem,
 * 	addDisabled
 * }
 * @returns {ReactElement}
 */
export default function FormActions({
	addItem,
	addDisabled,
}: FormActionsProps): ReactElement {
	return (
		<Box style={{ display: "flex" }} justifyContent="flex-end">
			<Button
				variant="outlined"
				color="primary"
				startIcon={<AddIcon />}
				onClick={(e: MouseEvent<HTMLButtonElement>): void => {
					e.preventDefault()
					addItem()
				}}
				disabled={addDisabled}
			>
				Add new
			</Button>
		</Box>
	)
}
