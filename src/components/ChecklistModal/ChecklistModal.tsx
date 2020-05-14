import React, { ReactElement, useState } from "react"
import { Box, Button } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

import { ChecklistModalProps } from "./__config/shape"
import { Modal } from "./__partials"

/**
 * Modal used to add additional items to a checklist group
 *
 * @export
 * @param {ChecklistModalProps} {
 * 	container,
 * 	title,
 * 	subtitle,
 * }
 * @returns {ReactElement}
 */
export default function ChecklistModal({
	container,
	title,
	subtitle,
	children,
}: ChecklistModalProps): ReactElement {
	const [modalState, setModalState] = useState<boolean>(false)

	return (
		<Box>
			<Button
				variant="outlined"
				size="large"
				color="primary"
				startIcon={<AddIcon />}
				onClick={(): void => setModalState(true)}
			>
				Add to action checklist
			</Button>
			<Modal
				open={modalState}
				onClose={(): void => setModalState(false)}
				title={title}
				subtitle={subtitle}
				container={container}
			>
				{children}
			</Modal>
		</Box>
	)
}
