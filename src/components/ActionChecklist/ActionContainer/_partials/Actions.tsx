import React, { ReactElement } from "react"
import AddIcon from "@material-ui/icons/Add"
import { Box, Button } from "@material-ui/core"
import { useActionsStyles } from "../_config/styles"
import { IActionsProps } from "../_config/shape"

const Actions = ({ addNewAction, disabled }: IActionsProps): ReactElement => {
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
		</Box>
	)
}

export default Actions
