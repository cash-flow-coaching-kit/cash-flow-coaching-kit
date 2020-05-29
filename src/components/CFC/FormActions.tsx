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
}

/**
 * Form actions for the repeater form. This triggers a method to add a item to
 * a particular group
 *
 * @export
 * @param {FormActionsProps} {
 * 	addItem,
 * }
 * @returns {ReactElement}
 */
export default function FormActions({
	addItem,
}: FormActionsProps): ReactElement {
	return (
		<Box style={{ display: "flex" }} justifyContent="flex-end">
			<Button
				disableRipple
				variant="outlined"
				color="primary"
				startIcon={<AddIcon />}
				onClick={(e: MouseEvent<HTMLButtonElement>): void => {
					e.preventDefault()
					addItem()
				}}
			>
				Add new
			</Button>
		</Box>
	)
}
