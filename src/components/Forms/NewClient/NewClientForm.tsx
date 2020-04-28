import React, { ReactElement, useContext } from "react"
import { makeStyles, TextField, Button, Box } from "@material-ui/core"
import { useFormik } from "formik"
import addClient from "../../../data/client/addClient"
import { ClientContext } from "../../../state/client"

const useClientFormStyles = makeStyles((theme) => ({
	input: {
		width: "100%",
		marginBottom: theme.spacing(2),
	},
}))

interface INCFormValues {
	businessName: string
}

interface INCFormErrors {
	businessName?: string
}

const NewClientForm = (): ReactElement => {
	const { dispatch } = useContext(ClientContext)
	const styles = useClientFormStyles()
	const initialValues: INCFormValues = {
		businessName: "",
	}

	const form = useFormik({
		initialValues,
		validate: (values): INCFormErrors => {
			const errors: INCFormErrors = {}

			if (values.businessName === "") {
				errors.businessName = "Please enter a business name"
			}

			return errors
		},
		onSubmit: async (values) => {
			await addClient(dispatch, {
				id: 1,
				name: values.businessName,
			})

			form.resetForm()
		},
	})

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
