import React, { ReactElement, useEffect, useState } from "react"
import { useFormik } from "formik"
import { Grid } from "@material-ui/core"
import { defer } from "lodash-es"
import { BaseCFCStruct } from "../../data/_config/shape"
import {
	initialValues,
	onSubmit,
	calculateInitial,
} from "../../components/Forms/CFC"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import useCalculated from "../../state/CFC/useCalculated"
import {
	ConfigPanel,
	OpeningBalance,
	CanvasTitle,
	CashSurplus,
	AvailableToSpend,
	CashBalance,
	IncomeTax,
	FallingBehind,
} from "../../components/CFC"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import { syncEndDate } from "../../util/dates"
import Spacer from "../../components/Spacer/Spacer"
import ExpandableNav from "../../components/ExpandableNav"
import EmployeeExpenses from "../../components/CFC/EmployeeExpenses"

const CFCCanvas = (): ReactElement => {
	const form = useFormik<BaseCFCStruct>({
		initialValues,
		onSubmit,
	})
	const [calculated, changeCalculated] = useCalculated(
		calculateInitial(initialValues)
	)
	const [useCustomTitle, setUseCustomTitle] = useState(false)

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
		form.setFieldValue(k, v)

		if (
			k === "canvasStartDate" &&
			syncEndDate(v as Date, form.values.canvasEndDate)
		) {
			// This checks if the start date is ahead of the end date
			// if it is, it will set the end date to the start date
			form.setFieldValue("canvasEndDate", v as Date)
		}
	}

	useEffect(() => {
		defer(() => {
			changeCalculated(form.values)
		})
	}, [form.values, changeCalculated])

	return (
		<>
			<PageContainer maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item sm={9}>
						<CanvasTitle
							type={form.values.canvasType}
							timeframe={form.values.canvasTimeFrame}
							startDate={form.values.canvasStartDate}
							endDate={form.values.canvasEndDate}
							customTitle={form.values.canvasTitle}
							useCustomTitle={useCustomTitle}
						/>
						<ConfigPanel
							canvasTypeValue={form.values.canvasType}
							canvasTimeframeValue={form.values.canvasTimeFrame}
							onChange={form.handleChange}
							startDate={form.values.canvasStartDate}
							endDate={form.values.canvasEndDate}
							onDateChange={changeDateValue}
							customTitle={form.values.canvasTitle}
							changeCheck={(e: InputChange): void => {
								setUseCustomTitle(e.target.checked)
							}}
							useCustomTitle={useCustomTitle}
						/>
						<Spacer />
						<OpeningBalance
							value={form.values.openingBalance}
							onChange={form.handleChange}
						/>
						<Spacer />
						<ExpandableNav
							title="Cash IN"
							subHeading="Cash received, or revenue, including GST (if applicable). This may be for services or sales. See Change Levers for ideas on how to improve your Cash IN."
						>
							Cash In
						</ExpandableNav>
						<ExpandableNav
							title="Cash OUT"
							subHeading="All expenses, including GST (if applicable). See Change Levers for ideas on how to reduce your Cash OUT."
						>
							Cash Out
						</ExpandableNav>
						<Spacer />
						<EmployeeExpenses
							payg={form.values.paygWithholding}
							super={form.values.superAmount}
							onChange={form.handleChange}
						/>
						<Spacer />
						<CashSurplus value={`${calculated.cashSurplus}`} />
						<Spacer />
						<AvailableToSpend value={`${calculated.availableToSpend}`} />
						<Spacer />
						<IncomeTax
							value={form.values.incomeTax}
							onChange={form.handleChange}
						/>
						<Spacer />
						<CashBalance
							cashToOwner={form.values.cashToOwner}
							onChange={form.handleChange}
							closingBalance={calculated.closingBalance}
						/>
						<Spacer />
						<FallingBehind
							stock={form.values.stock}
							creditors={form.values.creditors}
							debtors={form.values.debtors}
							assets={form.values.assets}
							loans={form.values.loans}
							totalNetAssets={calculated.totalNetAssets}
							onChange={form.handleChange}
						/>
					</Grid>
					<Grid item sm={3}>
						<FourQuestions />
					</Grid>
				</Grid>
			</PageContainer>
			<PageTip tip="CFCanvasTip" />
		</>
	)
}

export default CFCCanvas
