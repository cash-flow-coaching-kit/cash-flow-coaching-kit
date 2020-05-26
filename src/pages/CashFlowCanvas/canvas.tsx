import React, { ReactElement, useEffect } from "react"
import { useFormik } from "formik"
import { Typography } from "@material-ui/core"
import { BaseCFCStruct } from "../../data/_config/shape"
import {
	initialValues,
	onSubmit,
	calculateInitial,
} from "../../components/Forms/CFC"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"
import MoneyInput from "../../components/MoneyInput"
import useCalculated from "../../state/CFC/useCalculated"

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
				<h1>CFCCanvas</h1>
				<MoneyInput
					variant="outlined"
					name="openingBalance"
					onChange={handleChange}
				/>
				<Typography>{calculated.totalNetAssets}</Typography>
			</PageContainer>
			<PageTip tip="CFCanvasTip" />
		</>
	)
}

export default CFCCanvas
