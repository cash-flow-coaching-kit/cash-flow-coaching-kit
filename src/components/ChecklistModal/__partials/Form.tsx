import React, { ReactElement, useState, MouseEvent } from "react"
import { useFormik } from "formik"
import { Box, Button, Grid, TextField, IconButton } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import DeleteIcon from "@material-ui/icons/Delete"

import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { FormProps, FormValues, FormItem } from "../__config/shape"
import { generateKey, constructKey } from "../../../util/lists/key"
import { createNewFormItem } from "../__config/utilities"
import { useFormStyles } from "../__config/styles"

/**
 * Form component for the `ChecklistModal` component
 *
 * @export
 * @param {FormProps} { onFormSubmission }
 * @returns {ReactElement}
 */
export default function Form({ onFormSubmission }: FormProps): ReactElement {
	const [key] = useState(generateKey())
	const style = useFormStyles()

	// #region Formik definition
	const initialValues: FormValues = {
		items: [{ description: "", reviewBy: new Date() }],
	}

	const form = useFormik({
		initialValues,
		onSubmit(values: FormValues) {
			const success = onFormSubmission(values)
			console.log(success)
		},
	})

	/**
	 * Updates the form.values.items state with a new array of data
	 * This will completely replace the state
	 *
	 * @param {FormItem[]} items
	 */
	function updateItemsState(items: FormItem[]): void {
		form.setFormikState({
			...form,
			values: {
				...form.values,
				items,
			},
		})
	}

	/**
	 * A custom change handler for the datepicker because it is special
	 *
	 * @param {(Date | null)} date
	 * @param {number} idx
	 */
	function customDatepickerChange(date: Date | null, idx: number): void {
		if (!date) return

		const newItems = form.values.items.reduce(
			(items: FormItem[], item, index) => {
				return items.concat(index === idx ? { ...item, reviewBy: date } : item)
			},
			[]
		)

		updateItemsState(newItems)
	}
	// #endregion

	// #region Add new checklist items
	/**
	 * Adds another item to the form state value
	 *
	 */
	function addNewItem(): void {
		const newItems = form.values.items.concat(createNewFormItem())
		updateItemsState(newItems)
	}
	// #endregion

	// #region Check if able to add new
	/**
	 * Checks if the user is able to add a new item based on the
	 * description field
	 *
	 * @returns {boolean}
	 */
	function allowedToAdd(): boolean {
		const emptyIndex = form.values.items.findIndex((i) => i.description === "")
		return emptyIndex === -1
	}
	// #endregion

	// #region Remove item from state
	/**
	 * Removes an item or resets the last item in the state
	 *
	 * @param {MouseEvent<HTMLButtonElement>} e
	 * @param {number} idx
	 */
	function removeItem(e: MouseEvent<HTMLButtonElement>, idx: number): void {
		if (form.values.items.length === 1) {
			updateItemsState(initialValues.items)
			return
		}

		const newItems = form.values.items.filter((item, i) => i !== idx)
		updateItemsState(newItems)
	}
	// #endregion

	// #region Rendering form fields
	/**
	 * Used within a `map` state, this will render all the form
	 * elements per item in the state
	 *
	 * @param {FormItem} item
	 * @param {number} idx
	 * @returns {ReactElement}
	 */
	function renderFormFieldGroup(item: FormItem, idx: number): ReactElement {
		return (
			<Grid
				container
				spacing={2}
				key={constructKey(key, idx)}
				className={style.inputWrapper}
			>
				{/* Textfield */}
				<Grid item xs={8}>
					<TextField
						name={`items[${idx}].description`}
						label="Customise your action"
						variant="outlined"
						value={item.description}
						onChange={form.handleChange}
						className={style.input}
					/>
				</Grid>
				{/* Datepicker */}
				<Grid item xs={3}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							inputVariant="outlined"
							format="dd/MM/yyyy"
							label="Review by"
							name={`items[${idx}].reviewBy`}
							value={item.reviewBy}
							onChange={(date: Date | null): void => {
								customDatepickerChange(date, idx)
							}}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
							className={style.input}
						/>
					</MuiPickersUtilsProvider>
				</Grid>
				{/* Item actions */}
				<Grid item xs={1} className={style.itemAction}>
					<IconButton onClick={(e): void => removeItem(e, idx)}>
						<DeleteIcon />
					</IconButton>
				</Grid>
			</Grid>
		)
	}
	// #endregion

	return (
		<>
			<form
				noValidate
				autoComplete="off"
				onSubmit={form.handleSubmit}
				id="checklist-bulk-add"
				className={style.root}
			>
				{/* Render all the form items items */}
				{form.values.items.map(renderFormFieldGroup)}
			</form>

			{/* Adding additional items */}
			<Box className={style.actions}>
				<Button
					color="primary"
					variant="outlined"
					startIcon={<AddIcon />}
					onClick={addNewItem}
					disabled={!allowedToAdd()}
				>
					Add action
				</Button>
			</Box>
		</>
	)
}
