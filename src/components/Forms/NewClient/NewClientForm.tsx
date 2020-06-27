import React, {
	ReactElement,
	useContext,
	useState,
	useEffect,
	ChangeEvent,
} from "react"
import { TextField } from "@material-ui/core"
import { useFormik } from "formik"
import { useHistory } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import addClient from "../../../data/client/addClient"
import { ClientContext } from "../../../state/client"
import { INCFormValues, INCFormErrors } from "./_config/shape"
import { PrivateRoutes } from "../../../util/routes/routes"

const MAX_LENGTH = 40

interface NewClientFormProps {
	closeDialog: (cb: () => void) => void
}

/**
 * Form used to register a new client. Uses Formik
 *
 * @returns ReactElement
 */
const NewClientForm = ({ closeDialog }: NewClientFormProps): ReactElement => {
	const { dispatch } = useContext(ClientContext)
	const initialValues: INCFormValues = {
		businessName: "",
	}
	const history = useHistory()
	const [characters, setCharacters] = useState(0)

	// Defines the Formik form
	const form = useFormik({
		initialValues,
		validate: (values): INCFormErrors => {
			const errors: INCFormErrors = {}

			// Minor validation
			if (values.businessName === "") {
				// eslint-disable-next-line
				errors.businessName = "Please enter a business name"
			}

			return errors
		},
		onSubmit: async (values) => {
			// Adds a client to the db + state
			await addClient(dispatch, {
				id: uuidv4(),
				name: values.businessName,
			})

			// resets the form
			form.resetForm()
			closeDialog((): void => {
				// eslint-disable-next-line
				history.push(PrivateRoutes.CoachingKit)
			})
		},
	})

	function handleChange(e: ChangeEvent<HTMLInputElement>): void {
		if (e.target.value.length > MAX_LENGTH) {
			e.preventDefault()
			return
		}

		form.setFieldValue("businessName", e.target.value)
	}

	useEffect(() => {
		setCharacters(form.values.businessName.length)
	}, [form.values.businessName])

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
		<form
			noValidate
			autoComplete="off"
			onSubmit={form.handleSubmit}
			id="add-new-business-form"
		>
			<TextField
				id="businessName"
				name="businessName"
				label="Business name"
				variant="outlined"
				fullWidth
				onChange={handleChange}
				value={form.values.businessName}
				error={hasError(form.errors, "businessName")}
				helperText={
					hasError(form.errors, "businessName")
						? form.errors.businessName
						: `${characters}/${MAX_LENGTH}`
				}
				autoFocus
			/>
		</form>
	)
}

export default NewClientForm
