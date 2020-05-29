import React, { ReactElement, useState, useCallback, useMemo } from "react"
import { useFormik } from "formik"
import { Box } from "@material-ui/core"
import { BaseCFCStruct, CashFlow } from "../../../data/_config/shape"
import { initialValues, onSubmit, calculateInitial } from "."
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

export default function CanvasForm(): ReactElement {
	const cls = useInputWrapper()

	const { setFieldValue, handleChange, values } = useFormik<BaseCFCStruct>({
		initialValues,
		onSubmit,
	})
	const [useCustomTitle, setUseCustomTitle] = useState(false)
	const calculated = useMemo(() => calculateInitial(values), [values])

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
		setFieldValue(k, v)

		if (
			k === "canvasStartDate" &&
			syncEndDate(v as Date, values.canvasEndDate)
		) {
			// This checks if the start date is ahead of the end date
			// if it is, it will set the end date to the start date
			setFieldValue("canvasEndDate", v as Date)
		}
	}

	const addCashFlowItem = useCallback(
		(key: "cashInItems" | "cashOutItems") => (): void => {
			const items = values[key]
			setFieldValue(key, items.concat(createCashFlowItem()))
		},
		[setFieldValue, values]
	)

	const inputChange = useCallback(handleChange, [])

	const removeItem = useCallback(
		(key: "cashInItems" | "cashOutItems") => (id: CashFlow["id"]): void => {
			setFieldValue(key, removeCashflowItem(id, values[key]))
		},
		[values, setFieldValue]
	)

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
		</>
	)
}
