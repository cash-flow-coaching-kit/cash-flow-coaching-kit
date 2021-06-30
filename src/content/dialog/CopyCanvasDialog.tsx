import React, {
	ReactElement,
	useState,
	useCallback,
	useEffect,
	ChangeEvent,
} from "react"
import {
	Dialog,
	DialogTitle,
	Typography,
	DialogActions,
	DialogContent,
	Button,
	Box,
	makeStyles,
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
import SelectField from "../../components/SelectField"
import applyTrackValues from "./utilities/applyTrackValues"

const useStyles = makeStyles((theme) => ({
	trackBox: {
		display: "flex",
		alignItems: "center",
	},
}))

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
	const cls = useStyles()

	// #region State Management
	const [stateMachine, changeState] = useMachine(fetchMachine)
	const [useCustomTitle, setUseCustomTitle] = useState(false)
	const history = useHistory()
	const { id } = useParams() as any  // eslint-disable-line
	const [currentClient] = useCurrentClient()
	const [canvasData, setCanvasData] = useState<CFCStruct>()
	const [isDuplicate, setIsDuplicate] = useState(false)
	const [toTrack, setToTrack] = useState(false)
	const [divideBy, setDivideBy] = useState(1)
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

	const { setValues, handleChange, values, handleSubmit, setFieldValue } =
		useFormik<CFCPanelSlice>({
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
					// apply Track values if required
					const newData = toTrack ? applyTrackValues(data, divideBy) : data
					// remove the id & clientid field form data
					const cleaned = omit(newData, ["id"])
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
	const changeDateValue = (k: CanvasDateKeys, v: Date): void => {
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
		setToTrack(values.canvasType === "track")
	}, [values.canvasType, setToTrack])
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
						<Typography component="em">
							If you copy to a Plan or Forecast canvas, your closing balance
							will be your opening balance.
						</Typography>
						<br />
						<Typography component="em">
							All your figures will be copied to a new Canvas.
						</Typography>
						<Spacer />
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
						{toTrack && (
							<>
								<Spacer space={3} />
								<>
									<Box className={cls.trackBox}>
										<Typography>Divide copied canvas figures by:</Typography>
										<SelectField
											name="divide-by"
											value={divideBy}
											label="Divide by"
											options={[
												{ label: "1", value: 1 },
												{ label: "2", value: 2 },
												{ label: "3", value: 3 },
												{ label: "4", value: 4 },
												{ label: "12", value: 12 },
												{ label: "26", value: 26 },
												{ label: "52", value: 52 },
											]}
											onChange={(e: ChangeEvent<HTMLInputElement>): void =>
												setDivideBy(parseInt(e.target.value, 10) || 1)
											}
										/>
									</Box>
									<Spacer />
									<Typography component="em">
										* The figure you enter will divide your Cash IN, Cash OUT
										and regular financial commitments with the divisor
									</Typography>
									<br />
									<Typography component="em">
										* When dividing figures for your canvas, consider seasonal
										factors which may impact your cash flow
									</Typography>
								</>
							</>
						)}
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
