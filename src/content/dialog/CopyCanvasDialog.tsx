import React, { ReactElement, useState, useCallback, useEffect } from "react"
import {
	Dialog,
	DialogTitle,
	Typography,
	DialogActions,
	DialogContent,
	Button,
} from "@material-ui/core"
import { useMachine } from "@xstate/react"
import { useHistory, useParams } from "react-router-dom"
import { useFormik } from "formik"
import { omit } from "lodash-es"
import { isValid } from "date-fns"
import fetchMachine from "../../components/Forms/CFC/__config/machine"
import useCurrentClient from "../../state/client/useCurrentClient"
import { CFCStruct, CFCPanelSlice, CanvasType } from "../../data/_config/shape"
import CFCUseCase from "../../data/CFC/CFCLogic"
import DataNotFound from "../../components/CFC/DataNotFound"
import Loading from "../../components/Loading"
import { CanvasTitle, ConfigPanel } from "../../components/CFC"
import { newTimestamp } from "../../util/dates"
import Spacer from "../../components/Spacer"
import changeDate, {
	CanvasDateKeys,
} from "../../components/Forms/CFC/changeDate"
import inPlanOrForecast from "../../components/Forms/CFC/inPlanOrForecast"
import { calcClosingBalance } from "../../state/CFC/accumulators"
import createURLParams from "../../components/Forms/CFC/createURLParams"
import { routeVarReplacement, PrivateRoutes } from "../../util/routes/routes"
import { performDupFind } from "../../components/CFC/__config/utilities"
import { DuplicateCanvasError } from "../../components/CFC/ConfigPanel"

/**
 * Prop definition for the CopyCanvasDialog component
 *
 * @interface CopyCanvasDialogProps
 */
interface CopyCanvasDialogProps {
	open: boolean
	onClose: () => void
}

/**
 * Dialog component to handle copying of a canvas
 *
 * @export
 * @returns {ReactElement}
 */
export default function CopyCanvasDialog({
	open,
	onClose,
}: CopyCanvasDialogProps): ReactElement {
	// #region State Management
	const [stateMachine, changeState] = useMachine(fetchMachine)
	const [useCustomTitle, setUseCustomTitle] = useState(false)
	const history = useHistory()
	const { id } = useParams()
	const [currentClient] = useCurrentClient()
	const [canvasData, setCanvasData] = useState<CFCStruct>()
	const [isDuplicate, setIsDuplicate] = useState(false)
	// #endregion

	// #region Formik
	/**
	 * Checks if the opening balance should be replaced
	 *
	 * @param {CanvasType} oldType
	 * @param {CanvasType} type
	 * @returns {boolean}
	 */
	function replaceOpening(oldType: CanvasType, type: CanvasType): boolean {
		return !inPlanOrForecast(oldType) && inPlanOrForecast(type)
	}

	const {
		setValues,
		handleChange,
		values,
		handleSubmit,
		setFieldValue,
	} = useFormik<CFCPanelSlice>({
		initialValues: {
			canvasTitle: "",
			canvasType: "review",
			canvasTimeFrame: "biannually",
			canvasStartDate: new Date(),
			canvasEndDate: new Date(),
		},
		onSubmit: async (formValues: CFCPanelSlice) => {
			if (canvasData && currentClient?.id) {
				// Merge the form and canvas data
				const data: CFCStruct = {
					...canvasData,
					...formValues,
					openingBalance: replaceOpening(
						canvasData.canvasType,
						formValues.canvasType
					)
						? calcClosingBalance(canvasData)
						: canvasData.openingBalance,
					createdAt: newTimestamp(),
					canvasTitle: useCustomTitle ? formValues.canvasTitle : "",
				}
				// remove the id & clientid field form data
				const cleaned = omit(data, ["id"])
				// create the new canvas
				const newCanvasId = await CFCUseCase.create(cleaned)
				// redirect to the edit page for the new canvas
				const query = createURLParams(cleaned, useCustomTitle)
				// eslint-disable-next-line
				history.push(
					`${routeVarReplacement(PrivateRoutes.CFCEdit, [
						[":id", `${newCanvasId}`],
					])}?${query}`
				)
				// close the modal
				onClose()
			}
		},
	})

	useEffect(() => {
		if (!useCustomTitle) {
			setFieldValue("canvasTitle", "")
		}
	}, [useCustomTitle, setFieldValue])
	// #endregion

	// #region Data Fetching
	const fetchCanvasData = useCallback(async () => {
		if (currentClient?.id) {
			// fetches the data
			const data = await CFCUseCase.findById(id)
			// If it can't be found move to reject
			if (!data) {
				changeState("REJECT")
				return
			}

			// set the canvas data and the new form values
			setCanvasData(data)
			setValues({
				canvasTitle: data.canvasTitle,
				canvasType: data.canvasType,
				canvasTimeFrame: data.canvasTimeFrame,
				canvasStartDate: data.canvasStartDate,
				canvasEndDate: data.canvasEndDate,
			})

			const isDup = await performDupFind(data, currentClient.id, useCustomTitle)
			setIsDuplicate(isDup !== false)

			// check if the canvas is using a custom title
			if (data.canvasTitle !== "") {
				setUseCustomTitle(true)
			}
			// Move to resolve
			changeState("RESOLVE")
		}
	}, [currentClient, changeState, id, setValues, useCustomTitle])

	useEffect(() => {
		// If component moves to `open` fetch the new data
		if (open) {
			fetchCanvasData()
		}
	}, [fetchCanvasData, open])
	// #endregion

	// #region Form Change Events
	const checkDuplicate = useCallback(async () => {
		if (currentClient?.id) {
			const isDup = await performDupFind(
				values,
				currentClient.id,
				useCustomTitle
			)
			setIsDuplicate(isDup !== false)
		}
	}, [values, currentClient, useCustomTitle])

	useEffect(() => {
		checkDuplicate()
	}, [checkDuplicate])

	function disableSave(): boolean {
		return (
			!isValid(values.canvasStartDate) ||
			!isValid(values.canvasEndDate) ||
			isDuplicate ||
			(useCustomTitle && values.canvasTitle === "")
		)
	}

	/**
	 * A custom change handler for the datepicker
	 *
	 * @template K
	 * @param {K} k
	 * @param {BaseCFCStruct[K]} v
	 */
	function changeDateValue(k: CanvasDateKeys, v: Date): void {
		const { canvasStartDate, canvasEndDate } = changeDate<CFCPanelSlice>(
			k,
			v,
			values
		)

		// Sets the field value
		setFieldValue("canvasStartDate", canvasStartDate, false)
		setFieldValue("canvasEndDate", canvasEndDate, false)
	}

	useEffect(() => {
		changeDateValue("canvasStartDate", values.canvasStartDate)
	}, [values.canvasTimeFrame, values.canvasStartDate])
	// #endregion

	// #region Component rendering
	/**
	 * Renders the component based on the state machine state
	 *
	 * @returns {ReactElement}
	 */
	function renderForStateMachine(): ReactElement {
		switch (stateMachine.value) {
			case "failure":
				return <DataNotFound />
			case "success":
				return (
					<>
						<CanvasTitle
							type={values.canvasType}
							timeframe={values.canvasTimeFrame}
							startDate={values.canvasStartDate}
							endDate={values.canvasEndDate}
							customTitle={values.canvasTitle}
							useCustomTitle={useCustomTitle}
						/>
						<ConfigPanel
							canvasTypeValue={values.canvasType}
							canvasTimeframeValue={values.canvasTimeFrame}
							onChange={handleChange}
							startDate={values.canvasStartDate}
							endDate={values.canvasEndDate}
							onDateChange={changeDateValue}
							customTitle={values.canvasTitle}
							changeCheck={(e: InputChange): void => {
								setUseCustomTitle(e.target.checked)
							}}
							useCustomTitle={useCustomTitle}
							wrapped={false}
							showDuplicateError={false}
						/>
						{isDuplicate && (
							<>
								<Spacer />
								<DuplicateCanvasError />
							</>
						)}
						<Spacer space={4} />
						<Typography component="em">
							Copying will copy your values over to the new canvas
						</Typography>
						<br />
						<Typography component="em">
							Copying to either a Plan or Forecast will move the closing balance
							to the opening
						</Typography>
					</>
				)
			case "loading":
			default:
				return <Loading />
		}
	}

	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby="copy-canvas-dialog-title"
			fullWidth
			maxWidth="md"
		>
			<DialogTitle id="copy-canvas-dialog-title">Copy Canvas</DialogTitle>
			<form onSubmit={handleSubmit}>
				<DialogContent>{renderForStateMachine()}</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>Cancel</Button>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						disabled={stateMachine.value !== "success" || disableSave()}
					>
						Copy
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	)
	// #endregion
}
