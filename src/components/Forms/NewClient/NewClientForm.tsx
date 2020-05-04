import React, { ReactElement, useContext } from "react"
import { TextField, Button, Box } from "@material-ui/core"
import { useFormik } from "formik"
import addClient from "../../../data/client/addClient"
import { ClientContext } from "../../../state/client"
import useClientFormStyles from "./_config/styles"
import { INCFormValues, INCFormErrors } from "./_config/shape"

/**
 * Form used to register a new client. Uses Formik
 *
 * @returns ReactElement
 */
const NewClientForm = (): ReactElement => {
	const { dispatch } = useContext(ClientContext)
	const styles = useClientFormStyles()
	const initialValues: INCFormValues = {
		businessName: "",
	}

	// Defines the Formik form
	const form = useFormik({
		initialValues,
		validate: (values): INCFormErrors => {
			const errors: INCFormErrors = {}

			// Minor validation
			if (values.businessName === "") {
				errors.businessName = "Please enter a business name"
			}

			return errors
		},
		onSubmit: async (values) => {
			// Adds a client to the db + state
			await addClient(dispatch, {
				id: 1,
				name: values.businessName,
			})

			// resets the form
			form.resetForm()
		},
	})

	/**
	 * Checks if there is a error for a specific field
	 *
	 * @param {INCFormErrors} errors Form error object
	 * @param {keyof INCFormErrors} key Error item to look for
	 * @returns boolean
	 */
	const hasError = (
		errors: INCFormErrors,
		key: keyof INCFormErrors
	): boolean => {
		return typeof errors[key] !== "undefined" && errors[key] !== ""
	}

	return (
		<form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
			<TextField
				id="businessName"
				name="businessName"
				label="Business name"
				variant="outlined"
				className={styles.input}
				onChange={form.handleChange}
				value={form.values.businessName}
				error={hasError(form.errors, "businessName")}
				helperText={
					hasError(form.errors, "businessName")
						? form.errors.businessName
						: null
				}
				autoFocus
			/>
			<Box>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					disabled={form.isSubmitting}
				>
					Add business
				</Button>
			</Box>
		</form>
	)
}

export default NewClientForm
