import React, { ReactElement } from "react"
import { useFormik } from "formik"
import { BaseCFCStruct } from "../../data/_config/shape"
import { initialValues, onSubmit } from "../../components/Forms/CFC"

const CFCCanvas = (): ReactElement => {
	const formik = useFormik<BaseCFCStruct>({
		initialValues,
		onSubmit,
	})

	return (
		<>
			<h1>CFCCanvas</h1>
		</>
	)
}

export default CFCCanvas
