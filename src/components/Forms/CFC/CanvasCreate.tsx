import React, { ReactElement, useState, useCallback } from "react"
import { useFormik } from "formik"
import { Button, Box } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { BaseCFCStruct } from "../../../data/_config/shape"
import { initialValues } from "."
import { ConfigPanel, CanvasTitle } from "../../CFC"
import onCreate from "./onCreate"
import Spacer from "../../Spacer/Spacer"
import { routeVarReplacement, PrivateRoutes } from "../../../util/routes/routes"
import useCurrentClient from "../../../state/client/useCurrentClient"
import useStyles from "./__config/styles"
import createURLParams from "./createURLParams"
import changeDate, { CanvasDateKeys } from "./changeDate"

/**
 * Create canvas form.
 *
 * @export
 * @returns {ReactElement}
 */
export default function CreateCanvasForm(): ReactElement {
	const styles = useStyles()

	const [useCustomTitle, setUseCustomTitle] = useState(false)
	const history = useHistory()
	const [currentClient] = useCurrentClient()

	const { setFieldValue, handleChange, values, handleSubmit } = useFormik<
		BaseCFCStruct
	>({
		initialValues,
		onSubmit: async (formValues: BaseCFCStruct) => {
			if (currentClient?.id) {
				const id = await onCreate(formValues, currentClient.id)
				// Creates some url search parameters to pass onto the edit page
				const query = createURLParams(formValues, useCustomTitle)

				// Redirects the user to the edit page
				// eslint-disable-next-line
				history.push(
					`${routeVarReplacement(PrivateRoutes.CFCEdit, [
						[":id", `${id}`],
					])}?${query}`
				)
			}
		},
	})

	const {
		canvasTitle,
		canvasType,
		canvasTimeFrame,
		canvasStartDate,
		canvasEndDate,
	} = values

	/**
	 * A custom change handler for the datepicker
	 *
	 * @template K
	 * @param {K} k
	 * @param {BaseCFCStruct[K]} v
	 */
	function changeDateValue(k: CanvasDateKeys, v: Date): void {
		const { canvasStartDate: start, canvasEndDate: end } = changeDate<
			BaseCFCStruct
		>(k, v, values)

		// Sets the field value
		setFieldValue("canvasStartDate", start, false)
		setFieldValue("canvasEndDate", end, false)
	}

	const inputChange = useCallback(handleChange, [])

	return (
		<>
			<form onSubmit={handleSubmit}>
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
				<Box className={styles.box}>
					<Button color="primary" variant="contained" type="submit">
						Create Canvas
					</Button>
				</Box>
			</form>
		</>
	)
}
