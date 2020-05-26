import React, { ReactElement } from "react"
import { useFormik } from "formik"
import { BaseCFCStruct } from "../../data/_config/shape"
import { initialValues, onSubmit } from "../../components/Forms/CFC"
import { PageContainer } from "../../components/Layouts"
import PageTip from "../../components/PageTip"

const CFCCanvas = (): ReactElement => {
	const formik = useFormik<BaseCFCStruct>({
		initialValues,
		onSubmit,
	})

	return (
		<>
			<PageContainer>
				<h1>CFCCanvas</h1>
			</PageContainer>
			<PageTip tip="CFCanvasTip" />
		</>
	)
}

export default CFCCanvas
