import React, { ReactElement, useState } from "react"
import {
	Button,
	Box,
	Divider,
	FormControlLabel,
	Checkbox,
	TextField,
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

import { FormProps } from "../__config/shape"
import { checklistOptions } from "../__config/utilities"
import { generateKey, constructKey } from "../../../util/lists/key"
import { useFormStyles } from "../__config/styles"
import IfElseLoading from "../../IfElseLoading"

/**
 * Form used to add predefined checklist items
 *
 * @export
 * @param {FormProps} { container, client }
 * @returns {ReactElement}
 */
export default function Form({ container, client }: FormProps): ReactElement {
	const [fetched, setFetched] = useState(true)
	const [key] = useState(generateKey())

	const styles = useFormStyles()
	const options = checklistOptions(container)

	/*
		TODO: Should get possible values in the database and update
		the state of the form
	*/

	// #region Render checklist items
	/**
	 * Used with a `.map` method, this renders all the checklist
	 * items for the current container group
	 *
	 * @param {string} option
	 * @param {number} idx
	 * @returns {ReactElement}
	 */
	function mapChecklistItems(option: string, idx: number): ReactElement {
		return (
			<FormControlLabel
				label={option}
				key={constructKey(key, idx)}
				control={<Checkbox name={option} />}
			/>
		)
	}
	// #endregion

	return (
		<form autoComplete="off" noValidate>
			<IfElseLoading if={fetched}>
				{options.map(mapChecklistItems)}
				<Divider className={styles.divider} />
				<TextField
					multiline
					rows={3}
					variant="outlined"
					className={styles.fill}
					label="Notes"
				/>
			</IfElseLoading>

			{/* ACTIONS */}
			<Box className={styles.actions}>
				<Button
					color="primary"
					variant="contained"
					startIcon={<AddIcon />}
					className={styles.fill}
				>
					Add to action checklist
				</Button>
			</Box>
		</form>
	)
}
