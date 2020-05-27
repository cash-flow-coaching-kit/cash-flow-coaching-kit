import React, { ReactElement, useEffect } from "react"
import { useFormik } from "formik"
import { Grid } from "@material-ui/core"
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
	OpeningBalance,
	CashSurplus,
	AvailableToSpend,
} from "../../components/CFC"
import FourQuestions from "../../components/HealthCheck/FourQuestions"
import Spacer from "../../components/Spacer/Spacer"

const CFCCanvas = (): ReactElement => {
	const { values, handleChange } = useFormik<BaseCFCStruct>({
		initialValues,
		onSubmit,
	})
	const [calculated, changeCalculated] = useCalculated(
		calculateInitial(initialValues)
	)

	useEffect(() => {
		changeCalculated(values)
	}, [values, changeCalculated])

	return (
		<>
			<PageContainer>
				<Grid container spacing={3}>
					<Grid item sm={9}>
						<OpeningBalance onChange={handleChange} />
						<Spacer />
						<CashSurplus value={`${calculated.cashSurplus}`} />
						<Spacer />
						<AvailableToSpend value={`${calculated.availableToSpend}`} />
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
