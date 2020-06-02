import React, { ReactElement, useState, useCallback } from "react"
import { useFormik } from "formik"
import { Button } from "@material-ui/core"
import { getTime } from "date-fns"
import { useHistory } from "react-router-dom"
import { BaseCFCStruct } from "../../../data/_config/shape"
import { initialValues } from "."
import { ConfigPanel, CanvasTitle } from "../../CFC"
import { syncEndDate } from "../../../util/dates"
import onCreate from "./onCreate"
import Spacer from "../../Spacer/Spacer"
import { routeVarReplacement, PrivateRoutes } from "../../../util/routes/routes"
import useCurrentClient from "../../../state/client/useCurrentClient"

/**
 * Create canvas form.
 *
 * @export
 * @returns {ReactElement}
 */
export default function CreateCanvasForm(): ReactElement {
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
				const n = new URLSearchParams()
				n.append("title", formValues.canvasTitle)
				n.append("useCustom", useCustomTitle ? "1" : "0")
				n.append("type", formValues.canvasType)
				n.append("timeframe", formValues.canvasTimeFrame)
				n.append("startDate", getTime(formValues.canvasStartDate).toString())
				n.append("endDate", getTime(formValues.canvasEndDate).toString())

				// Redirects the user to the edit page
				// eslint-disable-next-line
				history.push(
					`${routeVarReplacement(PrivateRoutes.CFCEdit, [
						[":id", id.toString()],
					])}?${n.toString()}`
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
				<Button color="primary" variant="contained" type="submit">
					Create Canvas
				</Button>
			</form>
		</>
	)
}
