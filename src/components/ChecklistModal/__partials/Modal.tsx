import React, {
	ReactElement,
	useState,
	useContext,
	useEffect,
	useRef,
	MouseEvent,
} from "react"
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
	DialogActions,
	Button,
} from "@material-ui/core"

import { ModalProps, FormValues } from "../__config/shape"
import ConditionalChildren from "../../ConditionalChildren"
import Form from "./Form"
import { useModalStyles } from "../__config/styles"
import {
	ActionChecklistStruct,
	ClientId,
	ActionChecklistPriorityStruct,
	ActionChecklistPriorityId,
} from "../../../data/_config/shape"
import {
	newChecklistItem,
	newPriorityItem,
	bulkAddChecklists,
} from "../../../data/ActionChecklist/_config/utilities"
import { ClientContext } from "../../../state/client"
import { ActionChecklistContext } from "../../../state/action-checklist"
import { ActionChecklistActionTypes } from "../../../state/action-checklist/shape"
import ActionPriorityUseCase from "../../../data/ActionChecklist/PriorityLogic"

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
	showSnackbar,
}: ModalProps): ReactElement {
	const styles = useModalStyles()
	const [submitting, setSubmitting] = useState<boolean>(false)
	const [priority, setPriority] = useState<ActionChecklistPriorityStruct>()
	const {
		state: { currentClient },
	} = useContext(ClientContext)
	const { dispatch } = useContext(ActionChecklistContext)
	const submitBtn = useRef<HTMLInputElement>(null)

	useEffect(() => {
		const fetchLinkedPriority = async (id: ClientId): Promise<void> => {
			const prior = await ActionPriorityUseCase.findByClientAndContainer(
				container,
				id
			)

			if (prior.length > 0) {
				setPriority(prior[0])
			} else {
				// If a priority item could not be find, create a new item
				const newPriority = newPriorityItem(id, container)
				const pID = await ActionPriorityUseCase.create(newPriority)
				setPriority({
					...newPriority,
					id: pID,
				})
			}
		}

		if (currentClient?.id) {
			fetchLinkedPriority(currentClient.id)
		}
	}, [currentClient, container])

	// #region Submission functionality
	/**
	 * Functionality to handle the insertions of checklist items
	 *
	 * @param {FormValues} values
	 * @returns {boolean}
	 */
	async function onFormSubmission(values: FormValues): Promise<boolean> {
		if (currentClient?.id && priority?.id) {
			setSubmitting(true)

			// get the current client id
			const clientId: ClientId = currentClient.id

			// get the priority id
			const priorityId: ActionChecklistPriorityId = priority.id

			// construct all the items (without an id)
			const items = values.items.reduce(
				(collection: ActionChecklistStruct[], current) => {
					return [
						...collection,
						{
							...newChecklistItem(clientId, container),
							...current,
						},
					]
				},
				[]
			)

			const [newItems, success] = await bulkAddChecklists(items, priorityId)

			if (!success) {
				return false
			}

			// dispatch the bulk add reducer method
			dispatch({
				type: ActionChecklistActionTypes.BulkAddActionItems,
				payload: {
					items: newItems,
					priorityId,
				},
			})

			setSubmitting(false)
			return true
		}

		return false
	}
	// #endregion

	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
			<DialogTitle>{title}</DialogTitle>

			{/* Dialog Content */}
			<DialogContent>
				<Typography variant="h5">{subtitle}</Typography>
				<Form
					onFormSubmission={onFormSubmission}
					closeModal={onClose}
					showSnackbar={showSnackbar}
					ref={submitBtn}
				/>
				<ConditionalChildren node={children} />
			</DialogContent>

			{/* Dialog Actions */}
			<DialogActions className={styles.actions}>
				<Button onClick={onClose}>Cancel</Button>
				<Button
					color="primary"
					variant="contained"
					type="submit"
					form="checklist-bulk-add"
					disabled={submitting}
					onClick={(e: MouseEvent<HTMLButtonElement>): void => {
						if (submitBtn.current) {
							e.preventDefault()
							submitBtn.current.click()
						}
					}}
				>
					Add to checklist
				</Button>
			</DialogActions>
		</Dialog>
	)
}
