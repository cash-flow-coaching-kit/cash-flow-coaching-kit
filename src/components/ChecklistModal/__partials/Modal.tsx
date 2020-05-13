import React, { ReactElement, useState } from "react"
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
	DialogActions,
	Button,
} from "@material-ui/core"
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"

import { ModalProps, FormValues } from "../__config/shape"
import ConditionalChildren from "../../ConditionalChildren"
import Form from "./Form"
import { useModalStyles } from "../__config/styles"

/**
 * The modal used to add additional checklist items
 *
 * @export
 * @param {ModalProps} {
 * 	open,
 * 	onClose,
 * 	title,
 * 	subtitle,
 * 	children,
 * 	container,
 * }
 * @returns {ReactElement}
 */
export default function Modal({
	open,
	onClose,
	title,
	subtitle,
	children,
	container,
}: ModalProps): ReactElement {
	const styles = useModalStyles()
	const [submitting, setSubmitting] = useState<boolean>(false)

	// #region Submission functionality
	/**
	 * Functionality to handle the insertions of checklist items
	 *
	 * @param {FormValues} values
	 * @returns {boolean}
	 */
	function onFormSubmission(values: FormValues): boolean {
		setSubmitting(true)
		console.log(values)
		setSubmitting(false)
		return true
	}
	// #endregion

	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
			<DialogTitle>{title}</DialogTitle>

			{/* Dialog Content */}
			<DialogContent>
				<Typography variant="h5">{subtitle}</Typography>
				<Form onFormSubmission={onFormSubmission} />
				<ConditionalChildren node={children} />
			</DialogContent>

			{/* Dialog Actions */}
			<DialogActions className={styles.actions}>
				<Button
					color="primary"
					variant="contained"
					startIcon={<CheckIcon />}
					type="submit"
					form="checklist-bulk-add"
					disabled={submitting}
				>
					Confirm
				</Button>
				<Button startIcon={<CloseIcon />} onClick={onClose}>
					Cancel
				</Button>
			</DialogActions>
		</Dialog>
	)
}
