import React, { ReactElement } from "react"
import AddIcon from "@material-ui/icons/Add"
import { Box, Button, Typography } from "@material-ui/core"
import { format } from "date-fns"
import { useActionsStyles } from "../_config/styles"
import { IActionsProps } from "../_config/shape"

/**
 * Component to display all the actions for a
 * action container
 *
 * @param {IActionsProps} props
 * @returns ReactElement
 */
const Actions = ({
	addNewAction,
	disabled,
	saving,
	lastSaved,
}: IActionsProps): ReactElement => {
	const styles = useActionsStyles()

	return (
		<Box className={styles.actionsWrapper}>
			<Button
				variant="outlined"
				color="primary"
				startIcon={<AddIcon />}
				onClick={addNewAction}
				disabled={disabled}
			>
				Add action
			</Button>
			<Typography
				variant="overline"
				color="textSecondary"
				className={styles.saveIndicator}
			>
				{saving ? "Saving..." : `Saved at ${format(lastSaved, "H:mm:ss a")}`}
			</Typography>
		</Box>
	)
}

export default Actions
