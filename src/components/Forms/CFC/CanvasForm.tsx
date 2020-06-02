import React, {
	ReactElement,
	useState,
	useCallback,
	useMemo,
	useEffect,
} from "react"
import { useFormik } from "formik"
import { Box, Button, Divider } from "@material-ui/core"
import { useParams } from "react-router-dom"
import { isEqual } from "lodash-es"
import { useMachine } from "@xstate/react"
import { BaseCFCStruct, CashFlow } from "../../../data/_config/shape"
import { onSubmit, calculateInitial } from "."
import {
	ConfigPanel,
	OpeningBalance,
	CanvasTitle,
	CashSurplus,
	AvailableToSpend,
	CashBalance,
	IncomeTax,
	FallingBehind,
	RepeaterForm,
} from "../../CFC"
import { syncEndDate } from "../../../util/dates"
import Spacer from "../../Spacer/Spacer"
import EmployeeExpenses from "../../CFC/EmployeeExpenses"
import {
	calcCashFlowGST,
	calcTotalCashOut,
	calcCashFlowTotal,
} from "../../../state/CFC/accumulators"
import createCashFlowItem from "../../../state/CFC/createCashFlow"
import { useInputWrapper } from "../../CFC/__config/styles"
import removeCashflowItem from "./removeCashFlowItem"
import { CanvasFormProps } from "./__config/shape"
import IfElseLoading from "../../IfElseLoading"
import useCurrentClient from "../../../state/client/useCurrentClient"
import CFCUseCase from "../../../data/CFC/CFCLogic"
import LastSaved from "../../LastSaved"
import fetchMachine from "./__config/machine"
import DataNotFound from "../../CFC/DataNotFound"
import useStyles from "./__config/styles"
import { SnackbarMsgData } from "../../SnackbarMsg/SnackbarMsg"
import SnackbarMsg from "../../SnackbarMsg"

export default function CanvasForm({
	initialValues,
	customTitle,
}: CanvasFormProps): ReactElement {
	const cls = useInputWrapper()
	const styles = useStyles()
	const [lastSaved, setLastSaved] = useState(new Date())
	const { id: canvasId } = useParams()
	const [currentClient] = useCurrentClient()
	const [stateMachine, updateMachine] = useMachine(fetchMachine)
	const [snackbar, setSnackbar] = useState<SnackbarMsgData>({
		open: false,
		msg: "",
	})

	const { setFieldValue, handleChange, values, setValues } = useFormik<
		BaseCFCStruct
	>({
		initialValues,
		onSubmit,
	})
	const [previousValues, setPreviousValues] = useState(initialValues)
	const [useCustomTitle, setUseCustomTitle] = useState(customTitle)
	const calculated = useMemo(() => calculateInitial(values), [values])

	const fetchFormData = useCallback(async () => {
		if (currentClient?.id) {
			const data = await CFCUseCase.findById(parseInt(canvasId, 10))
			if (data) {
				setValues(data, false)
				setPreviousValues(data)
				if (data.canvasTitle !== "") {
					setUseCustomTitle(true)
				}
				updateMachine("RESOLVE")
			} else {
				updateMachine("REJECT")
			}
		}
	}, [currentClient, canvasId, updateMachine])

	const handleFormSave = useCallback(async () => {
		await CFCUseCase.update(parseInt(canvasId, 10), values)
		setPreviousValues(values)
		setLastSaved(new Date())
	}, [canvasId, values])

	useEffect(() => {
		fetchFormData()
	}, [fetchFormData])

	useEffect(() => {
		const id = setInterval(async () => {
			if (!isEqual(previousValues, values)) {
				handleFormSave()
			}
		}, 1500)

		return (): void => clearInterval(id)
	}, [previousValues, values, handleFormSave])

	const {
		canvasTitle,
		canvasType,
		canvasTimeFrame,
		canvasStartDate,
		canvasEndDate,
		openingBalance,
		paygWithholding,
		superAmount,
		incomeTax,
		cashToOwner,
		stock,
		creditors,
		debtors,
		assets,
		loans,
		cashInItems,
		cashOutItems,
	} = values

	const cashInTotal = useMemo(() => calcCashFlowTotal(cashInItems), [
		cashInItems,
	])
	const cashInGST = useMemo(() => calcCashFlowGST(cashInItems), [cashInItems])
	const cashOutTotal = useMemo(() => calcTotalCashOut(values), [values])
	const cashOutGST = useMemo(() => calcCashFlowGST(cashOutItems), [
		cashOutItems,
	])

	/**
	 * A custom change handler for the datepicker
	 *
	 * @template K
	 * @param {K} k
	 * @param {BaseCFCStruct[K]} v
	 */
	function changeDateValue<K extends keyof BaseCFCStruct>(
		k: K,
		v: BaseCFCStruct[K]
	): void {
		// Sets the field value
		setFieldValue(k, v, false)

		if (
			k === "canvasStartDate" &&
			syncEndDate(v as Date, values.canvasEndDate)
		) {
			// This checks if the start date is ahead of the end date
			// if it is, it will set the end date to the start date
			setFieldValue("canvasEndDate", v as Date, false)
		}
	}

	const addCashFlowItem = useCallback(
		(key: "cashInItems" | "cashOutItems") => (): void => {
			const items = values[key]
			setFieldValue(key, items.concat(createCashFlowItem()), false)
		},
		[setFieldValue, values]
	)

	const inputChange = useCallback(handleChange, [])

	const removeItem = useCallback(
		(key: "cashInItems" | "cashOutItems") => (id: CashFlow["id"]): void => {
			setFieldValue(key, removeCashflowItem(id, values[key]), false)
		},
		[values, setFieldValue]
	)

	function showSnackbar(
		msg: SnackbarMsgData["msg"],
		severity: SnackbarMsgData["severity"]
	): void {
		setSnackbar({ ...snackbar, msg, severity, open: true })
	}

	function handleSnackbarClose(
		event?: React.SyntheticEvent,
		reason?: string
	): void {
		if (reason === "clickaway") {
			return
		}

		setSnackbar({ ...snackbar, open: false })
	}

	function handleManualSave(e: MouseButtonEvent): void {
		e.preventDefault()
		handleFormSave()
		showSnackbar("Canvas saved", "success")
	}

	if (stateMachine.value === "failure") {
		return <DataNotFound />
	}

	return (
		<>
			<CanvasTitle
				type={canvasType}
				timeframe={canvasTimeFrame}
				startDate={canvasStartDate}
				endDate={canvasEndDate}
				customTitle={canvasTitle}
				useCustomTitle={useCustomTitle}
			/>
			<ConfigPanel
				canvasTypeValue={canvasType}
				canvasTimeframeValue={canvasTimeFrame}
				onChange={inputChange}
				startDate={canvasStartDate}
				endDate={canvasEndDate}
				onDateChange={changeDateValue}
				customTitle={canvasTitle}
				changeCheck={(e: InputChange): void => {
					setUseCustomTitle(e.target.checked)
				}}
				useCustomTitle={useCustomTitle}
			/>
			<IfElseLoading if={stateMachine.value !== "loading"}>
				<Spacer />
				<OpeningBalance value={openingBalance} onChange={inputChange} />
				<Spacer />
				<Box className={cls.wrapper}>
					<RepeaterForm
						name="cashInItems"
						values={cashInItems}
						onChange={inputChange}
						total={cashInTotal}
						gst={cashInGST}
						addItem={addCashFlowItem("cashInItems")}
						removeItem={removeItem("cashInItems")}
					/>
				</Box>
				<Spacer />
				<Box className={cls.wrapper}>
					<RepeaterForm
						name="cashOutItems"
						values={cashOutItems}
						onChange={inputChange}
						total={cashOutTotal}
						gst={cashOutGST}
						addItem={addCashFlowItem("cashOutItems")}
						removeItem={removeItem("cashOutItems")}
					/>
				</Box>
				<Spacer />
				<EmployeeExpenses
					payg={paygWithholding}
					super={superAmount}
					onChange={inputChange}
				/>
				<Spacer />
				<CashSurplus value={`${calculated.cashSurplus}`} />
				<Spacer />
				<AvailableToSpend value={`${calculated.availableToSpend}`} />
				<Spacer />
				<IncomeTax value={incomeTax} onChange={inputChange} />
				<Spacer />
				<CashBalance
					cashToOwner={cashToOwner}
					onChange={inputChange}
					closingBalance={calculated.closingBalance}
				/>
				<Spacer />
				<FallingBehind
					stock={stock}
					creditors={creditors}
					debtors={debtors}
					assets={assets}
					loans={loans}
					totalNetAssets={calculated.totalNetAssets}
					onChange={inputChange}
				/>
				<Spacer space={4} />
				<Divider />
				<Spacer />
				<Box className={styles.box}>
					<LastSaved date={lastSaved} />
					<Button
						variant="contained"
						color="primary"
						onClick={handleManualSave}
						className={styles.saveButton}
					>
						Save canvas
					</Button>
				</Box>
			</IfElseLoading>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<SnackbarMsg {...snackbar} onClose={handleSnackbarClose} />
		</>
	)
}
