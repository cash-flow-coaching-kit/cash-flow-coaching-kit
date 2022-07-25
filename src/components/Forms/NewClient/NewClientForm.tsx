import React, {
	ReactElement,
	useContext,
	useState,
	useEffect,
	ChangeEvent,
} from "react"
import {
	TextField,
	DialogContent,
	DialogActions,
	DialogContentText,
	Typography,
	Button,
	makeStyles,
} from "@material-ui/core"
import { useFormik } from "formik"
import { useHistory } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import addClient from "../../../data/client/addClient"
import { ClientContext } from "../../../state/client"
import { INCFormValues, INCFormErrors } from "./_config/shape"
import { PrivateRoutes } from "../../../util/routes/routes"
import Spacer from "../../Spacer"

const MAX_LENGTH = 40

// New client styling
const useNCDStyles = makeStyles((theme) => ({
	content: {
		borderStyle: "solid",
		borderColor: theme.palette.divider,
		borderWidth: "1px 0 1px 0",
		marginTop: theme.spacing(2),
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
		"& p": {
			margin: 0,
		},
	},
}))

interface NewClientFormProps {
	closeDialog: (cb: () => void) => void
	handleClose: any // eslint-disable-line
}

/**
 * Form used to register a new client. Uses Formik
 *
 * @returns ReactElement
 */
const NewClientForm = ({
	closeDialog,
	handleClose,
}: NewClientFormProps): ReactElement => {
	const { dispatch } = useContext(ClientContext)
	const initialValues: INCFormValues = {
		businessName: "",
	}
	const history = useHistory()
	const [characters, setCharacters] = useState(0)
	const styles = useNCDStyles()

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
	const hasError = (errors: INCFormErrors, key: keyof INCFormErrors): boolean =>
		typeof errors[key] !== "undefined" && errors[key] !== ""

	return (
		<form
			noValidate
			autoComplete="off"
			onSubmit={form.handleSubmit}
			id="add-new-business-form"
		>
			{/* Moved the DialogContent into the form for the submit to work in IE11 */}
			<DialogContent>
				<Typography>
					Add a business name to explore the Cash Flow Coaching Kit or use with
					your client{" "}
				</Typography>
				<Spacer />
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
			</DialogContent>
			<DialogContent className={styles.content}>
				<DialogContentText>
					The kit does not save information between sessions. <br></br>Use
					EXPORT DATA from Client List to save your files before you exit.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Cancel
				</Button>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					form="add-new-business-form"
				>
					Add business
				</Button>
			</DialogActions>
		</form>
	)
}

export default NewClientForm
